import { Paper } from '@mui/material';
//import "../../styles/Home.css";
//import Plus from ../
import React from 'react';
import { Fab, TextField } from "@mui/material";
import { Add } from '@mui/icons-material';
import { Link } from 'react-router-dom';
import "../../styles/addteacher.css"

function Add_student() {
    return (
        <>
            <div>
                <br></br>
                <div>
                    <Paper elevation={24}>
                        <div id='head'>
                            <h1 style={{ display: "center" }}>Add a Student </h1>

                        </div>
                    </Paper>
                </div>
                <div >




                    <br></br>
                    <p>Department : B.Tech CSE</p>




                    <div style={{ display: "flex", justifyContent: "center" }}>

                        <Paper className="paper-form" style={{ margin: "30px 10%", padding: "8px" }}>
                            <form className="techerdet" onSubmit={""}>
                                <TextField
                                    name="Student_name"

                                    label=" Student Name"
                                />
                                <TextField
                                    name="Studentid"

                                    label=" Enrollment number"
                                />
                                <TextField
                                    name="department"

                                    label=" Department"
                                />
                                <TextField
                                    name="Subject"

                                    label=" Gec subject name"

                                />

                                <input type="submit" value="submit" />
                            </form>
                        </Paper>



                    </div>

                </div>

            </div>
        </>
    );
}

export default Add_student;























