import Chart from "react-apexcharts";
import React,{useState} from "react";
import {Card,CardActionArea,CardActions,CardContent,Typography,Container} from "@material-ui/core";

export default function Charts(props)
{
    return (
        <>
        <Card>
        <CardActionArea>
        <CardContent>
        <Container align="center"><Typography variant="h6" style={{fontWeight:"bold",color:"grey"}}>{props.type}</Typography></Container>
        
        <Chart
        options={props.options}
    series={props.data}
    type="line"
    width="350"></Chart>
        </CardContent>
        
        </CardActionArea>
       
        </Card>
       
        </>
    );
}