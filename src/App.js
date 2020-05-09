import React from 'react';
import './css/App.css';
import { BrowserRouter, Switch, Route, Link, NavLink, HashRouter} from "react-router-dom";
import Navbar from './navbar';
import tim from './tim/tim-profile';
import tong from './tong/tong-profile';
import pp from './pp/pp-profile'
import home from './page/home.js';
import p1 from './page/predev1'
import p2 from './page/predev2'
import p3 from './page/predev3'
import p4 from './page/predev4'
import error404 from './page/error404'


function App() {
  return (
    <BrowserRouter>

    <div className="my-app">
        <Navbar/>
 

      <Switch>
        <Route exact path='/' component={home}/>
        <Route exact path='/tim' component={tim}/>
        <Route exact path='/tong' component={tong}/>
        <Route exact path='/pp' component={pp}/>
        <Route exact paht='/predev1' component={p1}/>
        <Route exact paht='/predev2' component={p2}/>
        <Route exact paht='/predev3' component={p3}/>
        <Route exact paht='/predev4' component={p4}/>
        <Route component={error404} />
      </Switch>
      
      </div>
        
    </BrowserRouter>
  );
}

export default App;
