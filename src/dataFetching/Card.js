// import React, { useState } from "react";

import { useNavigate } from "react-router-dom";

const Card = () => {
  const navigate = useNavigate();
  // const [flight,setFlight]=useState([]);
  const bookTicket = () => {
    navigate("/Login");
  };
  return (
    <div className="container">
      <div className="row parent">
        <div className="col-2">
          <label className="t1 mx-2">Go First</label>
          <br />
          <label className="st1">G8 388,G8383</label>
        </div>
        <div className="col-2">
          <label className="time"> 10:55 </label>
          <label className="loc"> New Delhi </label>
        </div>
        <div className="col-2">
          <label className="travel"> 06 h 45m </label>
          <div className="line">
            {""}
            <hr />
          </div>
          <span> 1 stop via Mumbai </span>
        </div>
        <div className="col-2">
          <label className="time"> 17:40 </label>
          <label className="loc"> Banglore </label>
        </div>
        <div className="col-2">
          <h2 className="head">&#x20a8; 7423 </h2>
        </div>
        <div className="col-2">
          <button class="viewAll" onClick={bookTicket}>
            Book
          </button>
        </div>
      </div>
    </div>
  );
};
export default Card;

// import React, { Component } from "react";
// import { Link } from "react-router-dom";
// // import UserNavigationBar from "../userNavigationBar";
// import connection from "../connection";
// const Flights = props => (
//   <tr className="table-info">
//     <td>
//       {console.log(props.flight.trainNumber)}
//       <b>{props.flight.trainNumber}</b>
//     </td>
//     <td>
//       <b>{props.flight.flightName}</b>
//     </td>
//     <td>
//       <b>{props.flight.from}</b>
//     </td>
//     <td>
//       <b>{props.flight.to}</b>
//     </td>
//     <td>
//       <b>{props.flight.totalSeat}</b>
//     </td>
//     <td>
//       <b>{props.flight.fair}</b>
//     </td>
//     <td>
//       {props.train.totalSeat === 0 ? (
//         <button className="btn btn-sm btn-outline-info">Not Available</button>
//       ) : (
//         <Link
//           className="btn btn-sm btn-outline-info"
//           role="button"
//           to={"/bookTrain/" + props.flight.flightNumber}
//         >
//           Book Now
//         </Link>
//       )}
//     </td>
//   </tr>
// );

// export default class ResultTrain extends Component {
//   state = {
//     train: []
//   };

//   componentDidMount() {
//     connection
//       .get(
//         "/Flight.json"
//       )
//       .then(response => {
//         if (response.data === null) {
//           window.alert("No Train Found");
//         } else {
//           Object.entries(response.data).forEach(item => {
//             console.log(item);
//             this.setState({ flight: [...this.state.flight,item[1] ]})
//           })
//         }
//       })
//       .catch(error => error.message);
//   }

//   listTrain = () => {
//     return this.state.train.map((currentFlight, index) => {
//       console.log(currentFlight , index);
//       return <Train train={currentTrain} key={index} />;
//     });
//   };

//   render() {
//     return (
//       <div>
//         <UserNavigationBar />
//         <h1> Available Trains </h1>
//         <p>Refresh for Recent Updates </p>
//         <table className="table table-hover table-striped table-info">
//           <thead>
//             <tr className="table-primary">
//               <th>Train Number</th>
//               <th>Train Name</th>
//               <th>From</th>
//               <th>To</th>
//               <th>Available Seat</th>
//               <th>Fair</th>
//               <th>Action</th>
//             </tr>
//           </thead>
//           <tbody>{this.listTrain()}</tbody>
//         </table>
//       </div>
//     );
//   }
// }
