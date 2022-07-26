
import Home from "./pages/Home";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import TrainPage from "./pages/TrainPage";
import BusPage from "./pages/BusPage";
import Flight from "./pages/Flight";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import AfterLogin from "./pages/AfterLogin";
import FlightBooking from "./dataFetching/FlightBooking";
import TicketBook from "./pages/TicketBook";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/flight" element={<Flight/>} />
        <Route path="/buspage" element={<BusPage/>} />
        <Route path="/trainpage" element={<TrainPage/>} />
        <Route path="/login" element={<Login/>} />
        <Route path="/signup" element={<Signup/>} />
        <Route path="/afterlogin" element={<AfterLogin/>} />
        <Route path="/flightbooking" element={<FlightBooking/>} />
        <Route path="/ticketbook" element={<TicketBook />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
