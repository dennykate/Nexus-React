import React, { useEffect, useState } from "react";
import FillLogo from "../assets/Logo Fill.png";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useLoginMutation } from "../feature/api/authApi";
import { HiOutlineEye, HiOutlineEyeOff } from "react-icons/hi";
import "animate.css";
import { useDispatch } from "react-redux";
import { addUser } from "../feature/services/authSlice";
import Cookies from "js-cookie";
import { Toaster, toast } from "react-hot-toast";
import { PulseLoader } from "react-spinners";

const LoginForm = () => {
  const location = useLocation();
  // console.log(location);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [keepme, setkeepme] = useState(false);

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [login, { isLoading }] = useLoginMutation();
  const currentRoute = location?.pathname;
  const [activeLink, setActiveLink] = useState(currentRoute);

  const [backdrop, setBackDrop] = useState(0);

  window.addEventListener("resize", (event) => {
    setBackDrop(window.innerWidth / 3);
  });

  useEffect(() => {
    redirectIfUserLogin();
  }, []);

  const redirectIfUserLogin = () => {
    const token = Cookies.get("token");

    if (token) {
      navigate("/");
    }
  };

  useEffect(() => {
    setBackDrop(window.innerWidth / 3);
  }, [setBackDrop]);

  const togglePw = () => {
    setShowPassword(!showPassword);
  };
  const handleClick = (link) => {
    setActiveLink(link);
  };

  // console.log(user);

  const loginHandler = async (e) => {
    e.preventDefault();
    console.log(keepme);
    const user = { email, password };
    if (password.length < 8) {
      return toast.error("Password must have at least 8 characters.");
    }
    const { data, error } = await login(user);
    console.log(data);
    console.log(error);
    if (data?.success) {
      let newData = {
        user: { ...data.user, password },
        token: data.token,
        keepme,
      };
      dispatch(addUser(newData));
      navigate("/");
    } else {
      return toast.error("Login fail! Please check your information");
    }
  };
  return (
    <>
      <div className="bg-secondary min-h-screen  text-white relative ">
        {/* Background layer */}
        <div
          className={
            " mainVisual backdrop-animation absolute left-0 top-0 h-full   w-0 bg-[#1a3d8f] duration-1000"
          }
          style={{ width: backdrop }}
        >
          {" "}
        </div>

        {/* form and logo div  */}
        <div className=" z-10 mx-auto w-[90%]  sm:w-[85%] md:w-[78%] md:px-1 lg:w-[85%]   xl:w-[85%] xl:py-24  2xl:w-[85%] 2xl:py-32   flex flex-col lg:flex-row relative ">
          {/* nexus block  */}
          <div className="w-full py-4 px-2 sm:px-16 sm:py-5 md:w-full  lg:py-32 xl:py-16  2xl:px-28 2xl:py-2  bg-[rgba(1,28,204,0.8)] flex flex-col  justify-center items-center    ">
            <div className="imageLogo w-56 mb-3">
              <img
                src={FillLogo}
                className="w-full animate__animated animate__slideInUp  "
                alt=""
              />
            </div>
            <h2 className="text-2xl font-semibold mb-8 xl:text-4xl xl:mb-12 2xl:text-4xl select-none animate__animated  animate__slideInUp  ">
              We are the Number One!
            </h2>

            <div className=" w-full  flex flex-col justify-center mb-10   ">
              <button className="  animate__animated  animate__slideInUp  text-xl w-[95%] mx-auto border-[0.5px] py-3 mb-5 xl:py-5 hover:bg-white hover:text-tertiary ease-in-out duration-500 cursor-pointer">
                Sign in with Google
              </button>
              <button className="  animate__animated  animate__slideInUp  text-xl w-[95%] mx-auto border-[0.5px] py-3 xl:py-5 hover:bg-white hover:text-tertiary ease-in-out duration-500 cursor-pointer ">
                Sign in with Facebook
              </button>
            </div>
          </div>

          {/* login form  */}
          <div className="w-full  px-2 py-16  sm:px-8 md:py-7   bg-white  text-tertiary lg:py-20  xl:px-6 xl:py-16 ">
            {/* Upperlogin  */}
            <div className="UpperRegister  flex  justify-between lg:flex-col lg:items-start  items-center px-5 mb-8 md:items-center md:mb-12    xl:flex-row xl:mb-2  ">
              <h1 className="text-lg sm:text-2xl   font-bold md:mb-5 md:text-3xl lg:text-2xl xl:text-3xl">
                Login
              </h1>
              <div className="ButtonPart border-[1px] border-tertiary ">
                <Link to="/login">
                  <button
                    className={`px-2 py-1 font-semibold text-md  h-full md:py-2 md:px-8 xl:py-3 xl:px-9 xl:text-lg 2xl:px-6  ${
                      activeLink === "/login"
                        ? "bg-primary text-white"
                        : "bg-white text-black"
                    }  `}
                    onClick={() => handleClick("/login")}
                  >
                    Login
                  </button>
                </Link>
                <Link to="/register">
                  <button
                    className={`px-2 py-1 font-semibold text-md md:py-2   xl:py-3 xl:px-9  xl:text-lg 2xl:px-6   ${
                      activeLink === "/register"
                        ? "bg-primary text-white"
                        : "bg-white text-black"
                    }    `}
                    onClick={() => handleClick("/register")}
                  >
                    Register
                  </button>
                </Link>
              </div>
            </div>
            {/* LowerLogin */}
            <div className="LowerLogin w-full px-5 2xl:pr-28 md:px-28 lg:px-5 lg:pt-20 xl:pt-10 2xl:px-5 2xl:py-2  ">
              {/* login form  */}
              <form
                action=""
                onSubmit={loginHandler}
                className="flex flex-col "
              >
                <input
                  className="py-2 px-[15px] w-full  border-[1px] rounded-md mb-5 md:mb-8 md:py-3  xl:mb-4 focus-within:outline-none "
                  required
                  type="email"
                  placeholder="Your Email Address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />

                <div className="relative">
                  <input
                    className="py-2 px-[15px] w-full  border-[1px] rounded-md mb-5 md:mb-8 md:py-3 xl:mr-3 xl:mb-4 2xl:mr-5 focus-within:outline-none  "
                    type={showPassword ? "text" : "password"}
                    required
                    placeholder="*******"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                  <span
                    className="absolute top-6 right-5 transform -translate-y-1/2 cursor-pointer text-gray-500"
                    onClick={togglePw}
                  >
                    {showPassword ? <HiOutlineEye /> : <HiOutlineEyeOff />}
                  </span>
                </div>
                {/* <HiOutlineEye/>
                <HiOutlineEyeOff/> */}

                {/* checkbox and forgot pw  */}
                <div className="flex justify-between mb-5 md:mb-8 md:py-3 xl:mb-4">
                  <div className="checkbox">
                    <label className="inline-flex items-center">
                      <input
                        type="checkbox"
                        className="form-checkbox h-5 w-4 bg-gray-400   "
                        value={keepme}
                        onClick={() => setkeepme(!keepme)}
                      />
                      <span className="ml-2 text-gray-400 xl:text-[15px] lg:text-sm text-xs sm:text-md md:text-md select-none  ">
                        {" "}
                        Keep me logged in
                      </span>
                    </label>
                  </div>
                  <div className="">
                    <Link
                      to="/forgetpassword"
                      className=" text-primary font-semibold underline cursor-pointer text-xs sm:text-md md:text-md lg:text-sm xl:text-[15px]"
                    >
                      Forgot Password
                    </Link>
                  </div>
                </div>
                <button
                  type="submit"
                  disabled={isLoading && true}
                  className="py-2 px-[15px] mb-3 w-full  bg-primary border-[1px] rounded-md text-white text-[18px] xl:mb-5 xl:py-3 hover:bg-[#0249bd] ease-in-out duration-500 cursor-pointer "
                >
                  {isLoading ? (
                    <PulseLoader
                      className="mx-auto block"
                      color="white"
                      size="8px"
                    />
                  ) : (
                    "Login"
                  )}
                </button>

                <div className="flex justify-center items-center  ">
                  <p className="text-md font-semibold text-gray-500 pr-[5px] lg:text-xs xl:font-semibold text-xs sm:text-md md:text-md select-none     ">
                    Don't have an account?
                  </p>
                  <Link
                    to="/register"
                    className="lg:text-xs text-primary font-semibold underline text-xs sm:text-md md:text-sm select-none"
                  >
                    Register
                  </Link>
                </div>
              </form>
            </div>
          </div>
        </div>
        <Toaster />
      </div>
    </>
  );
};

export default LoginForm;
