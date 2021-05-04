import React , {useState} from "react";
import {Card,CardContent,Container} from "@material-ui/core";
import {} from "@material-ui/icons";



export default function(props)
{
    return ( <>
        <Card style={{width:"200px",borderRadius:"50px",backgroundColor:"#2196f3"}}>
            <CardContent>
                <Container align="center" style={{color:"white",fontWeight:"bolder",fontSize:"19px"}}>
                {props.type}
                </Container>
            </CardContent>
        </Card>
    </> );
}