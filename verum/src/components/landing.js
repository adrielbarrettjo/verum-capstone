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


export default class Landing extends React.Component{

	render() {

    return (
      <div className="App">
            <Layout>
                <Header style={{ position: 'fixed', width: '100%' }}>
	                  
	                  <Menu
	                    theme="dark"
	                    mode="horizontal"
	                    defaultSelectedKeys={['2']}
	                    style={{ lineHeight: '64px' , itemSelected: '#C25900'}}
	                  >
	                    <Menu.Item> Verum Data </Menu.Item>
	                     <Menu.Item key="1"> About </Menu.Item>
	                    <Menu.Item key="2" style={{textAlign: 'right'}}> 
	                    	 <Link to="/login" > Log In or Register </Link> 
	                    </Menu.Item>

	                  </Menu>
                </Header>

                <Content style={{ padding: '0 50px', marginTop: 64 }}>
                  <div style={{ background: '#C25900', padding: 24, minHeight: 380}}>
                  	<h1 style={{ color: 'white' }}>Connecting Data to Decisions</h1>
                  	<h4 style={{ color: 'white' }}> simple digital data collection for development</h4>
                  </div> 
                </Content>

                <Footer style={{ textAlign: 'center' }}>
                  Verum Data © 2018
                </Footer>
      	</Layout>
      </div>
    ); // ends return 

} // ends render 
} // end class