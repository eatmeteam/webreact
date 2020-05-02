import React from 'react';
import './css/App.css';
import { BrowserRouter, Switch, Route, Link, NavLink} from "react-router-dom";
import Navbar from './navbar';
import tim from './tim/tim-profile';
import tong from './tong/tong-profile';
import pp from './pp/pp-profile'
import home from './page/home.js';
import error404 from './page/error404'

function App() {
  return (
    <BrowserRouter>

    <div class="my-app">
        <Navbar/>       
 

      <Switch>
        <Route exact path='/' component={home}/>
        <Route path='/tim' component={tim}/>
        <Route path='/tong' component={tong}/>
        <Route path='/pp' component={pp}/>
        <Route component={error404} />
      </Switch>
      
      </div>
        
    </BrowserRouter>
  );
}

export default App;
