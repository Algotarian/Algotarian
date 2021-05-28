import React,{useState} from "react";
import {Info,NavigateNext} from "@material-ui/icons";
import {Card,CardHeader,CardActionArea,CardContent, CardActions, Button, Typography,Container,LinearProgress} from "@material-ui/core";


export default function Cards(props)
{
    
    return (<>
    <Card>
    
        <CardActionArea>
            <CardContent>
            <Typography align="center" variant="h6" style={{fontWeight:"bolder",color:"grey"}}>{props.heading}</Typography>
            <Container align="center" style={{fontWeight:"100",color:"grey"}}> <Typography variant="body">{props.content}</Typography></Container>
           <LinearProgress variant="determinate" value={props.progress} style={{height:"10px",borderRadius:"30px",marginTop:"10px"}} />
            </CardContent>
            
        </CardActionArea>
        <CardActions>
        <Container align="center">
        <Button variant="contained" color="primary" style={{marginRight:"10px"}}>
               <NavigateNext /> Prac
            </Button>
            <Button variant="contained" color="primary">
           <Info /> Info    
            </Button>
        </Container>
           

        </CardActions>
    </Card>

    </>)
}