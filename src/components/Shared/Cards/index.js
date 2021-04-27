import React from "react";
import {Link} from "react-router-dom";
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
         <img src={props.image} style={{padding:"5%"}} height={180} />
        </CardActionArea>
        <CardContent>
          <Typography color = "primary" paragraph>{props.title}</Typography>
        </CardContent>
        <CardActionArea>
        <Container align="center">
        <Link to={props.link}> <Button color="primary"> <props.icon/>{props.type}</Button></Link>
        
        </Container>
        
          
        </CardActionArea>
      </Card>);
}