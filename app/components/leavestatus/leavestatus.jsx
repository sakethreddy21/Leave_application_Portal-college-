import React ,{useState, useEffect} from 'react'
import { useSession } from "next-auth/react";

import './leavestatus.css'

export default function LeaveStatus() {
  const [leaves, setLeaves] = useState([]);
  const [name, setName] = useState("");
 
  //delete the leaves funtion


  
  const { data: session } = useSession();
  if (!session) redirect("/");
  const regnum = "qwert"
  const role = session?.user?._doc.role;





  useEffect(() => {
    const getLeave = async () => {
      try {
        const res = await fetch('api/requestpost',{
          method: "POST",
          headers: {"Content-Type": "application/json"},
          body: JSON.stringify({regnum}),
        });
        const leavearray = await res.json();
        console.log(res);
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

          <div className="row">

           
            <div className="col search">
              <input type="search " placeholder="  Search..."/>
              <span><i className="fa-solid fa-magnifying-glass"> </i></span>
            </div>

          </div>

          <table className="table table-striped table-hover">
            <thead className="table-info table align-middle">
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
              <td>{data.leave_id}</td>
              <td>{data.visitingplace}</td>
              <td>{data.reason}</td>
              <td>{data.leavetype}</td>
              <td>{data.fromdate}</td>
              <td>{data.todate}</td>
              <td>{data.status}</td>
              <td>{}</td>
              
              <td>Edit</td>
              <td><button type='button' className="btn btn-danger">Delete</button></td>


            </tr>
          ))
        }
              
            </tbody>
          </table>
        </div>
        
    </div>
  )
}
