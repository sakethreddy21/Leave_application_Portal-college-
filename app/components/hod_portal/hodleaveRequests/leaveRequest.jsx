import { toast } from "react-hot-toast"

import React, { useState, useEffect } from 'react'
import { useSession } from "next-auth/react";
import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';
import SendIcon from '@mui/icons-material/Send';
import Stack from '@mui/material/Stack';

import './leavestatus.css'

export default function LeaveStatus() {
  const [leaves, setLeaves] = useState([]);
  const [name, setName] = useState("");

  //delete the leaves funtion

  const [id, setId] = useState('');


  const { data: session } = useSession();
  if (!session) redirect("/");

  const regnum = session?.user?._doc.regnum;
  const role = session?.user?._doc.role;
  const hodEmail = session?.user?._doc.email;
  




  useEffect(() => {
    const getLeave = async () => {
      try {
        const res = await fetch('api/requestpost/hodrequest', {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ hodEmail }),
        });
        const leavearray = await res.json();
        console.log(leavearray);
        setLeaves(leavearray);
      } catch (err) {
        console.error(err.message);
      }
    };
    getLeave();
  }, [regnum])



  const updateStatus = async (_id) => {
  console.log(_id)
  const status = "Approved by HOD"  
    
      try {
       
        const res = await fetch(`api/requestpost/statusupdate/${_id}`,{
          method: "POST",
          headers: {"Content-Type": "application/json"},
          body: JSON.stringify({status}),
         
        })
        if(res.ok){
          setLeaves((prevLeaves) =>
        prevLeaves.map((leave) =>
          leave._id === _id ? { ...leave, status } : leave
        )
      );

      console.log(res);
        }
          
        else {
          console.error("error");
        }
      }
      catch (err) {
        console.error(err.message);
      }
    }


  


  return (
    <div>





      <div className="tabl table-responsive">

        <table class="styled-table">
          <thead>
            <tr>
              <th scope="col">leave_id</th>
              <th scope="col">Place of visit</th>
              <th scope="col">Reason</th>
              <th scope="col">Leave Type</th>
              <th scope="col">From</th>
              <th scope="col">To</th>
              <th scope="col">Status</th>
              <th scope="col">Approval</th>
              <th scope="col">Edit</th>

            </tr>
          </thead>
          <tbody>
            {
              leaves.map(data => (
                <tr key={data.leave_id}>
                  <td>{data._id}</td>
                  <td>{data.visitingPlace}</td>
                  <td>{data.reason}</td>
                  <td>{data.leaveType}</td>
                  <td>{data.fromDate}</td>
                  <td>{data.toDate}</td>
                  <td>{data.status}

                   

                  </td>
                  <td> <Stack direction="row" spacing={2}>
                      
                      <Button onClick={()=> updateStatus(data._id)} variant="contained" endIcon={<SendIcon />}>
                        Approve
                      </Button>
                    </Stack></td>

                  <td>Edit</td>



                </tr>
              ))
            }
             

          </tbody>
        </table>
      </div>

    </div>
  )
}
