import React, {useState} from 'react';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import { checkServerIdentity } from 'tls';


export default function TextStuff() {
   return(
     <div>
       <TextField
       variant="filled"
       color="secondary"
       type="standard"
       label="Intresting!"
       placeholder="Type stuff"
       />
     </div>
   )

 }


