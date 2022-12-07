import { Paper } from '@mui/material';
import "../../styles/Home.css";
//import Plus from ../
import React from 'react';
import {Add} from '@mui/icons-material';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <>
      <div>
        <br></br>
        <div>
          <Paper elevation={24}>
            <div id="head">
              <h1 style={{}}>Teacher Dashboard </h1>
            </div>
          </Paper>
        </div>
        <div>
          <br></br>
          <h2>Offer a Gec subject to students</h2>

          <br></br>
          <p>Department:CSE B.Tech</p>

          <br></br>

          <Paper
            className="plus"
            style={{
              minWidth: "50px",
              minHeight: "45px",
              padding: "5px",
              margin: "20px",
              display: "inline-flex",
              cursor: "pointer",
            }}
            elevation={10}
          >
            <Link to="/gec-info">
              <Add className="add-icon" />
            </Link>
          </Paper>

          <div>
            <p> click here to add gec subject</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;




