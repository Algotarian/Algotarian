import React,{useState} from "react";

import {TextField,MuiThemeProvider, Container,Grid,Typography,Button,ButtonGroup,IconButton} from "@material-ui/core";
import {NavigateNextOutlined} from "@material-ui/icons";
import AlgotarianLogo from "../../asset/Algotarian-Logo.png";
import { createMuiTheme } from "@material-ui/core/styles";
import GoogleLogo from "../../asset/Google.png";
import FacebookLogo from "../../asset/facebook.png";
import GithubLogo from "../../asset/github.png";

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
    <Container align = "center" style={{marginTop:"6%"}}><img src={AlgotarianLogo} height={200}></img></Container>
    <Container align = "center">
    <Typography variant="h4" style = {{color:"#2196f3",fontWeight:"bolder"}}>ALGOTARIAN</Typography>
    </Container>
    <Container align = "center">
    <Typography variant="h5" style = {{color:"#2196f3",marginBottom:"2%"}}>Login</Typography>
    </Container>
    <Grid container justify="center" spacing={3}>
        <Grid item><TextField  label="Email"  /></Grid>
        <Grid item><TextField  label="Password"  type="password"  /></Grid>
        

    </Grid>
    <Container align="center" style = {{marginTop:"2%",marginBottom:"2%"}}>
    
    <Button variant="contained" color="primary">
    <NavigateNextOutlined style={{color:"white"}}></NavigateNextOutlined>
  Login
</Button></Container>

    <Grid container justify="center">
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
    <Button color="primary">
    <NavigateNextOutlined style={{color:"#2196f3"}} /> SignIn
</Button>
    </Container>
    </MuiThemeProvider>

    </>);
}