import React from 'react';
import {Routes} from './Routes';
import {Switch, BrowserRouter as Router} from 'react-router-dom';
import FormContextProvider from './context/formContext';
import PayContextProvider from './context/payContext';
 
import {NavBar} from './components/NavBar'; 
export const App = () => {
  return (  
      <Router>
        <FormContextProvider>
          <PayContextProvider>
            <NavBar/>
            <div className="container"> 
                <Switch>
                  <Routes />
                </Switch>
            </div> 
          </PayContextProvider>
        </FormContextProvider>
      </Router> 
  )
}
 