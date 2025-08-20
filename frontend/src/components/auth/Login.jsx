import React from 'react'
import axios from 'axios';
import {USER_API_END_POINT} from "../../../utils/constant"

function Login() {

  const happy = () => {
// console.log("hello hello")
    axios.post(`${USER_API_END_POINT}/user/register`, { name: "Shivam", email: "shivam00edu@gmail.com", password :"hello112234" })
      .then(res => {
        console.log(res.data,"helloooo"); // { message: "Hello from backend!" }
      })
      .catch(err => console.error(err));
  }


  return (
    <>
      <button onClick={() => happy()} className=' text-4xl border-2 border-orange-500 '>click me</button>
    </>
  )
}

export default Login