import React from 'react';
import logo from './logo.svg';
import './App.css';

//Style imports
import {ThemeProvider, createMuiTheme} from '@material-ui/core/styles'
import {orange} from '@material-ui/core/colors'
import 'fontsource-roboto'
import Container from '@material-ui/core/Container'
import Paper from '@material-ui/core/Paper'
import Grid from '@material-ui/core/Grid'
import { Widgets } from '@material-ui/icons';

//Components
import HelloWorld from './Components/HelloWorld'
import CounterExample from './Components/CounterExample'
import Header from './Components/Header'
import Forms from './Components/Forms'
import TextStuff from './Components/TextStuff'
import Bar from './Components/Bar'

const theme = createMuiTheme({
  palette:{
    primary: {
      main: orange[500]
    }
  }
    
})

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Container maxWidth="xs">
        <div className="App">
          <Bar/>
          <HelloWorld name = "Again"/> 
          <Grid container spacing={2} justify="center">
            <Grid item xs={3} sm={6}>
              <Paper style={{height: 75, width:'100%',}}>
              </Paper>
            </Grid>
            <Grid item xs={3} sm={6}>
              <Paper style={{height: 75, width:'100%',}}>
              </Paper>
            </Grid>
            <Grid item xs={3} xl={12}>
              <Paper style={{height: 75, width:'100%',}}>
              </Paper>
            </Grid>
          </Grid>
          <CounterExample/> 
          <Forms/>
          <TextStuff/>     
        </div>
      </Container>
    </ThemeProvider>
  );
}

export default App;
