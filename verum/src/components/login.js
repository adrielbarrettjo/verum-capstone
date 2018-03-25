import { Card } from 'antd';
// import './App.css';

import React, { Component } from 'react';

import {createStore} from 'redux';
import {Provider} from 'react-redux';
//import LoginForm from './login-form';
import RegistrationForm from './registration-form';

export default class Login extends React.Component{


	render() {
    return (
      <div>
      <Card>
        <RegistrationForm />
        </Card>
      </div>
      )
} // ends render 
} // end class