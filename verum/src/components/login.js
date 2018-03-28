import { Card } from 'antd';
import React, { Component } from 'react';
import RegistrationForm from './registration-form';
import LoginForm from './login-form';
import Head from './header';

const tabList = [{
  key: 'Login',
  tab: 'Login',
}, {
  key: 'Register',
  tab: 'Register',
}];

const contentList = {
  Login: <LoginForm/>,
  Register: <RegistrationForm/>,
};




export default class Login extends React.Component{

	state = {
	    Key: 'Login',

	}
	onTabChange = (key, type) => {
	    console.log(key, type);
	    this.setState({ [type]: key });
	}

	render() {
    return (
      <div>
      <Head/>
      <p>test</p>
      <Card
          style={{ width: '100%' }}
          tabList={tabList}
          activeTabKey={this.state.Key}
          onTabChange={(key) => { this.onTabChange(key, 'Key'); }}
        >
          {contentList[this.state.Key]}
        </Card>



      </div>
      )
	} // ends render 
} // end class