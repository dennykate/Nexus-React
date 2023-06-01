import React, { useEffect, useState } from 'react'
import FillLogo from "../assets/Logo Fill.png";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useLoginMutation } from "../feature/api/authApi";
import {HiOutlineEye, HiOutlineEyeOff} from "react-icons/hi"
import "animate.css";


const LoginForm = () => {
  const location = useLocation();
  console.log(location)
  const currentRoute = location?.pathname;
  const [activeLink, setActiveLink] = useState(currentRoute);

  const [backdrop, setBackDrop] = useState(0);

  window.addEventListener("resize", (event) => {
    setBackDrop(window.innerWidth / 3);
  });

  useEffect(() => {
    setBackDrop(window.innerWidth / 3);
  }, [setBackDrop]);
  // const [passwordType, setPasswordType] = useState("text");
  

  // const toggleEye = () => {
  //   if(passwordType === "password")
  //   {
  //     setPasswordType("text")
  //   }
  //   setPasswordType("password")
  // }

  const handleClick = (link) => {
    setActiveLink(link);
  };
   
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
   

    const navigate = useNavigate();
    const [login] = useLoginMutation();

    // console.log(user);
    
    
    const loginHandler = async(e) => {
        e.preventDefault();
        const user = {  email, password};
        const {data} = await  login(user);
      console.log(data);
      if(data?.success){
        navigate("/")
      }

        
    }
  return (
    <>
           <div className="bg-secondary min-h-screen  text-white relative ">
        {/* Background layer */}
      <div className={
            " mainVisual backdrop-animation absolute left-0 top-0 h-full   w-0 bg-[#1a3d8f] duration-1000"
          }
          style={{ width: backdrop }}> </div>  
      
      
            {/* form and logo div  */}
          <div className=" z-10 mx-auto w-[90%]  sm:w-[85%] md:w-[78%] md:px-1 lg:w-[85%]   xl:w-[85%] 2xl:w-[85%] 2xl:py-20   flex flex-col lg:flex-row relative ">
            {/* nexus block  */}
            <div className="w-full py-4 px-2 sm:px-16 sm:py-5 md:w-full  lg:py-32  2xl:px-28 2xl:py-2  bg-[rgba(1,28,204,0.8)] flex flex-col  justify-center items-center    ">
              <div className="imageLogo w-56 mb-3">
                <img src={FillLogo} className="w-full animate__animated animate__bounce animate__delay-2s" alt="" />
              </div>
              <h2 className="text-2xl font-semibold mb-8 xl:text-3xl xl:mb-12 2xl:text-4xl select-none animate__animated  animate__bounce animate__delay-2s ">
                We are the Number One!
              </h2>

              <div className=" w-full  flex flex-col justify-center mb-10   ">
                <button className=" text-xl w-[95%] mx-auto border-[0.5px] py-3 mb-5 xl:py-5 hover:bg-white hover:text-tertiary ease-in-out duration-500 cursor-pointer">
                  Sign in with Google
                </button>
                <button className="text-xl w-[95%] mx-auto border-[0.5px] py-3 xl:py-5 hover:bg-white hover:text-tertiary ease-in-out duration-500 cursor-pointer ">
                  Sign in with Facebook
                </button>
              </div>
            </div>

            {/* login form  */}
            <div className="w-full  px-2 py-16  sm:px-8 md:py-7  bg-white  text-tertiary lg:py-20  xl:px-6  ">
            {/* Upperlogin  */}
              <div className="UpperRegister  flex   justify-between items-center px-5 mb-8 md:items-start md:mb-12 lg:flex-row   xl:flex-row xl:mb-9    ">
                <h1 className="text-2xl font-bold md:mb-5 md:text-3xl xl:text-4xl">Login</h1>
                <div className="ButtonPart border-[1px] border-tertiary ">
                  <Link to="/login">
                  <button className={`px-4 py-1 font-semibold text-md  h-full md:py-2 md:px-8 xl:py-3 xl:px-9 xl:text-lg 2xl:px-6  ${activeLink === "/login" ? "bg-primary text-white" : "bg-white text-black"}  `}  onClick={() => handleClick("/login")}  >
                    Login
                  </button>
                  </Link>
                 <Link to="/register">
                 <button className={`px-4 py-1 font-semibold text-md md:py-2   xl:py-3 xl:px-9  xl:text-lg 2xl:px-6   ${activeLink === "/register" ? "bg-primary text-white" : "bg-white text-black"}    `}  onClick={() => handleClick("/register")} >
                    Register
                  </button>
                 </Link>
                </div>
              </div>
              {/* LowerRegister */}
              <div className="LowerRegister w-full px-5 2xl:pr-28 md:px-28 lg:px-5 lg:pt-20 xl:pb-12 2xl:px-5 2xl:py-2  ">
                {/* register form  */}
                <form action="" onSubmit={loginHandler} className="flex flex-col ">
                
                  <input
                    className="py-2 px-[15px] w-full  border-[1px] rounded-md mb-5 md:mb-8 md:py-3  xl:mb-4 "
                    type="email"
                    placeholder="Your Email Address"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                
                 
                  <input
                    className="py-2 px-[15px] w-full  border-[1px] rounded-md mb-5 md:mb-8 md:py-3 xl:mr-3 xl:mb-4 2xl:mr-5   "
                    type="text"
                    placeholder="*******"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                {/* <HiOutlineEye/>
                <HiOutlineEyeOff/> */}
               
                
                
                  {/* checkbox and forgot pw  */}
                  <div className="flex justify-between mb-5 md:mb-8 md:py-3 xl:mb-4">
                    <div className="checkbox">
                    <label className="inline-flex items-center">
  <input type="checkbox" className="form-checkbox h-5 w-4 bg-gray-400   " required/>
  <span className="ml-2 text-gray-400 lg:text-sm select-none ">  Keep me logged in</span>
</label>
                     
                    </div>
                    <div className="">
                        <p className='text-[15px] text-primary font-semibold underline cursor-pointer lg:text-sm'>Forgot Password</p>
                    </div>
                  </div>
                  <button className="py-2 px-[15px] mb-3 w-full  bg-primary border-[1px] rounded-md text-white text-[18px] xl:mb-5 xl:py-3 hover:bg-[#0249bd] ease-in-out duration-500 cursor-pointer " >
                    Log in
                  </button>

                  <div className="flex justify-center items-center  ">
                    <p className="text-md font-semibold text-gray-500 pr-[5px] xl:font-semibold select-none    ">
                    Don't have an account?
                    </p>
                    <Link
                      to="/register"
                      className="text-[15px] text-primary font-semibold underline select-none "
                    >
                      Register
                    </Link>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
       
      
    </>
  )
}

