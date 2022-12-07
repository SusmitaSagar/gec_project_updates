import React from "react";
import "../../styles/admin.css"
import { useState } from "react";
import { Fab, Paper, TextField } from "@mui/material";
import { Add } from '@mui/icons-material';
import { Link } from 'react-router-dom';

function Admin() {
  return (
    <>
      <div>
        <br></br>
        <div>
          <Paper elevation={24}>
            <div id='head'>
              <h1 style={{}}>Admin Dashboard </h1>

            </div>
          </Paper>
        </div>
      </div>
      <div>
        <br></br>
        <h2>Go directly to student's and teacher's panel</h2>
      </div>

      <div>
        <Paper className="plus" style={{
          minWidth: "50px",
          minHeight: "45px",
          padding: "5px",
          margin: "20px",
          display: "inline-flex",
          cursor: "pointer",
        }} elevation={10}>
          <Link to="/gec-info">
            <Add className='add-icon' /></Link>
        </Paper>
        <p>Add a Gec Subject</p>


      </div>


      <br></br>


      <div>
        <Paper className="plus" style={{
          minWidth: "50px",
          minHeight: "45px",
          padding: "5px",
          margin: "20px",
          display: "inline-flex",
          cursor: "pointer",
        }} elevation={10}>
          <Link to="/add_teacher">
            <Add className='add-icon' /></Link>
        </Paper>
        <p>Add a Teacher</p>


      </div>

      <br></br>

      <div>
        <Paper className="plus" style={{
          minWidth: "50px",
          minHeight: "45px",
          padding: "5px",
          margin: "20px",
          display: "inline-flex",
          cursor: "pointer",
        }} elevation={10}>
          <Link to="/add_student">
            <Add className='add-icon' /></Link>
        </Paper>
        <p>Add a Student</p>
      </div>








    </>
  );
}

export default Admin;
