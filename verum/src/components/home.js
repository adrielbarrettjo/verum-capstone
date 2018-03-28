import React, { Component } from 'react';

import {
    BrowserRouter as Router,
    Route,
    Redirect,
    Switch,
    Link
} from 'react-router-dom';

import { Card, Layout, Menu, Breadcrumb, Button } from 'antd';
const { Header, Content, Footer } = Layout;


export default class Home extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      showSelection: false
    };
  } //end of constructor

  componentDidMount() {
    console.log('this is this.props:')
    console.log(this.props);
  }

  componentWillMount() {
    let currentJWT = localStorage.getItem('jwt');
    let currentUser = localStorage.getItem('userName');
    
    if (currentJWT) {
      console.log(currentJWT)
      //fetchUserData
      fetch("http://localhost:3001/api/surveys", {
          method: 'GET',
          headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            userName: currentUser,  
          }),

        }) // end fetch
            .then(res => res.json())
            .then(({something}) => something())
            .catch(err => {
                console.log(err);
              }) // end catch


    } else {
      // programmatically route to landing page
      this.props.history.push('/')
    }
  }




  componentDidMount() {
    console.log(this.props);
  }

  handleSubmit = (e) => {
    e.preventDefault();
    console.log('new project button was clicked');
    this.setState({showSelection: true})
    
  }

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
	                    	 <Link to="/login" > Log Out </Link> 
	                    </Menu.Item>

	                  </Menu>
                </Header>

                <Content style={{ padding: '30px 50px', marginTop: 64, background: 'white'}}>
                
                  <Button 
                    size='large'
                    style={{background: '#abc', width: '250px'}}
                    onClick = {this.handleSubmit} 
                    >      <Link to="/newproject" > + New Project </Link> </Button>

                 
                </Content>

                <Footer style={{ textAlign: 'center' }}>
                  Verum Data © 2018
                </Footer>
      	</Layout>
      </div>
    ); // ends return 

} // ends render 
} // end class