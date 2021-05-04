import React , {useState} from "react";
import {Grid,Container,Button} from "@material-ui/core";
import {} from "@material-ui/icons";
import CustomerCard from "./cards/index";


export default function(props)
{
    return (<>
        <Grid container justify="center" spacing={3} style={{marginTop:"4%"}}>
            <Grid item>
            <Button> <CustomerCard type={"ARRAY"}></CustomerCard></Button>
           
            </Grid>
            <Grid item>
            <Button> <CustomerCard type={'LINK LIST'}></CustomerCard></Button>
           
            </Grid>
            <Grid item>
            <Button> <CustomerCard type={"SORTING"}></CustomerCard></Button>
           
            </Grid>
            <Grid item>
            <Button> <CustomerCard type={"TREES"}></CustomerCard></Button>
           
            </Grid>
            <Grid item>
            <Button> <CustomerCard type={"GRAPHS"}></CustomerCard></Button>
           
            </Grid>
        </Grid>
        <Grid container justify="center" spacing={3} style={{marginTop:"4%"}}>
            <Grid item>
            <Button> <CustomerCard type={"ARRAY"}></CustomerCard></Button>
           
            </Grid>
            <Grid item>
            <Button> <CustomerCard type={'LINK LIST'}></CustomerCard></Button>
           
            </Grid>
            <Grid item>
            <Button> <CustomerCard type={"SORTING"}></CustomerCard></Button>
           
            </Grid>
            <Grid item>
            <Button> <CustomerCard type={"TREES"}></CustomerCard></Button>
           
            </Grid>
            <Grid item>
            <Button> <CustomerCard type={"GRAPHS"}></CustomerCard></Button>
           
            </Grid>
        </Grid>
        <Grid container justify="center" spacing={3} style={{marginTop:"4%"}}>
            <Grid item>
            <Button> <CustomerCard type={"ARRAY"}></CustomerCard></Button>
           
            </Grid>
            <Grid item>
            <Button> <CustomerCard type={'LINK LIST'}></CustomerCard></Button>
           
            </Grid>
            <Grid item>
            <Button> <CustomerCard type={"SORTING"}></CustomerCard></Button>
           
            </Grid>
            <Grid item>
            <Button> <CustomerCard type={"TREES"}></CustomerCard></Button>
           
            </Grid>
            <Grid item>
            <Button> <CustomerCard type={"GRAPHS"}></CustomerCard></Button>
           
            </Grid>
        </Grid>
    </>);
}