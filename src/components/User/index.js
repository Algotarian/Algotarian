import React,{useState} from "react";

import {MuiThemeProvider,Grid,List,LinearProgressWithLabel,Container} from "@material-ui/core";
import {} from "@material-ui/icons";
import Navbar from "../Shared/Navbar/index";
import { createMuiTheme } from "@material-ui/core/styles";
import UserArea from "./usercard/index";
import testimage from "../../asset/user.png";
import UserTable from "./usertable/index";
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
    return (<>
    <MuiThemeProvider theme={theme}>
    <Navbar />
    <Grid container spacing={2}>
        <Grid item >
        <UserArea avatar={testimage} name={"Kanishk Dixit"} email={"kanu0704@gmail.com"} courseProgress={20} interviewProgress={30} />
        </Grid>
        <Grid item lg={9} sm={6} xm={1} style={{paddingTop:"2%"}}>
        <UserTable  />
        
        </Grid>
    </Grid>
    </MuiThemeProvider>
        
    </>);
}