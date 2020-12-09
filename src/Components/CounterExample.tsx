import React, {useState} from 'react';
import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import Add from '@material-ui/icons/Add'
import {makeStyles} from '@material-ui/core/styles'

//some custom styling...
const useStyles = makeStyles({
  root: {
      color: 'black',
      border: 0,
      borderRadius: 5,
      background: 'linear-gradient(45deg, blue, #fff)',
      padding: '5px 25px'
  }
})
//custom button
function StyledButton(){
  const classes = useStyles();
  return <Button className={classes.root}>Ooof</Button>
}


//main fun
 function CounterExample() {
   const [count,setCount] = useState(0);
   return(
    <div>
      <StyledButton/>
      <h1>{count}</h1>
      <ButtonGroup size="medium" variant= "contained">
        <Button
        color="secondary"
        // startIcon={<Add/>}
        onClick={()=>setCount(count+1)}>
          PLus
        </Button>
        <Button
        color="primary"
        onClick={()=>setCount(count-1)}>
          Minus
        </Button>
      </ButtonGroup>
    </div>
   )

 }


export default CounterExample;