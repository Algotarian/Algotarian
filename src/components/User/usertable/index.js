import React from "react";

import {Button} from "@material-ui/core";
import {} from "@material-ui/icons";

import { DataGrid } from '@material-ui/data-grid';

const columns = [
    { field: 'id', headerName: 'id', width: 70 },
    { field: 'QUESNAME', headerName: 'QUES NAME', width: 180 },
    { field: 'LASTATTEMPT', headerName: 'LAST ATTEMPT', width: 180 },
    {
      field: 'SUCCESSRATE',
      headerName: 'SUCCESS RATE',
      type: 'number',
      width: 190,
    },
   {
       field:"",
       sortable: false,
       width: 180,
      
       headerName:"ACTIONS",
       renderCell:(props)=>{
           return (<>
               <Button  variant="contained" color={"primary"}>Click</Button>
           </>)
       }
   }
  ];
  
  const rows = [
    { id: 1, QUESNAME: 'Snow', LASTATTEMPT: 'Jon', SUCCESSRATE: 35 },
    { id: 2, QUESNAME: 'Snow', LASTATTEMPT: 'Jon', SUCCESSRATE: 35 },
    { id: 3, QUESNAME: 'Snow', LASTATTEMPT: 'Jon', SUCCESSRATE: 35 },
    { id: 4, QUESNAME: 'Snow', LASTATTEMPT: 'Jon', SUCCESSRATE: 35 },
    { id: 5, QUESNAME: 'Snow', LASTATTEMPT: 'Jon', SUCCESSRATE: 35 },
    { id: 6, QUESNAME: 'Snow', LASTATTEMPT: 'Jon', SUCCESSRATE: 35 },
    { id: 7, QUESNAME: 'Snow', LASTATTEMPT: 'Jon', SUCCESSRATE: 35 },
    { id: 8, QUESNAME: 'Snow', LASTATTEMPT: 'Jon', SUCCESSRATE: 35 },
    { id: 9, QUESNAME: 'Snow', LASTATTEMPT: 'Jon', SUCCESSRATE: 35 },
    { id: 10, QUESNAME: 'Snow', LASTATTEMPT: 'Jon', SUCCESSRATE: 35 },
    { id: 11, QUESNAME: 'Snow', LASTATTEMPT: 'Jon', SUCCESSRATE: 35 },
  ];
export default function(props){

    return (<>
    <DataGrid rows={rows} columns={columns}   />
    </>)
}