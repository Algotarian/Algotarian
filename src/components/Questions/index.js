import React,{useState} from "react";

import {MuiThemeProvider,BottomNavigation,BottomNavigationAction} from "@material-ui/core";
import {Fireplace,Code,Check} from "@material-ui/icons";
import Navbar from "../Shared/Navbar/index";
import { createMuiTheme } from "@material-ui/core/styles";
import "./index.css";
import Interview from "./Interview/index";
import Hot from "./Hot/index";
import Test from "./Test/index";

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
  function tab(val)
  {
      return val==1?<Interview />: val==2?<Hot />:<Test />
  }
export default function Index(props)
{
    var [navigation,setNavigation]=useState(1);
    return (<>
    <MuiThemeProvider theme={theme}>
    <Navbar />

        {tab(navigation)}
       
       
   
        <BottomNavigation showLabels className="boet" onChange={(event, newValue) => {
        setNavigation(newValue);
      }}>
            <BottomNavigationAction label="INTERVIEW" value = {1} icon={<Code style={navigation==1?{color:"#2196f3"}:{}} />}></BottomNavigationAction>
            <BottomNavigationAction label="HOT" value = {2} icon={<Fireplace style={navigation==2?{color:"#2196f3"}:{}} />}></BottomNavigationAction>
            <BottomNavigationAction label="TEST" value = {3} icon={<Check style={navigation==3?{color:"#2196f3"}:{}} />}></BottomNavigationAction>
        </BottomNavigation>
    
    </MuiThemeProvider>
    

    </>);
}