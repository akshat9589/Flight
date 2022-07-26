import React, { useState } from "react";
// import Navbar from "../components/Navbar";
import { useForm } from "react-hook-form";
import { GiPerson } from "react-icons/gi";
import { FaPlaneDeparture, FaPlaneArrival, FaChild } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
const Flight = () => {
  const [destination, setDestination] = useState("");

  const [origin, setOrigin] = useState("");
  const handleOrigin = (event) => {
    setOrigin(event.target.value);
    console.log(event.target.value);
  };

  const handleDestination = (event) => {
    setDestination(event.target.value);
  };

  const navigate = useNavigate();
  const {
    register,
    watch,
    formState: { errors },
  } = useForm();
  const handleSubmitt = () => {
    console.log("You are redirecting to flight page");
    navigate("/FlightBooking");
  };

  const tripType = watch("tripType");
  console.log("tripType", tripType);
  return (
    <div>
      <section>
        <form onSubmit={handleSubmitt}>
          <div className="bg-white w-auto h-auto pb-10 mt-5 mx-5 rounded-lg">
            <div className="h-24 flex justify-center item-center shadow">
              <p className="uppercase font-bold text-4xl text-center">
                Book Your FLight Here
              </p>
            </div>
            {/*
            {/* body section */}
            <div>
              <div className="grid justify-center space-y-5 bg-indigo-50 pb-10">
                <div>
                  <div className="flex space-x-8 mt-5">
                    {/* <div className="flex items-center space-x-2">
                      <input
                        type="radio"
                        className={`w-6 h-6 ${
                          errors.tripType &&
                          "focus:border-red-500 focus:ring-red-500 border-red-500"
                        }`}
                        vaule="oneway"
                        {...register("tripType", {
                          required: {
                            value: true,
                            message: "Trip type is required",
                          },
                        })}
                      />
                      <p className="text-xl font-bold">One Way</p>
                    </div> */}
                    {/* <div className="flex items-center space-x-2">
                      <input
                        type="radio"
                        className={`w-6 h-6 ${
                          errors.tripType &&
                          "focus:border-red-500 focus:ring-red-500 border-red-500"
                        }`}
                        vaule="roundtrip"
                        {...register("tripType", {
                          required: {
                            value: true,
                            message: "Trip type is required",
                          },
                        })}
                      />
                      <p className="text-xl font-bold">Round Trip</p>
                    </div> */}
                  </div>
                  {/* <div>
                    {errors.tripType && (
                      <span className="text-sm text-red-500">
                        {errors.tripType.message}
                      </span>
                    )}
                  </div> */}
                </div>
                {/* departure section */}
                <div>
                  <div>
                    <div className="relative">
                      <p className="font-bold text-xl uppercase">Flying from</p>

                      <input
                        type="text"
                        value={origin}
                        onChange={handleOrigin}
                        name="origin"
                     
                        placeholder="Enter Your Origin"
                        className={`w-full h-16 rounded-lg text-2xl pl-20 ${
                          errors.departure &&
                          "focus:border-red-500 focus:ring-red-500 border-red-500"
                        }`}
                        // {...register("departure", {
                        //   required: {
                        //     value: true,
                        //     message: "departure is required",
                        //   },
                        // })}
                      />
                      {/* <select
                        className={`w-full h-16 rounded-lg text-2xl pl-20 ${
                          errors.departure &&
                          "focus:border-red-500 focus:ring-red-500 border-red-500"
                        }`}
                        {...register("departure", {
                          required: {
                            value: true,
                            message: "departure is required",
                          },
                        })}
                      >
                        <option vaule="" selected disabled hidden>
                          Select Airport
                        </option>
                        <option value="hyd">
                          Rajiv Gandhi International Airport,Hyderabad
                        </option>
                        <option value="bang">
                          Kempegowda International Airport,Banglore
                        </option>
                        <option value="mum">
                          Chhatrapati Shivaji Maharaj International
                          Airport,Mumbai
                        </option>
                        <option value="del">
                          Indira Gandhi International Airport,Delhi
                        </option>
                        <option value="bpl"> Raja Bhoj Airport,Bhopal</option>
                        <option value="ind">
                          Devi Ahilya Bai Holkar Airport,Indore
                        </option>
                        <option value="pune">
                          Chhatrapati Sambhaji Raje International Airport,Pune
                        </option>
                        <option value="kol">
                          Netaji Subhas Chandra Bose International
                          Airport,Kolkata
                        </option>
                        <option value="udai">
                          Maharana Pratap Airport,Udaipur
                        </option>
                      </select> */}
                      <FaPlaneDeparture className="text-4xl absolute left-5 top-10" />
                    </div>
                    <div>
                      {" "}
                      {errors.departure && (
                        <span className="text-sm text-red-500">
                          {errors.departure.message}
                        </span>
                      )}
                    </div>
                  </div>
                </div>

                {/* Arrival section */}
                <div>
                  <div>
                    <div className="relative">
                      <p className="font-bold text-xl uppercase">Flying to</p>

                      <input
                        type="text"
                        value={destination}
                        onChange={handleDestination}
                        name="destination"
                        placeholder="Enter your destination"
                        className={`w-full h-16 rounded-lg text-2xl pl-20 ${
                          errors.departure &&
                          "focus:border-red-500 focus:ring-red-500 border-red-500"
                        }`}
                        // {...register("arrival", {
                        //   required: {
                        //     value: true,
                        //     message: "Arrival is required",
                        //   },
                        // })}
                      />
                      {/* <select
                        className={`w-full h-16 rounded-lg text-2xl pl-20 ${
                          errors.departure &&
                          "focus:border-red-500 focus:ring-red-500 border-red-500"
                        }`}
                        {...register("arrival", {
                          required: {
                            value: true,
                            message: "Arrival is required",
                          },
                        })}
                      >
                        {/* <option vaule="" selected disabled hidden> */}
                      {/* Select Airport
                        </option>
                        <option value="hyd">
                          Rajiv Gandhi International Airport,Hyderabad
                        </option>
                        <option value="bang">
                          Kempegowda International Airport,Banglore
                        </option>
                        <option value="mum">
                          Chhatrapati Shivaji Maharaj International
                          Airport,Mumbai
                        </option>
                        <option value="del">
                          Indira Gandhi International Airport,Delhi
                        </option>
                        <option value="bpl"> Raja Bhoj Airport,Bhopal</option>
                        <option value="ind">
                          Devi Ahilya Bai Holkar Airport,Indore
                        </option>
                        <option value="pune">
                          Chhatrapati Sambhaji Raje International Airport,Pune
                        </option>
                        <option value="kol">
                          Netaji Subhas Chandra Bose International Airport
                        </option>
                        <option value="udai">
                          Maharana Pratap Airport,Udaipur
                        </option>
                      </select> */}
                      <FaPlaneArrival className="text-4xl absolute left-5 top-10" />
                    </div>
                    <div>
                      {errors.arrival && (
                        <span className="text-sm text-red-500">
                          {errors.arrival.message}
                        </span>
                      )}
                    </div>
                  </div>
                </div>
                {/* date  section*/}
                <div className="flex space-x-2">
                  {/* departure date*/}
                  <div>
                    <div>
                      <div className="relative">
                        <p className="font-bold text-xl uppercase">
                          Departure date
                        </p>
                        <input
                          type="date"
                          name="depatureDate"
                          className="w-full h-16 rounded-lg text-2xl"
                          {...register("depaturedate", {
                            required: {
                              value: true,
                              message: "Date is required",
                            },
                          })}
                        />
                      </div>
                      <div>
                        {errors.departuredate && (
                          <span className="text-sm text-red-500">
                            {errors.departuredate.message}
                          </span>
                        )}
                      </div>
                    </div>
                  </div>
                  {/* return date */}
                  <div>
                    {tripType !== "oneway" && (
                      <div>
                        {/* <div className="relative">
                          <p className="font-bold text-xl uppercase">
                            return date
                          </p>
                          <input
                            type="date"
                            className="w-full h-16 rounded-lg text-2xl"
                            {...register("returndate", {
                              required: {
                                value: true,
                                message: " Return date is required",
                              },
                            })}
                          />
                        </div> */}
                        {/* <div>
                          {errors.returndate && (
                            <span className="text-sm text-red-500">
                              {errors.returndate.message}
                            </span>
                          )}
                        </div> */}
                      </div>
                    )}
                  </div>
                </div>
                {/* Passenger section  */}
                <div className="flex space-x-2">
                  {/* Adult section */}
                  <div className="w-full">
                    <div>
                      <div className="relative">
                        <p className="font-bold text-xl uppercase">
                          Adults (18+)
                        </p>
                        <select className="w-full h-16 rounded-lg text-2xl pl-20">
                          <option> 1 </option>
                          <option> 2 </option>
                          <option> 3 </option>
                          <option> 4 </option>
                          <option> 5 </option>
                        </select>
                        <GiPerson className="text-4xl absolute left-5 top-10" />
                      </div>
                    </div>
                  </div>

                  {/* child section */}
                  <div className="w-full">
                    <div>
                      <div className="relative">
                        <p className="font-bold text-xl uppercase">
                          Childeren (0-17)
                        </p>
                        <select className="w-full h-16 rounded-lg text-2xl pl-20">
                          <option> 0</option>
                          <option> 1 </option>
                          <option> 2 </option>
                          <option> 3 </option>
                          <option> 4 </option>
                          <option> 5 </option>
                        </select>
                        <FaChild className="text-4xl absolute left-5 top-10" />
                      </div>
                    </div>
                  </div>
                </div>

                {/* Class and price type */}
                <div className="flex space-x-2">
                  {/* class section */}
                  <div className="w-full">
                    <div>
                      <div>
                        <p className="font-bold text-xl uppercase">Class</p>
                        <select className="w-full h-16 rounded-lg text-2xl pl-20">
                          <option> Economy</option>
                          <option> Business</option>
                        </select>
                      </div>
                    </div>
                  </div>

                  {/* Price section */}
                  {/* <div className="w-full">
                    <div>
                      {/* <div>
                      //  <p className="font-bold text-xl uppercase">price</p>
                        {/* <select  className="w-full h-16 rounded-lg text-2xl pl-20">
                          <option> All Prices</option>
                          <option> 2500 ₹ </option>
                          <option> 3000 ₹</option>
                          <option> 3500 ₹</option>
                          <option> 4000 ₹</option>
                          <option> 4500 ₹</option>
                          <option> 5000 ₹</option>
                        </select> *
                      </div>
                    </div> 
                      </div>*/}
                </div>

                {/* btn section */}
                <div>
                  <input
                    type="submit"
                    value="Find Flight"
                    className="w-full h-16 font-bold text-3xl uppercase rounded-lg bg-green-100 hover:bg-white"
                  />
                </div>
              </div>
            </div>
          </div>
        </form>
      </section>
    </div>
  );
};

export default Flight;
