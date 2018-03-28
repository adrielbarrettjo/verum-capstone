import React, { Component } from 'react';
import {createStore} from 'redux';
import {Provider} from 'react-redux';
import { Form, Input, Tooltip, Icon, Cascader, Select, Row, Col, Checkbox, 
  Button, AutoComplete  } from 'antd';
import ReactDOM from 'react-dom';
import {
    BrowserRouter as Router,
    Route,
    Redirect,
    Switch,
    Link
} from 'react-router-dom';


const FormItem = Form.Item;

// If existing JWT, automatically login
// else show login
// and a toggle to flip to the registration card.



class LoginForm extends React.Component{
  constructor(props) {
  super(props);
  // this.state = {
  //   color: props.initialColor
  // };
} //end of constructor

  componentDidMount() {
    console.log('this is this.props:')
    console.log(this.props);
  }

storeAuthInfo = (authToken, userName) => {
    // set the jwt as part of the state of the app
    localStorage.setItem('jwt', authToken);
    localStorage.setItem('userName', userName);
    //localStorage.set() -> use this to store things in the browser.
    // then do localStorage.get()

    // then it will be passed to child components as props.
};  

loginGetJWT = (e) => {
  let that = this;

  e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        console.log('Received values of form: ', values);

        fetch("http://localhost:3001/login", {
          method: 'POST',
          headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            username: values.userName,
            password: values.password
            
          }),

        }) // end fetch

       // .then(res => normalizeResponseErrors(res))
            .then(res => res.json())
            .then(({authToken}) => this.storeAuthInfo(authToken, values.userName))
            .then( () => { window.location.href= '/home'})
            .catch(err => {
                console.log(err);
              }) // end catch
      } // end if 
    }) // end validateFields 
    }; // end getJWT



  render() {
    const { getFieldDecorator, getFieldsError, getFieldError, isFieldTouched } = this.props.form;
    return (
      <div>
   
      <Form layout="inline" onSubmit={this.handleSubmit}
      style= {{marginTop: '80px'}}>
      
            <Row type={'flex'} align={'center'}>
        <Col >
            <FormItem>
              {getFieldDecorator('userName', {
                rules: [{ required: true, message: 'Please input your username!' }],
              })(
                <Input prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="Username" />
              )}
            </FormItem>
             </Col>
            </Row>
            <Row type={'flex'} align={'center'}>
        <Col > 
            <FormItem>
              {getFieldDecorator('password', {
                rules: [{ required: true, message: 'Please input a valid password (min 8 char)!' }],
              })(
                <Input prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="Password" />
              )}
            </FormItem>
            </Col>
            </Row>
            

<Row type={'flex'} align={'center'}>
        <Col >
           <Button onClick = {this.loginGetJWT} > Submit </Button>
            </Col>
            </Row>
       </Form>
       </div>
      )     
} // ends render 

} // end class

const WrappedLoginForm = Form.create()(LoginForm);

export default WrappedLoginForm;