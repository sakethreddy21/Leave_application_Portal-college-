"use client";
import React, { useState, useEffect, useRef } from "react";

import Leaverequest from "../leaverequestform/Requestform.jsx";
import { redirect } from "next/navigation";
import Leavestatus from "../leavestatus/leavestatus";
import { useSession } from "next-auth/react";
import Box from "@mui/material/Box";
import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import ".//Navbar.css";


export default function Dashboard() {
  const { data: session } = useSession();
  if (!session) redirect("/");
  const regnum = session?.user?._doc.regnum;
  const role = session?.user?._doc.role;

  const dropdownRef = useRef(null);

  const toggleDropdown = () => {
    if (dropdownRef.current) {
      dropdownRef.current.style.display =
        dropdownRef.current.style.display === "block" ? "none" : "block";
    }
  };
  const [value, setValue] = React.useState('1');

  const handleChange = (event, newValue) => {
    setValue(newValue);};

  return (
    <div>


    <header>
      <nav className="navbar navbar-expand-lg navbar-dark nav-color">
        <div className="navbar-brand" to="/dashboard">
         
        </div>
        <img src="" className="logo md-1" alt="SRMIST" />

        <h2>Welcome to application {name}</h2>
        
        <ul className="navbar-nav ms-auto">
          <li className="nav-link">
            <div href="">
              <i className="fa-solid fa-user"></i>
            </div  >
            <div className="flex-box">
              <span className="reg">{regnum}(Student)</span>
              <button onClick={e => logout(e)} className="btn btn-primary">
          Logout
        </button>
            </div>
          </li>
        </ul>
      </nav>
      <h3 className="head"> Leave Application</h3>
      <div className="nithin">

      </div>
      

    </header>



    <Box>
      <TabContext value={value}>

        <Box sx={{borderBottom:1, borderColor:'divider'}}>
        <TabList aria-label='Tabs example' onChange={handleChange}>
        <Tab label='Item One' value='1'/>
        <Tab label='Item Two' value='2'/>
        </TabList>
        </Box>
        <TabPanel value="1"><Leaverequest/></TabPanel>
        <TabPanel value="2"><Leavestatus/></TabPanel>
        </TabContext>
    </Box>


  </div>
  
  );
}
