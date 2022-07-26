import React, { useState } from "react";
import "./login.css";
import{Link} from 'react-router-dom';
import {  useNavigate } from "react-router-dom";
import loginimg from "../assets/signupImage.webp";
import{auth} from'../firebase'
import {signInWithEmailAndPassword} from 'firebase/auth'

const Login = () => {
   const navigate=useNavigate();
  // const AuthUser=()=>{
  //   console.log("validate");
  // navigate('/AfterLogin');
  // }
  const [email,setEmail]=useState(""); 
  const [password,setPassword]=useState(" "); 
  const signIn=()=>{
signInWithEmailAndPassword(auth,email,password)
.then(auth=>{navigate('/TicketBook')})
.catch(error=>console.error(error))
  } 
  return (
    <div>
      <section class="Form my-4 mx-5">
        <div class="container">
          <div class="row no-gutters">
            <div class=" image col-lg-5">
              <img
                src={loginimg}
                className="d-block w-100"
                alt="..."
                width="200px"
                height="200px" 
              />
            </div>
            <div class="col-lg-7">
              <h1 class="font-weight-bold py-3 pt=5">Login to your account</h1>
              {/* <h4>Login to your account</h4> */}
              <form>
                <div class="form-row">
                  <div class="col-lg-7">
                    <input
                    onChange={(event)=>{
                      setEmail(event.target.value)
                    }}
                      type="email"
                      placeholder="Enter your email"
                      class="form-control my-3 p-4"
                    />
                  </div>
                </div>
                <div class="form-row">
                  <div class="col-lg-7">
                    <input
                    onChange={(event)=>{
                      setPassword(event.target.value)
                    }}
                      type="password"
                      placeholder="Enter your password"
                      class="form-control my-3 p-4 "
                    />
                  </div>
                </div>
                <div class="form-row">
                  <div class="col-lg-7">
                    <button onClick={signIn} type="button" class="loginSubmit mb-2">
                  
                      Login
                    </button>
                  </div>
                </div>
                <a class="a" href="/">
                  Forgot password?
                </a>
                <p>
                  Don't have account?
                  <Link to="/signup" >
                 SignUp
                </Link> 
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Login;
