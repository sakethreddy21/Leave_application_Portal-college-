import React ,{useState, useEffect} from 'react'
import { useSession } from "next-auth/react";

import './leavestatus.css'

export default function LeaveStatus() {
  const [leaves, setLeaves] = useState([]);
  const [name, setName] = useState("");
 
  //delete the leaves funtion


  
  const { data: session } = useSession();
  if (!session) redirect("/");

  const regnum = session?.user?._doc.regnum;
  const role = session?.user?._doc.role;
  console.log(regnum);




  useEffect(() => {
    const getLeave = async () => {
      try {
        const res = await fetch('api/requestpost',{
          method: "POST",
          headers: {"Content-Type": "application/json"},
          body: JSON.stringify({regnum}),
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
                <th scope="col">Remarks</th>
                <th scope="col">Edit</th>
                <th scope="col">Delete</th>
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
              <td>{data.status}</td>
              <td>{}</td>
              
              <td>Edit</td>
              <td><button type='button' className="btn btn-danger" onClick={()=>deleteleave(data.leave_id)}>Delete</button></td>


            </tr>
          ))
        }
        
    </tbody>
</table>
        </div>
        
    </div>
  )
}
