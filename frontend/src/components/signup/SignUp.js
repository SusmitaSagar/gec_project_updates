import { Grid, Paper, TextField, Button } from "@mui/material";
// import { Link, useNavigate } from "react-router-dom";
import React, { useState } from "react";
import "../../styles/Signup.css";
import axios from "axios";
import ErrorMessage from "../ErrorMessage";
import Loading from "../Loading";

function Signup() {
  const [userId, setUserId] = useState("");
  const [userEmail, setUserEmail] = useState("");
  const [password, setPassword] = useState("");
  const [department, setDepartment] = useState("");
  const [admissionYear, setAdmissionYear] = useState("");
  const [program, setProgram] = useState("");
  const [role, setRole] = useState("");
  const [error, setError] = useState();
  const [loading, setLoading] = useState();

  const submitHandler = async (e) => {
    e.preventDefault();

    if (password == null) {
      console.log("Password Invalid");
    } else {
      try {
        const config = {
          headers: {
            "Content-type": "application/json",
          },
        };
        setLoading(true);

        const { data } = await axios.post(
          "http://192.168.43.23:8000/signup",
          {
            userId,
            userEmail,
            password,
            department,
            admissionYear,
            program,
            role,
          },
          config
        );

        localStorage.setItem("userInfo", JSON.stringify(data));

        setLoading(false);
      } catch (error) {
        setError(error.response.data.message);
      }
    }
  };

  const paperStyle = {
    padding: "5vh",
    height: "auto",
    width: "50%",
    margin: "20px auto",
  };
  const takeInputs = {
    marginTop: "3vh",
    paddingTop: "2vh",
  };
  const mainContainer = {
    width: "100vw",
    height: "100vh",
    placeItems: "center",
    backgroundColor: "#f2fffb",
  };

  return (
    <Grid display="grid" style={mainContainer}>
      <Paper className="paper" elevation={10} style={paperStyle}>
        <h1 style={{ textAlign: "center", color: "#1976d2", margin: "10px" }}>
          {" "}
          Make a Registration
        </h1>
        <br />

        {error && <ErrorMessage variant="danger">{error}</ErrorMessage>}
        {loading && <Loading />}
        <form noValidate onSubmit={submitHandler}>
          <Grid
            container
            display="flex"
            justifyContent="center"
            style={takeInputs}
          >
            <Grid item xs={12} md={12} lg={6} pr={4}>
              <TextField
                value={userId}
                // {user.name}
                onChange={(e) => setUserId(e.target.value)}
                label="userId"
                name="userId"
                sx={{ mb: 2 }}
                placeholder="Id"
                fullWidth
                required
              ></TextField>
              <TextField
                value={userEmail}
                onChange={(e) => setUserEmail(e.target.value)}
                label="userEmail"
                name="userEmail"
                placeholder="@example.com"
                fullWidth
                required
              ></TextField>
              <TextField
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                label="Password"
                sx={{ mt: 2 }}
                placeholder="Enter Password"
                type="password"
                name="password"
                fullWidth
                required
              ></TextField>
              <TextField
                value={department}
                onChange={(e) => setDepartment(e.target.value)}
                label="Department"
                sx={{ mt: 2 }}
                placeholder="Department"
                name="Department"
                fullWidth
              ></TextField>
              <TextField
                value={admissionYear}
                onChange={(e) => setAdmissionYear(e.target.value)}
                label="Admission Year"
                sx={{ mt: 2 }}
                placeholder="Admission Year"
                type="number"
                name="admission year"
                fullWidth
              ></TextField>
              <TextField
                value={program}
                onChange={(e) => setProgram(e.target.value)}
                label="Program"
                sx={{ mt: 2 }}
                placeholder="Program"
                name="Program"
                fullWidth
              ></TextField>
              <TextField
                value={role}
                onChange={(e) => setRole(e.target.value)}
                label="Role"
                sx={{ mt: 2 }}
                placeholder="Student/Teacher"
                name="Role"
                fullWidth
              ></TextField>
            </Grid>
          </Grid>
          <Grid display="flex" justifyContent="center">
            <Button
              type="submit"
              color="primary"
              variant="contained"
              style={{ marginTop: "5vh" }}
            >
              Sign Up
            </Button>
          </Grid>
        </form>
      </Paper>
    </Grid>
  );
}

export default Signup;
