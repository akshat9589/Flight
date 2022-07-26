import React from 'react'
import { useNavigate } from 'react-router-dom'


const TicketBook = () => {

  const navigate=useNavigate();
  const handleConfirm=()=>{
    alert("Your ticket has been booked.Thank you for booking the ticket")
    navigate("/")
  }
  
    const handleCancle=()=>{
      navigate('/')
    }
  
  return (
    <div><div class="card text-center">
    <div class="card-header">
   <h1>Book My Ticket </h1>
    </div>
    <div class="card-body">
      <h5 class="card-title">Please Confirm Your Booking By Clicking the Confirm Button</h5>
      {/* <p class="card-text">With supporting text below as a natural lead-in to additional content.</p> */}
      <button onClick={handleConfirm}>Confirm</button>
      <button onClick={handleCancle}>Cancle</button>
      
      {/* <NavLink to="/home" class="btn btn-primary">Go Back to Home</NavLink> */}
    </div>
    
  </div></div>
  )
}

export default TicketBook