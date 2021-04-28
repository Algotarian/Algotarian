import React from "react";
import {
    AppBar,
  
    Typography,

    IconButton,

   
    Avatar,
    Toolbar,
    Container,

  } from "@material-ui/core";
  import { ListRounded,SupervisedUserCircleRounded } from "@material-ui/icons";
  import CustomCard from "../Cards/index";
import AlgotarianLogo from "../../../asset/Algotarian-Logo-white.png";

export default function Index(props)
{

    return (<>
         <AppBar position="sticky">
          <Toolbar variant="dense">
            <IconButton>
              <ListRounded style={{ color: "white",fontSize:"150%" }}></ListRounded>
            </IconButton>
            
            <img src = {AlgotarianLogo} height={90} style={{margin:"1%"}}></img>
            <Typography
              variant="h5"
              
              style={{ marginLeft: "1%",fontWeight:"bolder" }}
            >
           
              ALGOTARIAN
            </Typography>
           <Container align="right">
           <IconButton>
           <Avatar style={{backgroundColor:"#fff"}}><SupervisedUserCircleRounded style={{color:"#2196f3"}}></SupervisedUserCircleRounded></Avatar>
           </IconButton>
           
           </Container>
          </Toolbar>
        </AppBar>
    </>);
}