import BigNewSurveyElement from './big-new-survey-element.js';

import React, { Component } from 'react';
import {createStore} from 'redux';
import {Provider} from 'react-redux';
import {
    BrowserRouter as Router,
    Route,
    Redirect,
    Switch,
    Link
} from 'react-router-dom';

import { Card, Layout, Menu, Breadcrumb, Form, Input, Tooltip, Icon, Cascader, Select, Row, Col, Checkbox, 
  Button, AutoComplete  } from 'antd';
const { Header, Content, Footer } = Layout;
const FormItem = Form.Item;





class NewProject extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      displayBigNewSurveyElement: false,
      displaySmallNewSurveyElement: true
    };
  } //end of constructor

  componentDidMount() {
    console.log(this.props);
  }

  handleSubmit = (e) => {
    e.preventDefault();
    console.log('form submit button was clicked');
    this.setState({showSelection: true})
    
  }

  addNewSurveyElement = (e) => {
   e.preventDefault();
  this.setState({displayBigNewSurveyElement: true})
  this.setState({displaySmallNewSurveyElement: false})
  }

	render() {
     const { getFieldDecorator, getFieldsError, getFieldError, isFieldTouched } = this.props.form;

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
                <Form 
                  layout="inline" 
                  onSubmit={this.handleSubmit}
                  stle = {{borderBottomStyle: 'dotted'}}>
                      <FormItem>
                      {getFieldDecorator('text', {
                        rules: [{ required: true, message: 'Please enter a name for this survey.' }],
                      })(
                        <Input prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="Enter the Survey Name" />
                      )}
                    </FormItem>
                    
               </Form>

               {this.state.displaySmallNewSurveyElement && <Button onClick={this.addNewSurveyElement}> + New Survey Element </Button>}
               {this.state.displayBigNewSurveyElement && <BigNewSurveyElement/>}

                    
                </Content>

                <Footer style={{ textAlign: 'center' }}>
                  Verum Data © 2018
                </Footer>
      	</Layout>
      </div>
    ); // ends return 

} // ends render 
} // end class

const WrappedNewProject = Form.create()(NewProject);

export default WrappedNewProject ;
