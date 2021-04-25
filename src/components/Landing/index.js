import React, { useState } from "react";
import LoginImage from "../../asset/loginimg.svg";
import SignUpImage from "../../asset/signupimg.jpg";
import {
  AppBar,
  MuiThemeProvider,
  Typography,
  Button,
  IconButton,
  Drawer,
  List,
  ListItem,
  CardContent,
  Card,
  CardActionArea,
  CardMedia,
  Toolbar,
  Container,
  Grid,
} from "@material-ui/core";
import { ListRounded,SupervisedUserCircle,SupervisedUserCircleTwoTone } from "@material-ui/icons";
import "./index.css";
import CustomCard from "../Shared/Cards/index";
import { createMuiTheme } from "@material-ui/core/styles";

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

export default function Index(props) {
  return (
    <>
      <MuiThemeProvider theme={theme}>
      
      <AppBar position="sticky">
          <Toolbar variant="dense">
            <IconButton>
              <ListRounded style={{ color: "white" }}></ListRounded>
            </IconButton>
            <Typography
              variant="h5"
              
              style={{ marginLeft: "2%" }}
            >
              {" "}
              ALGOTARIAN{" "}
            </Typography>
          </Toolbar>
        </AppBar>
     
        

        <main>
        <Container align="center" className="mar">
            <Typography variant="h2" style = {{color:"#2196f3"}}> Online Coding Platform </Typography>
            <Typography variant ="h6" style = {{color:"#2196f3"}} paragraph>Algotarian is the free online coding platform.
            No payment just signup and code and get into the techgints.

            </Typography>
        </Container>
          <div className="mar">
            <Grid container justify="center" spacing={2}>
              <Grid item>
               <CustomCard image = {LoginImage} title={"Already Have Account"} type={"login"} icon = {SupervisedUserCircle}/>

              </Grid>
              <Grid item>
                  <CustomCard image = {SignUpImage} title = {"Sign Up Code Right Now"} type = {"Sign Up"} icon={SupervisedUserCircleTwoTone} />
              </Grid>
            </Grid>
          </div>
        </main>
      </MuiThemeProvider>
    </>
  );
}
