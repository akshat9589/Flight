
import { Link,  useNavigate } from "react-router-dom";
import Sign from "../assets/signup.webp";
import { auth } from "../firebase";
import React, { Component } from "react";
import { createUserDocument } from "../firebase";
// import {useNavigate} from'react-router-dom';
class Signup extends Component {
 
  state = {
    username: "",
    email: "",
    password: "",
    address: "",
    city: "",
    state: "",
    zip: "",
  };
  
 
  handleClick=(e)=>{
    const navigate=useNavigate();
    
    
    navigate("/Login")
  }

  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };
  handleSubmit = async (e) => {
    e.preventDefault();
    const {
      email,
      password,
      username,
      address,
      city,
      state,
      zip,
    } = this.state;
    try {
      const { user } = await auth.createUserWithEmailAndPassword(
        email,
        password
      );
      console.log(user);
      await createUserDocument(
        user,
        {email},
        { username },
        { address },
        { city },
        { state },
        { zip }
      );
    } catch (error) {
      console.log("error", error);
    }
    this.setState({
      username: "",
      email: "",
      password: "",
      address: "",
      city: "",
      state: "",
      zip: "",
    });
  };

  render() {
    const { username, email, password, address, city, state, zip } = this.state;
    return (
      <div>
        <section className="Form my-20 mx-5 card-img-overlay">
          <div className="container">
            <div className="row no-gutters">
              <div className=" image col-lg-5">
                <img
                  src={Sign}
                  className="d-block w-100"
                  alt="..."
                  width="200px"
                  height="200px"
                />
              </div>
              <div className="col-lg-7">
                <h1 className="font-weight-bold  py-3 pt=5">
                  Sign Up to Your account
                </h1>
                {/* <h4>Sign Up to your account</h4> */}
                <form className="form" onSubmit={this.handleSubmit}>
                  <div className="col-md-6">
                    <label for="inputName" className="form-label">
                      Name
                    </label>
                    <input
                      name="username"
                      value={username}
                      onChange={this.handleChange}
                      type="text"
                      className="form-control"
                      id="invalidName"
                    />
                  </div>
                  <div className="col-md-6">
                    <label for="inputEmail4" className="form-label">
                      Email
                    </label>
                    <input
                      value={email}
                      onChange={this.handleChange}
                      name="email"
                      type="email"
                      className="form-control"
                      id="inputEmail4"
                    />
                  </div>
                  <div className="col-md-6">
                    <label for="inputPassword4" className="form-label">
                      Password
                    </label>
                    <input
                      value={password}
                      onChange={this.handleChange}
                      name="password"
                      type="password"
                      className="form-control"
                      id="inputPassword4"
                    />
                  </div>
                  <div className="col-6">
                    <label for="inputAddress" className="form-label">
                      Address
                    </label>
                    <input
                      value={address}
                      onChange={this.handleChange}
                      name="address"
                      type="text"
                      className="form-control"
                      id="inputAddress"
                      placeholder="House no.,Building no.,Street"
                    />
                  </div>
                  <div className="col-md-6">
                    <label for="inputCity" className="form-label">
                      City
                    </label>
                    <input
                      value={city}
                      onChange={this.handleChange}
                      name="city"
                      type="text"
                      className="form-control"
                      id="inputCity"
                    />
                  </div>
                  <div className="col-md-4">
                    <label for="inputState" className="form-label">
                      State
                    </label>
                    <input
                      name="state"
                      value={state}
                      onChange={this.handleChange}
                      type="text"
                      className="form-control"
                      id="inputStates"
                    />
                  </div>
                  <div className="col-md-2">
                    <label for="inputZip" className="form-label">
                      Zip
                    </label>
                    <input
                      value={zip}
                      onChange={this.handleChange}
                      name="zip"
                      type="text"
                      className="form-control"
                      id="inputZip"
                    />
                  </div>
                  <div className="col-12">
                    <div className="form-check">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        id="gridCheck"
                      />
                      <label className="form-check-label" for="gridCheck">
                        Agree to{" "}
                        <Link
                          className="tc active"
                          aria-current="page"
                          to="/tAndc"
                        >
                          term and condition
                        </Link>
                      </label>
                    </div>
                  </div>
                  <div className="form-row">
                    <div className="col-lg-7">
                      <button onClick={this.handleClick} type="submit" className="loginSubmit mb-2">
                        SignUP
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}

export default Signup;
























// import React, { useState ,Component } from "react";

// // import connection from "../connection";

// const Signup=()=>{
//     const[details,setDetails]=useState({
//         name:"",
//         emails:"",
//         pass:"",
//         address:"",
//         city:"",
//         states:"",
//         zipcode:"",
//     })

// const PostData =async(e)=>{
//     e.preventDefault();
//     const{name,emails,pass,address,city,states,zipcode}=details;
//     const res=await fetch("https://book-my-ticket-b041d-default-rtdb.firebaseio.com/signup.json",{
//         method:'POST',
//         headers:{
//             'Content-Type':'application/json'

//         },
//         body:JSON.stringify({
//             name,
//             emails,
//             pass,
//             address,
//             city,
//             states,
//             zipcode,
//         })

//     })
// }

//  return (
//     <div>
//       <section className="Form my-20 mx-5 card-img-overlay">
//         <div className="container">
//           <div className="row no-gutters">
//             <div className=" image col-lg-5">
//             <img src={Sign} className="d-block w-100" alt="..." width='200px' height="200px"/>
//             </div>
//             <div className="col-lg-7">
//               <h1 className="font-weight-bold  py-3 pt=5">Sign Up to  Your account</h1>
//               {/* <h4>Sign Up to your account</h4> */}
//               <form className="form" method="POST">
//               <div className="col-md-6">
//                   <label for="inputName"  className="form-label">
//                     Name
//                   </label>
//                   <input name="uname"
//                   onChange={(e)=>
//                 setDetails({...details,name:e.target.value})}
//                     type="text"
//                     className="form-control"
//                     id="invalidName"
//                   />
//                   </div>
//                 <div className="col-md-6">
//                   <label for="inputEmail4"  className="form-label">
//                     Email
//                   </label>
//                   <input
//                    onChange={(e)=>
//                     setDetails({...details,emails:e.target.value})}
//                   name="email"
//                     type="email"
//                     className="form-control"
//                     id="inputEmail4"
//                   />
//                 </div>
//                 <div className="col-md-6">
//                   <label for="inputPassword4" className="form-label">
//                     Password
//                   </label>
//                   <input
//                    onChange={(e)=>
//                     setDetails({...details,pass:e.target.value})}
//                   name="password"
//                     type="password"
//                     className="form-control"
//                     id="inputPassword4"
//                   />
//                 </div>
//                 <div className="col-6">
//                   <label for="inputAddress" className="form-label">
//                     Address
//                   </label>
//                   <input
//                    onChange={(e)=>
//                     setDetails({...details,address:e.target.value})}
//                   name="address"
//                     type="text"
//                     className="form-control"
//                     id="inputAddress"
//                     placeholder="House no.,Building no.,Street"
//                   />
//                 </div>
//                 <div className="col-md-6">
//                   <label for="inputCity" className="form-label">
//                     City
//                   </label>
//                   <input
//                    onChange={(e)=>
//                     setDetails({...details,city:e.target.value})}
//                   name="city"  type="text" className="form-control" id="inputCity" />
//                 </div>
//                 <div className="col-md-4">
//                   <label for="inputState" className="form-label">
//                     State
//                   </label>
//                   <input name="states"
//                    onChange={(e)=>
//                     setDetails({...details,states:e.target.value})}
//                   type="text" className="form-control" id="inputStates" />

//                 </div>
//                 <div className="col-md-2">
//                   <label for="inputZip" className="form-label">
//                     Zip
//                   </label>
//                   <input
//                    onChange={(e)=>
//                     setDetails({...details,zipcode:e.target.value})}
//                   name="zip"  type="text" className="form-control" id="inputZip" />
//                 </div>
//                 <div className="col-12">
//                   <div className="form-check">
//                     <input
//                       className="form-check-input"
//                       type="checkbox"
//                       id="gridCheck"
//                     />
//                     <label className="form-check-label" for="gridCheck">
//                       Agree to{" "}
//                       <Link
//                         className="tc active"
//                         aria-current="page"
//                         to="/tAndc"
//                       >
//                         term and condition
//                       </Link>
//                     </label>
//                   </div>
//                 </div>
//                 <div className="form-row">
//                   <div className="col-lg-7">
//                     <button type="submit" onClick={PostData} className="loginSubmit mb-2">
//                       SignUP
//                     </button>
//                   </div>
//                 </div>
//               </form>
//             </div>
//           </div>
//         </div>
//       </section>
//     </div>
//   );
// }
// export default Signup;