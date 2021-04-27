import React,{useState} from "react";
import {TextField,MuiThemeProvider, Container,Grid,Typography,Button,ButtonGroup,IconButton} from "@material-ui/core";
import {NavigateNextOutlined,VerifiedUser} from "@material-ui/icons";
import AlgotarianLogo from "../../asset/Algotarian-Logo.png";
import { createMuiTheme } from "@material-ui/core/styles";
import GoogleLogo from "../../asset/Google.png";
import FacebookLogo from "../../asset/facebook.png";
import GithubLogo from "../../asset/github.png";
import {Link} from "react-router-dom";

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
export default function Index(props)
{
    return (<>
  <MuiThemeProvider theme = {theme}>
    <Container align = "center" style={{marginTop:"3%"}}><img src={AlgotarianLogo} height={100}></img></Container>
    <Container align = "center">
    <Typography variant="h4" style = {{color:"#2196f3",fontWeight:"bolder"}}>ALGOTARIAN</Typography>
    </Container>
    <Container align = "center">
    <Typography variant="h5" style = {{color:"#2196f3",marginBottom:"2%"}}>Signup</Typography>
    
    </Container>

    <Grid container justify = "center" spacing={3}> 
    <Grid item md={3} xs={11}>
    <TextField  color = "primary" variant="outlined" label="Name" fullWidth></TextField>
    </Grid>
    <Grid item md={3} xs={11}>
    <TextField color = "primary" variant="outlined" label="Password" type="password" fullWidth></TextField>
    </Grid>
    

    </Grid>
    <Grid container justify = "center" spacing={3}> 
    <Grid item md={6} xs={11}>
    <TextField  color = "primary" variant="outlined" label="Email" type="Email" fullWidth></TextField>
    </Grid>
   
    

    </Grid>
    <Grid container justify = "center" spacing={3}> 
    <Grid item md={6} xs={11}>
    <TextField  color = "primary" variant="outlined" label="Confirm Password" type="password" fullWidth></TextField>
    </Grid>
    </Grid>
    
    <Container align="center" style = {{marginTop:"2%",marginBottom:"2%"}}>
    
    <Button variant="contained" color="primary">
    <NavigateNextOutlined style={{color:"white"}}></NavigateNextOutlined>
  Signup
</Button></Container>

    <Grid container justify="center" spacing={4}>
    <Grid item>
        <IconButton><img src={GoogleLogo} height={35}></img> </IconButton>
    </Grid>
    <Grid item>
        <IconButton> <img src={FacebookLogo} height={35}></img></IconButton>
    </Grid>
    <Grid item>
        <IconButton> <img src={GithubLogo} height={35}></img></IconButton>
    </Grid>
    </Grid>
    <Container align="center">
    <Link to = "/login"> <Button color="primary">

<VerifiedUser style={{color:"#2196f3"}} /> Login
</Button></Link>
   
    </Container>
    </MuiThemeProvider>
    </>);
}