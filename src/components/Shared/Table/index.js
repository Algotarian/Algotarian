import React from "react";

import {Button} from "@material-ui/core";
import {} from "@material-ui/icons";

import { DataGrid } from '@material-ui/data-grid';


export default function(props){

    return (<>
    <DataGrid rows={props.rows} columns={props.columns}   />
    </>)
}