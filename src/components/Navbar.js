import React from 'react'
import {faBus, faPlane, faTrainTram} from "@fortawesome/free-solid-svg-icons"
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import {NavLink} from "react-router-dom"

const Navbar = () => {
    
  return (
    <div>
        <header className="text-white bg-gray-900 body-font">
  <div className="container mx-auto flex flex-wrap p-3 flex-col md:flex-row items-center">
    <a  href="/"className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
     {/* <img src="" alt="" /> */}
      <span className="ml-3 text-white text-xl">BookMyTicket</span>
    </a>
    <nav className="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center">
        <div className="flight">
            <FontAwesomeIcon icon={faPlane}/>
            <NavLink className="mr-5 hover:text-cyan-200 flightNav" to='/flight'>Flight</NavLink>
        </div>
      <div className="bus">
        <FontAwesomeIcon icon={faBus}/>
      <NavLink className="mr-5 hover:text-cyan-200 busNav" to='/BusPage'>Bus</NavLink>
      </div>
     <div className="train"> 
     <FontAwesomeIcon icon={faTrainTram}/>
     <NavLink className="mr-5 hover:text-cyan-200 trainNav" to="TrainPage">Train</NavLink>
     </div>
      
      {/* <Link className="mr-5 hover:text-gray-900">Fourth Link</Link> */}
    </nav>
    <NavLink className="mr-5 hover:text-cyan-200 trainNav" to="/Login">Login</NavLink>
    {/* <button  className="inline-flex items-center mr-1 bg-gray-100 border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base mt-4 md:mt-0">Login

    </button> */}
     <NavLink className="mr-5 hover:text-cyan-200 trainNav" to="/Signup">Signup</NavLink>
      {/* <button className="inline-flex items-center bg-gray-100 border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base mt-4 md:mt-0">SignUp    
    </button> */}
  </div>
</header>
    </div>
  )
}

export default Navbar