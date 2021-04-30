import React,{useState} from "react";

import {MuiThemeProvider,Grid,List,LinearProgressWithLabel} from "@material-ui/core";
import {} from "@material-ui/icons";
import Navbar from "../Shared/Navbar/index";
import { createMuiTheme } from "@material-ui/core/styles";
import UserArea from "./usercard/index";
import testimage from "../../asset/user.png";
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
    <Grid container >
        <Grid item >
        <UserArea avatar={testimage} name={"Kanishk Dixit"} email={"kanu0704@gmail.com"} courseProgress={20} interviewProgress={30} />
        </Grid>
    </Grid>
    </MuiThemeProvider>
        
    </>);
}