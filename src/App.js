import React from 'react';
import {Switch, Route} from "react-router-dom";
import Navbar from './navbar';
import home from './page/home.js';
import tim from './tim/tim-profile';
import tong from './tong/tong-profile';
import pp from './pp/pp-profile'
import {Predev1 , Predev2 , Predev3 ,Predev4} from './page/predev'
import error404 from './page/error404'


function App() {
  return (
    <div className="my-app">
        <Navbar/>
      <Switch>
        <Route exact path='/' component={home}/>
        <Route path='/tim' component={tim}/>
        <Route path='/tong' component={tong}/>
        <Route path='/pp' component={pp}/>
        <Route exact path='/pd1' component={Predev1}/>
        <Route exact path='/pd2' component={Predev2}/>
        <Route exact path='/pd3' component={Predev3}/>
        <Route exact path='/pd4' component={Predev4}/>
        <Route component={error404} />
      </Switch>
      </div>
  );
}

export default App;
