"use client"
import React, {useState,useEffect, Fragment} from "react";
import './Requestform.css';
import { useSession } from "next-auth/react";
import { toast } from "react-hot-toast"
import { FcGoogle } from 'react-icons/fc';
import { redirect } from "next/navigation";
import { BsFillPersonFill } from 'react-icons/bs';
import { AiOutlineMail, AiFillLock } from 'react-icons/ai';
export default  function form() {
  const inputitems = [
    {
      id: '1',
      name: 'stdname',
       // Replace YourIconComponent with the actual icon component
      type: 'text',
      placeholder: 'Enter Student Name',
    },
    {
      id: '2',
      name: 'regnum',
       // Replace YourIconComponent with the actual icon component
      type: 'text',
      placeholder: 'Enter Registration Number',
    },
    {
      id: '3',
      name: 'leavetype',
       // Replace YourIconComponent with the actual icon component
      type: 'text',
      placeholder: 'Enter Leave Type',
    },
    {
      id: '4',
      name: 'visitingPlace',
       // Replace YourIconComponent with the actual icon component
      type: 'text',
      placeholder: 'Enter Visiting Place',
    },
    {
      id: '5',
      name: 'reason',
       // Replace YourIconComponent with the actual icon component
      type: 'text',
      placeholder: 'Enter Reason for Leave',
    },
    {
      id: '6',
      name: 'fromdate',
       // Replace YourIconComponent with the actual icon component
      type: 'date',
      placeholder: 'Select From Date',
    },
    {
      id: '7',
      name: 'todate',
      // Replace YourIconComponent with the actual icon component
      type: 'date',
      placeholder: 'Select To Date',
    },
  ];
  const [inputValues, setInputValues] = useState({});

  
  const handleInputChange = (e, name) => {
    const { value } = e.target;
    setInputValues((prevValues) => ({
      ...prevValues,
      [name]: value,
    }));
    console.log(inputValues);
  };









  const { data: session } = useSession();

  const stdname = session?.user?._doc.name;
  const regnum= session?.user?._doc.regnum;
  const role=session?.user?._doc.role;
  const [leaveType, setLeavetype]= useState("")
  const[visitingPlace, setVistingplace]= useState("");
  const [reason, setReason] = useState("");
  const [fromDate, setFromdate] = useState("");
  const [toDate, setTodate] = useState("");

  
  const onSubmitform = async e => {
e.preventDefault()
if(leaveType==="" || visitingPlace==="" || reason==="" || fromDate==="" || toDate===""){  
  toast.error("Please fill all the fields");
  }
  try {
    const res = await fetch("api/requestform/new",{
      method: "POST",
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify({stdname, regnum,stdname, regnum,leaveType,visitingPlace,reason,fromDate,toDate,stdname,regnum,role})
    })
    if(res.ok){
      toast.success("Request submitted successfully")
    }
    else{
      toast.error("Something went wrong")
    }
    
  } catch (error) {
    
  }
  }


  



  return (
    
    
    <div>
    <p className="font-bold text-3xl text-center mb-4">
      Create Your account!
    </p>
    <div>
      <div className="w-60">
        {inputitems.map((item) => (
          <div key={item.name} className="w-60">
            <div className=" mt-4">
              <span className=" absolute -translate-y-1/2 bg-white text-md text-pink-500 ml-6 ">
                {item.name}
              </span>

              <span className=" p-1 absolute beg-0 grid w-10 ">
                {item.icon}{' '}
              </span>
              <input
                type={item.type}
                placeholder={item.placeholder}
               // Add onchange event listener
               onChange={(e) => handleInputChange(e, item.name)}
        value={inputValues[item.name] || ''}
                className="h-10 border-2 border-pink-500 rounded-lg pl-10 text-pink-500 placeholder-pink-500 focus:border-transparent  focus:outline-none w-96"
              />
            </div>
          </div>
        ))}
      </div>

      <button className="font-bold ml-60">forgot password?</button>
      <div className="mt-2">
        <button   className="bg-pink-500 text-white font-bold text-xl rounded-lg px-40 py-1">
          Sign up
        </button>
      </div>
      <div className="inline-flex items-center justify-center w-full">
        <hr className="w-64 h-px my-8 bg-gray-200 border-0 " />
        
      </div>
      
    </div>
  </div>
  )
}



