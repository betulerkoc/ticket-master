import React from 'react';
import Home from './pages/Home';
import Header from './components/Header/index'
import Detail from './pages/Detail';
import {Route, Switch} from 'react-router-dom'; 
import {StyledMovie} from './style'


function App() {
  return (
    <StyledMovie>
      <Header/>
      <Switch>
          <Route exact path="/"> <Home/> </Route>
          <Route path="/:id" children={<Detail></Detail>}/>
      </Switch> 
    </StyledMovie>
  );
}

export default App;
