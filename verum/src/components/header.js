import React, { Component } from 'react';
import {
    BrowserRouter as Router,
    Route,
    Redirect,
    Switch,
    Link
} from 'react-router-dom';

import { Layout, Menu, Breadcrumb } from 'antd';
const { Header, Content, Footer } = Layout;


export default class Head extends React.Component{

	render() {

    return (
      <div className="Head">
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


      	</Layout>
      </div>
    ); // ends return 

} // ends render 
} // end class