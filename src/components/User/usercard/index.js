import React from "react";
import {Grid,Container,List,LinearProgress,Card, CardActionArea, CardContent, ListItem, Avatar, Typography} from "@material-ui/core";

const usercard = (props)=>{
    return (
        <>
        <Container style ={{borderStyle:"solid",height:"127%",borderColor:"#2196f3",borderWidth:"0px 6px 0px 0px",fontFamily:"Arial, Helvetica, sans-serif"}}>
            <div style={{paddingTop:"10%"}}>
            <Avatar style={{height:"200px",width:"200px",marginTop:"3%"}} src={props.avatar}>{props.name}</Avatar>
            </div>
           
            <div style={{margin:"30% 0% 0% 0%"}}>
            <Typography align="center" variant="h6" style={{color:"#2196f3"}}> NAME </Typography>
            <Typography align="center" style={{color:"#2196f3"}} paragraph>{props.name} </Typography>
            <Typography align="center" variant="h6" style={{color:"#2196f3"}}> EMAIL </Typography>
            <Typography align="center" style={{color:"#2196f3"}} paragraph> {props.email}</Typography>
            <Typography align="center" style={{color:"#2196f3"}}> Course Progress </Typography>
            <LinearProgress value={props.courseProgress} variant="determinate" style={{height:"10px",borderRadius:"10px"}} />
            <Typography align="center" style={{color:"#2196f3"}}> Interview Progress </Typography>
            <LinearProgress value={props.interviewProgress} variant="determinate" style={{height:"10px",borderRadius:"10px"}} />
            </div>
            
        </Container>
        </>
    );
}

export default usercard;