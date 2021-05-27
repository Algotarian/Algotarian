import React,{useState} from "react";

import {MuiThemeProvider} from "@material-ui/core";
import {} from "@material-ui/icons";
import Navbar from "../Shared/Navbar/index";
import { createMuiTheme } from "@material-ui/core/styles";
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
    
</MuiThemeProvider>
    </>);
}