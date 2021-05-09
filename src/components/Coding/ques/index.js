import React from "react";
import {Container,Grid,Button,MuiThemeProvider,Card,CardActionArea, CardContent,Paper} from "@material-ui/core";
import {} from "@material-ui/icons";


export default function(props)
{
    return (<>
    <Container align="center" style={{marginTop:"5%"}}>
    <Paper elevation={3} style={{padding:"4%"}}>
      Ques No. 1
    </Paper>
    <Card>
        <CardContent>
        Given an array arr[] and size of array is n and one another key x, and give you a segment size k. The task is to find that the key x present in every segment of size k in arr[].
        </CardContent>
    </Card>
    <Card>
        <CardContent>
        <div>Test case 1</div>
        <div> Input : arr[] = [ 3, 5, 2, 4, 9, 3, 1, 7, 3, 11, 12, 3]</div>
       
        <div> x = 3 </div>
       <div>k = 3 </div>
        <div>Output : Yes </div>
        </CardContent>
    </Card>
    <Card>
        <CardContent>
        <div>Test case 2</div>
        <div> Input : arr[] = [ 3, 5, 2, 4, 9, 3, 1, 7, 3, 11, 12, 3]</div>
       
        <div> x = 3 </div>
       <div>k = 3 </div>
        <div>Output : Yes </div>
        </CardContent>
    </Card>
    </Container>
    
    </>);
}