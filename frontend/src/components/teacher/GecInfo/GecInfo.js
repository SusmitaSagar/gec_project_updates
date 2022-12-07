import "../../../styles/gecinfo.css";
import { useState } from "react";
import React from 'react';
import axios from "axios";
import { Fab, Paper, TextField } from "@mui/material";
import { LineAxisOutlined } from "@mui/icons-material";

function GecInfo() {
    //take argument and return
    const [formData, setFormData] = useState({"courseCode":"",
    "courseName":"",
    "syllabus":"",
    "department":"",
    "teacherName":"",
    "teacherID":""
});

    const submitGecDetails = async (event)=>{
    event.preventDefault();
    axios.post("http://10.10.76.0:8000/subjects", formData)
    .then((res)=>{
        alert("Data Saved Successfully");
    })       // for successful request
    .catch(err => console.log("Error occured =>", err.message));  // for failure of request
    
    // to get all subjects from backend
    // to get and organize data of get request read map() in js
    // axios.get("http://10.10.76.0:8000/subjects")
    // .then(res => console.log(res.data));
    };

    const onChangeHandler = function (event){
        console.log(event.target.name);
        var data = {...formData};
        data[event.target.name] = event.target.value;
        setFormData(data);
    };

    return (

        <>
            <br></br>
            <h1>Enter the Gec Subject Details</h1>
            <div style={{display:"flex",justifyContent:"center"}}>

                <Paper className="paper-form" style={{ margin: "30px 10%", padding: "8px" }}>
                    <form  className="gec-info-form" onSubmit={submitGecDetails}>
                        <TextField
                            name="courseName"
                            onChange={onChangeHandler}
                            value={formData.courseName}
                            label=" Gec subject name"
                        />

                        <TextField

                            name="courseCode"
                            onChange={onChangeHandler}
                            value={formData.courseCode}
                            label=" Subject Code "

                        />

                        <TextField

                            name="department"
                            onChange={onChangeHandler}
                            value={formData.department}
                            label="Department "

                        />
                        <TextField

                            name="teacherName"
                            onChange={onChangeHandler}
                            value={formData.teacherName}
                            label="Teacher Name"

                        />
                        <TextField

                            name="teacherID"
                            onChange={onChangeHandler}
                            value={formData.teacherID}
                            label="Teacher ID"

                        />
                        <TextField

                            name="syllabus"
                            onChange={onChangeHandler}
                            value={formData.syllabus}
                            label="Syllabus"

                        />

                        <input type="submit" value="submit"/>
                    </form>
                </Paper>

                

            </div>

        </>
    );
}
export default GecInfo;
