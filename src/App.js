import React from 'react';
import {Routes} from './Routes';
import {Switch, BrowserRouter as Router} from 'react-router-dom';
import FormContextProvider from './context/formContext';
 
import {NavBar} from './components/NavBar'; 
export const App = () => {
  return (  
      <Router>
        <FormContextProvider>
          <NavBar />
          <div className="fixed container"> 
              <Switch>
                <Routes />
              </Switch>
          </div> 
        </FormContextProvider>
      </Router> 
  )
}
 