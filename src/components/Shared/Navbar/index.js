import React,{useState} from "react";
import {
    AppBar,
    ListItemAvatar,
    
    Typography,
    ListItemText,
    IconButton,
    List,
    ListItem,
   Drawer,
    Avatar,
    Toolbar,
    Container,
    

  } from "@material-ui/core";
  import { ListRounded,SupervisedUserCircleRounded,Home,Info,ContactSupport } from "@material-ui/icons";
  import CustomCard from "../Cards/index";
import AlgotarianLogo from "../../../asset/Algotarian-Logo-white.png";

export default function Index(props)
{
  const [state,setstate]=useState(false);
    return (<>
    <Drawer anchor="left" open={state} onClose={(e)=>{
      setstate(false);
    }}>
      <List>
        <ListItem button>
        <ListItemAvatar>
        <Avatar>
        <Home></Home>
        </Avatar>
       
        </ListItemAvatar>
          <ListItemText primary="Home" secondary="Get to the home page"></ListItemText>
        </ListItem>
        <ListItem button>
        <ListItemAvatar>
        <Avatar>
        <Info></Info>
        </Avatar>
       
        </ListItemAvatar>
          <ListItemText primary="About Us" secondary="Information about Algotarian"></ListItemText>
        </ListItem>
        <ListItem button>
        <ListItemAvatar>
        <Avatar>
        <ContactSupport></ContactSupport>
        </Avatar>
       
        </ListItemAvatar>
          <ListItemText primary="Support" secondary="Get Support"></ListItemText>
        </ListItem>
      </List>
    </Drawer>
         <AppBar position="sticky">
          <Toolbar variant="dense">
            <IconButton onClick={(e)=>{
              setstate(!state);
            }}>
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