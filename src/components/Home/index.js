import React,{useState} from "react";

import {MuiThemeProvider,Grid} from "@material-ui/core";
import {} from "@material-ui/icons";
import Navbar from "../Shared/Navbar/index";
import { createMuiTheme } from "@material-ui/core/styles";
import CustomCard from "./cards/index";
import Graphs from "./graphs/index";
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
  const sections=[
    {
      heading:"Python",
      content:"Practice Ques Python",
      progress:10,
    },{
      heading:"Java",
      content:"Practice Ques java",
      progress:20,
    },{
      heading:"C++",
      content:"Practice Ques C++",
      progress:3,
    },{
      heading:"Data Structure",
      content:"Practice Ques Data-Stucture",
      progress:50,
    },
    {
      heading:"Algorithm",
      content:"Practice Ques Algorithm",
      progress:80,
    }
  ]
  const graphs = [{
    type:"User On Time",
    options: {
      chart: {
        id: "line1"
      },
      xaxis: {
        categories: [20, 21, 22, 23, 24, 25]
      },
      

    },
    series: [
      {
        name: "series-1",
        data: [30, 40, 45, 50, 49, 60]
      }
    ]
  },{
    type:"Performance",
    options: {
      chart: {
        id: "line1"
      },
      xaxis: {
        categories: [20, 21, 22, 23, 24, 25]
      },
     

    },
    series: [
      {
        name: "series-1",
        data: [1, 40, 32, 33, 12, 60]
      }
    ]
  },{
     type:"Success Hit",
    options: {
      chart: {
        id: "line1"
      },
      xaxis: {
        categories: [20, 21, 22, 23, 24, 25]
      },
      

    },
    series: [
      {
        name: "series-1",
        data: [32, 22, 12, 21, 11, 10]
      }
    ]
  }];
export default function Index(props)
{
  
    return (<>
<MuiThemeProvider theme={theme}>
    <Navbar />
    <Grid container spacing={3} justify="center" style={{marginTop:"3%"}}>
    {graphs.map((value,index)=>(
      <Grid item>
    <Graphs options={value.options} data={value.series} type={value.type}></Graphs>
    </Grid>
    ))}
    </Grid>
    <Grid container spacing={3} justify="center" style={{marginTop:"2%"}}>
    {sections.map((value,index)=>(<Grid item>
      <CustomCard heading={value.heading} content={value.content} progress={value.progress}></CustomCard>
    </Grid>))}

    </Grid>

</MuiThemeProvider>
    </>);
}