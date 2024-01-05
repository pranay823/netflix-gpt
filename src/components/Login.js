import Header from "./Header";
import { login_background_img } from "../utils/constants";
import { useState } from "react";


const Login = () => {
  
 const [isSignInForm ,setisSignInForm] = useState(true)

const ToggleSignInForm =()=>{
setisSignInForm(!isSignInForm);
}

  return (
    <div>
      <Header />
      <div className="absolute w-full">
        <img  className="w-full"
          src={ login_background_img} alt="background" ></img>
      </div>
      <form className="bg-black bg-opacity-80  absolute w-3/12 mx-auto left-0 right-0 my-36 p-8 flex flex-col text-white min-h-[450px] min-w-[400px]">
        <h1 className="text-3xl font-medium mb-8">{isSignInForm ? "Sign In" : "Sign Up"}</h1>
       { !isSignInForm && <input type="text" placeholder="First Name" className="p-2 m-2 bg-grey h-[48px] rounded-md text-light-gray"></input>}
       { !isSignInForm && <input type="text" placeholder="Last Name" className="p-2 m-2 bg-grey h-[48px] rounded-md text-light-gray"></input>}
        <input type="text" placeholder="Email or Phone number" className="p-2 m-2 bg-grey h-[48px] rounded-md text-light-gray"></input>
        <input type="text" placeholder="Password" className="p-2 m-2 bg-grey h-[48px] rounded-md text-light-gray"></input>
        <button className=" w-full mx-auto py-2 bg-red-600 h-[50px] rounded-md mt-10  "> {isSignInForm ? "Sign In" : "Sign Up"}</button> 
        <div className="my-4 flex justify-between">
            <label >
            <input type="checkbox" className="" ></input>
            <span className="px-2  text-gray-400 text-sm">Remember me</span>
            </label>
           <p className=" text-gray-400 text-sm mt-1">Need Help?</p>
        </div>
        <p className="text-light-gray my-5"> {isSignInForm ? "New to Netflix?" : "Already Rejistered"}<span onClick={ToggleSignInForm} className="text-white mx-1 cursor-pointer underline"> {isSignInForm ? "Sign up now" : "Sign In now"}</span></p>
      </form>
    </div>
  );
};

export default Login;
