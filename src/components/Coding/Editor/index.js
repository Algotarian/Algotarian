import React,{useState} from "react";
import {Container,Grid,Select,InputLabel,MenuItem,Typography} from "@material-ui/core";
import {} from "@material-ui/icons";
import Editor from "@monaco-editor/react";
import LoadingOverlay from 'react-loading-overlay';
import {HashLoader} from "react-spinners";
export default function(props)
{
    var [theme,setTheme]=useState(("vs-dark"));
    var [language,setLanguage] = useState("javascript")
    return (<>
    <Container align="center">
    <Grid container justify="space-between">
        <Grid Item >
        <InputLabel id="label">Theme</InputLabel>
<Select labelId="label" id="select" value={theme} onChange={(e)=>{
    setTheme(e.target.value);
}}>
  <MenuItem value="vs-dark">vs-dark</MenuItem>
  <MenuItem value="vs">vs-light</MenuItem>
</Select>
        </Grid>
        <Grid Item >
        <InputLabel id="label1">Language</InputLabel>
<Select labelId="label1" id="select1" value={language} onChange={(e)=>{
    setLanguage(e.target.value);
 
}}>
  <MenuItem value="c">C</MenuItem>
  <MenuItem value="c++">C++</MenuItem>
  <MenuItem value="javascript">Javascript</MenuItem>
  <MenuItem value="python">Python</MenuItem>
  <MenuItem value="java">Java</MenuItem>
 
</Select>
        </Grid>
    </Grid>
    <Typography style = {{marginBottom:"2%",fontSize:"20px",fontWeight:"bolder",color:"#C0C0C0"}} align="center">
        Write your code here
    </Typography>
    <LoadingOverlay
      active={props.active}
      
      spinner={<HashLoader color={"#2196f3"}/>}
    >
       
    <div> <Editor
     height="390px"
     width="900px"
     language={language}
     theme={theme}
     defaultValue={`// your code
     var i = 0;
     console.log(i);
     `}
   /></div>
          </LoadingOverlay>
    
    </Container>
    
    </>);
}