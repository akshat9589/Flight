import React from 'react'
import {useAuthState} from 'react-firebase-hooks/auth'
import{auth} from '../firebase'
import{useNavigate}from 'react-router-dom';
function AfterLogin() {
  // const=userAuthState(auth);
  const[user,loding,error]=useAuthState(auth);
  const navigate=useNavigate();
  const signOutCheck=()=>{
    auth.signOut();
    navigate('/home')
  }
  return (
    <div>
      
      <h1>welcome {user?.email}</h1>

    <button onClick={()=>signOutCheck()}>SignOut</button>
    
    
    </div> 
    
  )      
}

export default AfterLogin