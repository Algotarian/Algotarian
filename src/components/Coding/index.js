import React,{useState} from "react";

import {Container,Grid,Button,MuiThemeProvider} from "@material-ui/core";
import {PlayArrowOutlined,CloudUpload} from "@material-ui/icons";
import Editor from "./Editor/index";
import { createMuiTheme } from "@material-ui/core/styles";
import Navbar from "../Shared/Navbar/index";
import Ques from "./ques/index";


const theme = createMuiTheme({
  palette: {
    primary: {
      light: "#2196f3",
      main: "#2196f3",
      dark: "#2196f34",
      contrastText: "#fff",
    },
    secondary: {
      light: "#2196f3",
      main: "#2196f3",
      dark: "#ba000d",
      contrastText: "#000",
    },
  },
});

export default function Index(props)
{
    var [run,setRun]= useState(false);
    
    return (<>
        <MuiThemeProvider theme={theme}>
        <Navbar></Navbar>
           <Grid container style={{marginTop:"2%"}}>
           <Grid item>
       
          <Editor active={run}></Editor>
         
          </Grid>
           <Grid item lg={4} md={12} sm={12} xl={12}> <Ques></Ques></Grid>
           </Grid>
           <div style={{marginRight:"7%"}}><Grid container justify="flex-end" spacing={1} style={{marginTop:"1%"}}>
        
        <Grid item> <Button color="primary" variant="contained" onClick={(e)=>{
            setRun(true);
            setTimeout(function(){  setRun(false); }, 3000);
        }}><PlayArrowOutlined></PlayArrowOutlined> Run</Button></Grid>
        <Grid item> <Button color="primary" variant="contained"><CloudUpload></CloudUpload> Submit</Button></Grid>
    </Grid></div>
           
        
          
          
           
         
        </MuiThemeProvider>
    </>);
}