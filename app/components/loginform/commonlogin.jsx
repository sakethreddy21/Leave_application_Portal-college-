"use client";

import Link from "next/link";
import { useState } from "react";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import {AiOutlineMail} from "react-icons/ai"
import {RiLockPasswordLine} from "react-icons/ri"
import {PiShootingStar} from "react-icons/pi"
import { toast } from "react-hot-toast";

export default function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const router = useRouter();
const handleSubmit = (e) => {
    e.preventDefault();

     try {
      const res =  signIn("credentials", {
        email,
        password,
        redirect: false,
      });

      if (res.error) {
        console.log(error)
        toast.error("Invalid Credentials");
        return;
      }
      else{  

        console.log(res)

        toast.success("Log Successful");
router.push("/dashboard");
        
      }
      
    } catch (error) {
      console.log(error);
    }
  };

return (<div className="grid place-items-center h-screen bg-gradient-to-r from-violet-300 via-indigo-300 to-pink-300 ">
  
      <div className="shadow-lg p-5 rounded-lg border-4 border-black bg-white">
        <div className="flex  gap-4"><div className="pl-10 pt-4"><PiShootingStar  size={36}/></div>
        <div className="text-3xl font-bold my-4 text-center">Welcome Back</div></div>
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">

       

        


<div className="relative">
<span
    className=" pt-1.5 px-1 absolute beg-0 grid w-10 "
  ><AiOutlineMail size={30}/> </span> 
<input 
          className="peer w-[400px] border border-gray-200 py-2 px-10 bg-zinc-100/40  placeholder-transparent" 
          type="email" 
          onChange={(e)=>setEmail(e.target.value)}
           placeholder="EmaCVBHNil"
          />
          <span
    className="pointer-events-none absolute start-12 top-0 -translate-y-1/2 bg-white p-0.5 text-xs text-gray-700 transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm peer-focus:top-0 peer-focus:text-xs"
  >
    Email
  </span>
</div>

<div className="relative">
<span
    className=" pt-1.5 px-1 absolute beg-0 grid w-10 "
  ><RiLockPasswordLine size={30}/> </span> 
<input 
          className="peer w-[400px] border border-gray-200 py-2 px-10 bg-zinc-100/40  placeholder-transparent"
           onChange={(e)=>setPassword(e.target.value)}
           type="password"
           placeholder="Password" 
           />
           <span
    className="pointer-events-none absolute start-12 top-0 -translate-y-1/2 bg-white p-0.5 text-xs text-gray-700 transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm peer-focus:top-0 peer-focus:text-xs"
  >
    Password
  </span>
</div>
          
          
          <button  className="bg-blue-400 text-white font-bold cursor-pointer px-6 py-2 hover:bg-violet-700" href={"/dashboard"}>Login</button>
          {error && (
          <div className="bg-red-500 text-white w-fit text-sm py-1 px-3 rounded-md mt-2">
              {error}
            </div>
             )}
            <Link className="text-sm mt-3 text-right" href={"/register"}>
            Don't have an account? <span className="underline hover:text-violet-500">Register</span>
          </Link>
          </form>
      </div>
    </div>
        
)}
