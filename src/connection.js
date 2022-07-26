import axios from "axios";
export default axios.create(
    {
        baseURL:'https://book-my-ticket-b041d-default-rtdb.firebaseio.com/'
    }
)