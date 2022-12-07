import React from 'react';
import "../../styles/Table.css"
import"../../styles/Home.css"

const Table = ({data, column}) => {
  return (
    <>
    <div className='forsubmit'>
    <table >
    <thead>
    <tr>
    <th>subject Name</th>
    <th>Course Code</th>
    <th>Teacher Name</th>
    <th>register here</th>
    </tr>
    </thead>

    <tbody>
    <tr>
     <td> Physical Education</td>
     <td> PT CD 703</td>
     <td> abcdef</td>
     <td><input type="submit" value="submit"/></td>
    
    </tr>
    </tbody>
    
    </table>
    </div>
    </>
  
  )
}

export default Table

