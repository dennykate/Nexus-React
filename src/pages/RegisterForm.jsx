import React, { useState } from "react";
import FillLogo from "../assets/Logo Fill.png";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useRegisterMutation } from "../feature/api/authApi";
import { useEffect } from "react";
import "animate.css";
import { Toaster, toast } from "react-hot-toast";
import { PulseLoader } from "react-spinners";
import Cookies from "js-cookie";

const RegisterForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [password_confirmation, setConfirmed_password] = useState("");

  const navigate = useNavigate();
  const [register, {isLoading}] = useRegisterMutation();
  
  const redirectIfUserLogin = () => {
    const token = Cookies.get("token");
    const keepme = Cookies.get("keepme")
      ? JSON.parse(Cookies.get("keepme"))
      : Cookies.get("keepme");
    // console.log(typeof  keepme)
    if (keepme && token) {
      return navigate("/");
    }
  };
  redirectIfUserLogin();
  // console.log(user);

  const location = useLocation();
  console.log(location);
  const currentRoute = location?.pathname;
  const [activeLink, setActiveLink] = useState(currentRoute);
  const [backdrop, setBackDrop] = useState(0);

  window.addEventListener("resize", (event) => {
    setBackDrop(window.innerWidth / 3);
  });

  useEffect(() => {
    setBackDrop(window.innerWidth / 3);
  }, [setBackDrop]);
  const handleClick = (link) => {
    setActiveLink(link);
  };

  const registerHandler = async (e) => {
    e.preventDefault();
    const user = { name, email, password, password_confirmation };
    if (password.length < 8) {
      return toast.error("Password must have at least 8 characters.");
    }
    const { data } = await register(user);
    console.log(data);
    if (data?.success) {
      navigate("/login");
    }
  };
  return (
    <>
      <div className="bg-secondary min-h-screen  text-white relative">
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
        <div className="z-10 mx-auto w-[90%]  sm:w-[85%] md:w-[78%] md:px-1 lg:w-[85%]    xl:w-[85%] xl:py-24 2xl:w-[85%] 2xl:py-32   flex flex-col lg:flex-row relative">
          {/* nexus block  */}
          <div className="w-full py-4 px-2 sm:px-16 sm:py-5 md:w-full  lg:py-32 xl:py-16   2xl:px-28 2xl:py-2  bg-[rgba(1,28,204,0.8)] flex flex-col  justify-center items-center  ">
            <div className="imageLogo w-56 mb-3">
              <img
                src={FillLogo}
                className="w-full animate__animated  animate__slideInUp "
                alt=""
              />
            </div>
            <h2 className="text-2xl font-semibold mb-8 xl:text-3xl xl:mb-12 2xl:text-4xl  select-none animate__animated  animate__slideInUp ">
              We are the Number One!
            </h2>

            <div className=" w-full  flex flex-col justify-center mb-10   ">
              <button className=" text-xl w-[95%] mx-auto border-[0.5px] py-3 mb-5 xl:py-5 hover:bg-white hover:text-tertiary ease-in-out duration-500 cursor-pointer animate__animated  animate__slideInUp ">
                Sign in with Google
              </button>
              <button className=" text-xl w-[95%] mx-auto border-[0.5px] py-3 xl:py-5 hover:bg-white hover:text-tertiary ease-in-out duration-500 cursor-pointer animate__animated  animate__slideInUp ">
                Sign in with Facebook
              </button>
            </div>
          </div>

          {/* register form  */}
          <div className="w-full  px-2 py-16  sm:px-8 md:py-7  bg-white  text-tertiary lg:py-20  xl:px-6   xl:py-16  ">
            {/* UpperRegister  */}
            <div className="UpperRegister  flex     justify-between  items-center px-5 mb-8 md:items-center md:mb-12 lg:flex-col lg:items-start  xl:flex-row xl:mb-2  ">
              <h1 className="text-lg sm:text-2xl   font-bold md:mb-5 md:text-3xl lg:text-2xl xl:text-3xl">
                Register
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
            {/* LowerRegister */}
            {/* w-full px-5 2xl:pr-28 md:px-28 lg:px-5 lg:pt-20 xl:pt-10 2xl:px-5 2xl:py-2 */}
            <div className="LowerRegister w-full px-5 2xl:pr-28 md:px-28 lg:px-12 lg:pt-10  xl:pt-10 xl:px-5 2xl:px-5 2xl:py-2">
              {/* register form  */}
              <form
                action=""
                onSubmit={registerHandler}
                className="flex flex-col  "
              >
                <input
                  className="py-2 px-[15px] w-full border-[1px] rounded-md mb-5   md:py-3 md:mb-3 xl:mb-4 focus-within:outline-none "
                  required
                  type="text"
                  placeholder="Your Name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
                <input
                  className="py-2 px-[15px] w-full  border-[1px] rounded-md mb-5 md:mb-3 md:py-3 xl:mb-4 focus-within:outline-none"
                  required
                  type="email"
                  placeholder="Your Email Address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                <div className="xl:flex  ">
                  <input
                    className="py-2 px-[15px] w-full  border-[1px] rounded-md mb-5 md:mb-3 md:py-3 xl:mr-3 xl:mb-4 2xl:mr-5  focus-within:outline-none  "
                    required
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                  <input
                    className="py-2 px-[15px] w-full  border-[1px] rounded-md mb-5 md:mb-3 md:py-3 xl:mb-4  focus-within:outline-none "
                    required
                    type="password"
                    placeholder="Confirm Password"
                    value={password_confirmation}
                    onChange={(e) => setConfirmed_password(e.target.value)}
                  />
                </div>
                <button
                type="submit"
                  disabled={isLoading && true}
                  className="py-2 px-[15px] mb-3 w-full  bg-primary border-[1px] rounded-md text-white text-[18px] xl:mb-5 xl:py-3 hover:bg-[#0249bd] ease-in-out duration-500 cursor-pointer" 
                >
                 
                 {isLoading ? ( <PulseLoader className="mx-auto block" color="white" size="8px" />) : "Register"}
                </button>

                <div className="flex justify-center items-center  ">
                  <p className="text-md font-semibold text-gray-500 pr-[5px] lg:text-xs xl:font-semibold text-xs sm:text-md md:text-md select-none   ">
                    Already have an account?
                  </p>
                  <Link
                    to="/login"
                    className="  lg:text-xs text-primary font-semibold underline text-xs sm:text-md md:text-sm select-none"
                  >
                    Go to Sign In
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

export default RegisterForm;
