import { logo_url } from "../utils/constants";
import profile_img from '../assests/profile-url.png';
import { signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { onAuthStateChanged } from "firebase/auth";
import { useDispatch } from 'react-redux'
import {addUser , removeUser} from '../utils/userSlice';
import { useEffect } from "react";


const Header = ( ) =>{

   const navigate = useNavigate();
   const dispatch = useDispatch();
    const user = useSelector((store)=>store.user)


  useEffect(()=>{
    onAuthStateChanged(auth, (user) => {
      if (user) {
       const {email, uid , displayName} = user;
       dispatch(addUser({email:email , uid:uid , displayName : displayName}));
       navigate("/browse")
      } 
      else {
     dispatch(removeUser());
     navigate("/")
      }
    });
  },[]);

  const signoutHandler =()=>{
    signOut(auth).then(() => {
    }).catch((error) => {
      // An error happened.
    });
    
  }
  return (
    <div className="absolute bg-gradient-to-b from-black px-8 py-2 z-10 w-full flex justify-between" >
      <img 
       className="w-44"
        src={logo_url} alt="logo" >
        </img>
    { user && (<div className=" h-12 w-40 mt-5 flex">
      <img src={profile_img}></img>
      <button onClick={signoutHandler} className=" bg-red-600 p-2 ml-2 rounded-xl" >Sign out</button>
      </div>)}
    </div>
  );
};

export default Header;
