import React, { Component } from 'react';
import {createStore} from 'redux';
import {Provider} from 'react-redux';
import { Form, Input, Tooltip, Icon, Cascader, Select, Row, Col, Checkbox, 
  Button, AutoComplete } from 'antd';
import ReactDOM from 'react-dom';

const FormItem = Form.Item;

class RegistrationForm extends React.Component{
  constructor(props) {
  super(props);
  // this.state = {
  //   color: props.initialColor
  // };
} //end of constructor

  componentDidMount() {
    console.log(this.props);
  }

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        console.log('Received values of form: ', values);


        fetch('3001/new-user', {
          method: 'POST',
          headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            username: values.username,
            password: values.password,
            firstName:  values.firstname,
            lastName: values.lastname,
            email: values.email
          }),

        }).then((response) => response.json())
            .then((responseJson) => {
              console.log(responseJson)
              // that.setState({something});
            })
            .catch((error) => {
              console.error(error);
            });
      }

   

    });

    
    // console.log(e);
    //console.log(this.props.form);
    // console.log(this.props.form.Object);
    // console.log(this.props.form.data);
  }

  render() {
    const { getFieldDecorator, getFieldsError, getFieldError, isFieldTouched } = this.props.form;
    return (

      <Form layout="inline" onSubmit={this.handleSubmit}>
              <FormItem>
              {getFieldDecorator('first-name', {
                rules: [{ required: true, message: 'Please give your name' }],
              })(
                <Input prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="First Name" />
              )}
            </FormItem>
            <FormItem>
              {getFieldDecorator('last-name', {
                rules: [{ required: true, message: 'Please give your name' }],
              })(
                <Input prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="Last Name" />
              )}
            </FormItem>
            <FormItem>
              {getFieldDecorator('userName', {
                rules: [{ required: true, message: 'Please input your username!' }],
              })(
                <Input prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="Username" />
              )}
            </FormItem>
            <FormItem>
              {getFieldDecorator('password', {
                rules: [{ required: true, message: 'Please input a valid password (min 8 char)!' }],
              })(
                <Input prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="Password" />
              )}
            </FormItem>
            <FormItem>
              {getFieldDecorator('email', {
                rules: [{ required: true, message: 'Please give a valid email address' }],
              })(
                <Input prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="Email" />
              )}
            </FormItem>


           <Button onClick = {this.handleSubmit} > Submit </Button>
       </Form>

      )     
} // ends render 

} // end class

const WrappedRegistrationForm = Form.create()(RegistrationForm);

export default WrappedRegistrationForm;

