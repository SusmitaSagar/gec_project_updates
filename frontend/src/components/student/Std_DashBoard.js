// import { Paper } from '@mui/material';
// import "../../styles/Home.css";
// import React from 'react';
// import {Add} from '@mui/icons-material';
// import { Link } from 'react-router-dom';

// function student() {
//     return (
//         <>
//             <div>
//                 <br></br>
//                 <div>
//                     <Paper elevation={24}>
//                         <div id='head'>
//                             <h1 style={{}}>Student Dashboard </h1>

//                         </div>
//                     </Paper>
//                 </div>
//                 <div>
//                     <br></br>
//                     <h2>Select  General Elective Course</h2>

//                     <br></br>
//                     <p> Department : CSE B.Tech</p>

//                     <br></br>
                    

                    
//                     <div>
//                         <p> click here to add gec subject</p>
//                     </div>
                    



//                 </div>

//             </div>
//         </>
//     );
// }

// export default student;

import React from "react";
import axios from 'axios';
import { useEffect , useState } from "react";
import "../../styles/Home.css"
import Table from "./Table";

function Student(){
  const [dataTable, setDataTable] = useState([]);
  //console.log(dataTable);  data in consol



  useEffect(() => {
    axios('https://jsonplaceholder.typicode.com/users')
     .then(res => setDataTable(res.data))
     .catch(err => console.log(err))

  },[]);

  const column =[
    { heading: 'SubName'},
    { heading: 'code'},
    { heading: 'ThrName'},
  ]

  return(
    <div className="stu">
    <h1>Dynamic Table</h1>
    <Table data={dataTable} column={column}/>
    
    </div>
  );
}

export default Student;


