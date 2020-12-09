import { ReactComponent } from '*.svg';
import React, {Component} from 'react';

interface HelloName {
  name: String;
}

 function HelloWorld(props:HelloName) {
   return(
     <h1>Hello {props.name}</h1>
   )

 }


export default HelloWorld;