export default LoginForm


// import React from "react";
// import FillLogo from "../assets/Logo Fill.png";
// import { Link } from "react-router-dom";

// const RegisterForm = () => {
//   return (
//     <>
//       <div className="bg-secondary text-white">
//         {/* Background layer */}

//         <div className=" mainVisual w-[439px]  h-screen  bg-[#1a3d8f] relative">
//           <div className=" absolute top-[120.2px] left-[120.2px]  w-[1316px] h-[520.6px] flex flex-col rounded-md shadow-lg ">
//             {/* nexus block  */}
//             <div className="w-[658px] h-[520.6px] bg-[rgba(1,28,204,0.98)] opacity-80  flex flex-col justify-center items-center ">
//               <div className="imageLogo mt-[80.8px] mb-[20px]  w-[210px] ">
//                 <img src={FillLogo} className="w-full" alt="" />
//               </div>
//               <h2 className="text-[40px] font-semibold mb-[40px]">
//                 We are the Number One !
//               </h2>
//               <div className=" w-[400px] mb-[80.8px] ">
//                 <button className=" text-[20px] w-full border-[1px] py-[15px] mb-5">
//                   Sign in with Google
//                 </button>
//                 <button className=" text-[20px] w-full border-[1px] py-[15px]">
//                   Sign in with Facebook
//                 </button>
//               </div>
//             </div>

//             {/* register form  */}
//             <div className="w-[658px] h-[520.6px] bg-white text-tertiary">
//               <div className="UpperRegister h-[120.2px]  flex justify-between items-center px-[50px] pt-[50px]  ">
//                 <h1 className="text-[36px] font-bold">Register</h1>
//                 <div className="ButtonPart border-[1px] border-tertiary h-[50.2px]">
//                   <button className="px-[27px] py-[9px] text-[18px] bg-primary h-full">
//                     Login
//                   </button>
//                   <button className="px-[27px] py-[9px] text-[18px] h-full">
//                     Register
//                   </button>
//                 </div>
//               </div>

//               <div className="LowerRegister w-[500px] px-[50px] pt-[50px]">
//                 <form action="" className="flex flex-col ">
//                   <input
//                     className="py-[10px] px-[15px] w-full h-[50px] border-[1px] rounded-md mb-[20px]"
//                     type="text"
//                     placeholder="Your Name"
//                   />
//                   <input
//                     className="py-[10px] px-[15px] w-full h-[50px] border-[1px] rounded-md mb-[20px]"
//                     type="email"
//                     placeholder="Your Email Address"
//                   />
//                   <div className="flex  ">
//                     <input
//                       className="py-[10px] px-[15px] w-[190px] h-[50px] border-[1px] rounded-md  mr-[20px]"
//                       type="password"
//                       placeholder="Password"
//                     />
//                     <input
//                       className="py-[10px] px-[15px] w-[190px] h-[50px] border-[1px] rounded-md mb-[20px] "
//                       type="password"
//                       placeholder="Confirm Password"
//                     />
//                   </div>
//                   <button className="py-[10px] px-[15px] w-full h-[50px] bg-primary border-[1px] rounded-md text-white text-[18px] ">
//                     Register
//                   </button>

//                   <div className="flex justify-center items-center mt-[20px]">
//                     <p className="text-[15px] font-semibold text-gray-500 pr-[5px]  ">
//                       Already have an account?
//                     </p>
//                     <Link to="/" className="text-[15px] text-primary font-semibold underline">
                      
//                       Go to Sign In
//                     </Link>
//                   </div>
//                 </form>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

// export default RegisterForm;
