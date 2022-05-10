import React, { Fragment, useState, useEffect } from "react";
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './components/store';
import Routes from './routes';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import { Switch, Paper } from '@material-ui/core/';
import { Container } from '@material-ui/core/';
import Header from './components/Header';

const App = () => {

  const [darkMode, setDarkMode] = useState(false);

  const theme = createMuiTheme({
      palette: {
      type: darkMode ? 'dark' : 'light',
      },
  })


  //cart code
  const localCart = JSON.parse(localStorage.getItem('dioshopping: cart'))
  
  if(localCart !== null) {
    store.dispatch({type: 'CHANGE_CART', localCart})
  }
  
  return(
    <ThemeProvider theme={theme}>
      <Paper>
        <Provider store={store}>
          <Container maxWidth="xl">
            <Router>
              <Switch checked={darkMode} onChange={() => setDarkMode(!darkMode)} />
              <Header />
              <Routes />
            </Router>
          </Container> 
        </Provider>
        </Paper>
    </ThemeProvider>
  )
}

export default App;
