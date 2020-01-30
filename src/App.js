import React from 'react';
import './App.css';
import Home from './pages/Home';
import Detail from './pages/Detail';
import Error from './pages/Error';
import {Route, Switch} from 'react-router-dom'; 


function App() {
  return (
    <>
    <Switch>
        <Route exact path="/"> <Home/> </Route>
        <Route path="/:id" children={<Detail></Detail>}/>
        <Route component={Error}/> 
    </Switch> 
    </>
  );
}

export default App;
