import React from "react";
import {
   
    Typography,
    Button,
   
   
    CardContent,
    Card,
    CardActionArea,
    
    Container,
    
  } from "@material-ui/core";
//   import { SupervisedUserCircle } from "@material-ui/icons";
  import "./index.css";
  
export default function Index(props)
{
    return ( <Card>
        <CardActionArea >
         <img src={props.image} height={220} />
        </CardActionArea>
        <CardContent>
          <Typography color = "primary" paragraph>{props.title}</Typography>
        </CardContent>
        <CardActionArea>
        <Container align="center">
        <Button color="primary"> <props.icon /> {props.type}</Button>
        </Container>
        
          
        </CardActionArea>
      </Card>);
}