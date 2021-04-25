import React,{useState} from "react";

import {AppBar,MuiThemeProvider} from "@material-ui/core";
import {} from "@material-ui/icons";


import { createMuiTheme } from '@material-ui/core/styles';

const theme = createMuiTheme({
  palette: {
    primary: {
      light: '#2196f3',
      main: '#3f50b5',
      dark: '#002884',
      contrastText: '#fff',
    },
    secondary: {
      light: '#2196f3',
      main: '#f44336',
      dark: '#ba000d',
      contrastText: '#000',
    },
  },
});

export default function Index(props)
{
    return (<>
        <MuiThemeProvider theme={theme}>
            
        </MuiThemeProvider>
    </>);
}