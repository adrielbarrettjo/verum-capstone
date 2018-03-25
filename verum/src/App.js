import Landing from './components/landing';
import Login from './components/login';
import Home from './components/home';
import WrappedNewProject from './components/new-project';

import './App.css';
import './antd.css';
import React, { Component } from 'react';
import { Card } from 'antd';
import {createStore} from 'redux';
import {Provider} from 'react-redux';
import {
    BrowserRouter as Router,
    Route,
    Redirect,
    Switch,
    Link
} from 'react-router-dom';
import { Layout, Menu, Breadcrumb } from 'antd';
const { Header, Content, Footer } = Layout;



export default class App extends React.Component {
  render() {
  return (
    <Router>
           
                
        <Switch>
            
            <Route exact path="/" component={Landing} />
            <Route exact path="/login" component={Login} />
             <Route exact path="/home" component={Home} />
             <Route exact path="/newproject" component={WrappedNewProject} />
        </Switch>
                
          
        </Router>
        ) // end return 
  } // end of render 
};



