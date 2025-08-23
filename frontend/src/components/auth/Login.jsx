import React from 'react'
import axios from 'axios';
import { USER_API_END_POINT } from "../../../utils/constant"
import { Card, CardHeader, CardTitle, CardDescription, CardAction, CardContent, CardFooter } from '../ui/card';
import { Button } from '../ui/button';
import { Input } from '../ui/input';
import { Label } from '../ui/label';
import { useNavigate } from 'react-router-dom';
import { FaGoogle } from 'react-icons/fa';

function Login() {
  const navigate = useNavigate()

  const submitHandler = async (e) => {
    e.preventDefault();
    const formData = {
      email: e.target.email.value,
      password: e.target.password.value
    }

    const res = await axios.post(`${USER_API_END_POINT}/user/login`, formData, { withCredentials: true })

    if(res.status != 201){
      console.log(res)
    }


    console.log(res.status)
    console.log(res.data.message)
    console.log(res.data.user)
    navigate("/")
  }



  return (
    <>

      {/* Parent container with background image */}
      <div className='relative flex flex-col gap-8 items-center md:justify-center h-screen overflow-hidden md:bg-[url(/images/loginBG.jpeg)] bg-[url(/images/spidey23.jpeg)] bg-cover'>

        {/* Overlay div → semi-transparent black layer */}
        <div className="absolute inset-0 bg-black/60 z-0"></div>

        {/* Content above overlay → make sure it has higher z-index */}
        <div className="relative z-10 flex flex-col items-center gap-8">
          <h1 className='uppercase text-3xl font-bold mt-20 md:m-0 text-white'>
            Login in Your Account
          </h1>

          {/* Login card */}
          <Card className="w-full max-w-sm bg-[#0000004d]">
            <CardHeader>
              <CardTitle className={"text-[#ffffff]"}>Login to your account</CardTitle>
              <CardDescription className={"text-[#ffffff8b]"}>
                Enter your email below to login to your account
              </CardDescription>
              <CardAction>
                <Button variant="link" className={"text-[#ffffff]"} onClick={() => navigate("/signup")}>Sign Up</Button>
              </CardAction>
            </CardHeader>
            <CardContent>
              <form onSubmit={submitHandler}>
                <div className="flex flex-col gap-6">
                  <div className="grid gap-2">
                    <Label htmlFor="email" className={"text-[#ffffff]"}>Email</Label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="m@example.com"
                      required
                      className={"text-white placeholder:text-[#ffffff3d]"}
                    />
                  </div>
                  <div className="grid gap-2">
                    <div className="flex items-center">
                      <Label htmlFor="password" className={"text-[#ffffff]"}>Password</Label>
                      <a
                        href="#"
                        className=" text-[#ffffff] ml-auto inline-block text-sm underline-offset-4 hover:underline"
                      >
                        Forgot your password?
                      </a>
                    </div>
                    <Input id="password" type="password" required className={"text-white placeholder:text-white"} />
                  </div>
                  <Button type="submit" className="w-full bg-[#000000] hover:bg-[#ffffff4d] border border-[#ffffffa1]">
                    Login
                  </Button>
                </div>
              </form>
            </CardContent>
            <div className='flex items-center justify-center gap-1'><hr className='w-2/5' /><div className='text-white '>or</div> <hr className='w-2/5' /></div>

            <CardFooter className="flex-col gap-2">
              <Button variant="outline" className="w-full">
                Login with Google <FaGoogle />
              </Button>
            </CardFooter>
          </Card>
        </div>
      </div>
    </>
  )
}

export default Login
