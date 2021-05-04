import React , {useState} from "react";
import { Container, Grid,Button, Typography } from "@material-ui/core";
import {} from "@material-ui/icons";
import CustomTable from "../../Shared/Table/index";


  
var columns = [
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
  var rows = [
    { id: 1, QUESNAME: 'Snow', LASTATTEMPT: 'Jon', SUCCESSRATE: 35 },
  
  ];
export default function(props)
{
    return (<>
         <Container style={{height:"470px",marginTop:"2%"}} align="center">
   <Typography variant="h4" style = {{color:"#2196f3",fontWeight:"bolder",marginBottom:"2%"}}>TEST</Typography>
   <CustomTable rows={rows} columns={columns} ></CustomTable>
   
   </Container>
    </>);
}