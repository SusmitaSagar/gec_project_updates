import { React, useState } from "react";
import { Grid, Paper, TextField, Button, Typography } from "@mui/material";
import {  Link, useNavigate } from "react-router-dom";
import "../../styles/Login.css";
import { useDispatch } from "react-redux";

import {Login_User} from "../../redux/actions/CurrentUser_Action";

function Login() {
   

  // const url = process.env.REACT_APP_SERVER_URL;

  const navigate = useNavigate();


  const dispatch = useDispatch();

 
  
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

 
  const submitHandler = async (e) => {
    e.preventDefault();

    const makeReq = await fetch(`http://192.168.43.23:8000/login`,{
      method:"POST",
      headers:{
      "Content-Type":"application/json",
      },
      body:JSON.stringify({
        email,password
      })
    });

    const response = await makeReq.json();
   console.log(response);
    if(response.message){
      dispatch(Login_User(response.data));

      if(response.data.role==="student"){
        navigate("/student_dash");
      }else if(response.data.role==="teacher"){
        navigate("/teacher_dash");
      }else if(response.data.role==="admin"){
        navigate("/admin_dash");
      }
    }
  };

  const mainContainer = {
    width: "100vw",
    height: "100vh",
    placeItems: "center",
    backgroundColor: "#f2fffb",
  };

  const paperStyle = {
    padding: "5vh",
    height: "auto",
    width: 450,
    margin: "20px auto",
  };
  const btstyle = { marginTop: "4vh" };
  const font = { fontSize: 17 };
  return (
    <>
      <Grid style={mainContainer} display="grid">
        <Paper className="paper" elevation={10} style={paperStyle}>
          <h1 style={{ margin: "10px", textAlign: "center", color: "#1976d2" }}>
            Login Please{" "}
          </h1>

          <Grid>
            <form
              style={{ marginTop: "5vh" }}
              noValidate
              onSubmit={submitHandler}
            >
              <Grid>
                <TextField
                  onChange={(e) => setEmail(e.target.value)}
                  name="email"
                  label="Email"
                  placeholder="@example.com"
                  fullWidth
                  required
                ></TextField>
                <TextField
                  onChange={(e) => setPassword(e.target.value)}
                  name="password"
                  label="Password"
                  sx={{ mt: 2 }}
                  placeholder="Enter Password"
                  type="password"
                  fullWidth
                  required
                ></TextField>
                <Typography style={btstyle}>
                  <Link to="#">Forgot Password</Link>
                </Typography>
              </Grid>
              <Button
                type="submit"
                color="primary"
                variant="contained"
                style={btstyle}
                fullWidth
              >
                Login
              </Button>
            </form>
            <Grid style={{ marginTop: "3vh" }}>
              <Typography style={font}>
                New to Organisation? <Link to="/signup"> Register</Link>
              </Typography>
            </Grid>
          </Grid>
        </Paper>
      </Grid>
    </>
  );
}

export default Login;
