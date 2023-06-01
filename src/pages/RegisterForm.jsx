import React, { useState } from "react";
import FillLogo from "../assets/Logo Fill.png";
import { Link, useNavigate } from "react-router-dom";
import { useRegisterMutation } from "../feature/api/authApi";

const RegisterForm = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("123456789");
    const [password_confirmation, setConfirmed_password] = useState("123456789");

    const navigate = useNavigate();
    const [register] = useRegisterMutation();

    // console.log(user);
    
    
    const registerHandler = async(e) => {
        e.preventDefault();
        const user = { name, email, password, password_confirmation };
        const {data} = await register(user);
      console.log(data);
      if(data?.success){
        navigate("/login")
      }

        
    }
  return (
    <>
      <div className="bg-secondary text-white relative">
        {/* Background layer */}
        {/* <div className="mainVisual w-1/4 block bg-[#1a3d8f]  absolute h-screen top-0 left-0 z-10 "> </div> */}
      
       <div className=" z-40   py-5 sm:py-12 md:py-12 md:px-5 lg:py-24 lg:px-7 2xl:px-5">
            {/* form and logo div  */}
          <div className=" w-[90%] sm:w-[85%] xl:w-[85%]   mx-auto flex flex-col lg:flex-row  rounded-md shadow-lg ">
            {/* nexus block  */}
            <div className="w-full sm:px-16 sm:py-5 md:w-full md:py-10 lg:w-[90%] lg:py-5 2xl:py-36 2xl:px-28  bg-[rgba(1,28,204,0.8)] flex flex-col  justify-center items-center  ">
              <div className="imageLogo w-56 mb-3">
                <img src={FillLogo} className="w-full" alt="" />
              </div>
              <h2 className="text-2xl font-semibold mb-8 xl:text-3xl xl:mb-12 2xl:text-4xl">
                We are the Number One !
              </h2>

              <div className=" w-full  flex flex-col justify-center mb-10   ">
                <button className=" text-xl w-[95%] mx-auto border-[1px] py-3 mb-5 xl:py-5">
                  Sign in with Google
                </button>
                <button className=" text-xl w-[95%] mx-auto border-[1px] py-3 xl:py-5">
                  Sign in with Facebook
                </button>
              </div>
            </div>

            {/* register form  */}
            <div className="w-full sm:px-8   bg-white  text-tertiary py-10 xl:px-6 2xl:pt-20  ">
            {/* UpperRegister  */}
              <div className="UpperRegister  flex   justify-between items-center px-5 mb-8 md:items-start md:mb-12 lg:flex-col xl:flex-row xl:mb-9 2xl:mb-24 ">
                <h1 className="text-2xl font-bold md:mb-5 md:text-3xl xl:text-4xl">Register</h1>
                <div className="ButtonPart border-[1px] border-tertiary ">
                  <button className="px-4 py-1 font-semibold text-md bg-primary h-full md:py-2 md:px-8 xl:py-3 xl:px-9 xl:text-lg 2xl:px-6">
                    Login
                  </button>
                  <button className="px-4 py-1 font-semibold text-md h-full xl:py-3 xl:px-9  xl:text-lg 2xl:px-6 ">
                    Register
                  </button>
                </div>
              </div>
              {/* LowerRegister */}
              <div className="LowerRegister w-full px-5 2xl:pr-28  ">
                {/* register form  */}
                <form action="" onSubmit={registerHandler} className="flex flex-col ">
                  <input
                    className="py-2 px-[15px] w-full border-[1px] rounded-md mb-5 md:mb-8 md:py-3 xl:mb-4 "
                    type="text"
                    placeholder="Your Name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  />
                  <input
                    className="py-2 px-[15px] w-full  border-[1px] rounded-md mb-5 md:mb-8 md:py-3 xl:mb-4"
                    type="email"
                    placeholder="Your Email Address"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                  <div className="xl:flex  ">
                  <input
                    className="py-2 px-[15px] w-full  border-[1px] rounded-md mb-5 md:mb-8 md:py-3 xl:mr-3 xl:mb-4 2xl:mr-5   "
                    type="text"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                  <input
                    className="py-2 px-[15px] w-full  border-[1px] rounded-md mb-5 md:mb-8 md:py-3 xl:mb-4   "
                    type="text"
                    placeholder="Confirm Password"
                    value={password_confirmation}
                    onChange={(e) => setConfirmed_password(e.target.value)}
                  />
                  </div>
                  <button className="py-2 px-[15px] mb-3 w-full  bg-primary border-[1px] rounded-md text-white text-[18px] xl:mb-5 xl:py-3 " >
                    Register
                  </button>

                  <div className="flex justify-center items-center  ">
                    <p className="text-md font-semibold text-gray-500 pr-[5px] xl:font-semibold   ">
                      Already have an account?
                    </p>
                    <Link
                      to="/"
                      className="text-[15px] text-primary font-semibold underline"
                    >
                      Go to Sign In
                    </Link>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
       
       </div>
      
    </>
  );
};

export default RegisterForm;
