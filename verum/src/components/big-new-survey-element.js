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



export default class BigNewSurveyElement extends React.Component{
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

  addCheckBox = (e) => {
 	e.preventDefault();
//  	let that = this;
//  	fetch('/api/survey/:id/checkbox', {
//   method: 'POST',
//   headers: {
//     Accept: 'application/json',
//     'Content-Type': 'application/json',
//   },
//   body: JSON.stringify({
//     firstParam: 'yourValue',
//     secondParam: 'yourOtherValue',
//   }),

// }).then((response) => response.json())
//     .then((responseJson) => {
//       that.setState({something});
//     })
//     .catch((error) => {
//       console.error(error);
//     });

  } // end of addCheckBox

  addShortAnswer = (e) => {
 	e.preventDefault();
  }

  addMultipleChoice = (e) => {
  	e.preventDefault();
  }


	render() {

    return (
      <div className="BigNewSurveyElement">
      	<Card> 
      	<Button> New Survey Element </Button>
      	<Button  onClick = {this.addCheckBox} > + CheckBox Question </Button>
      	<Button  onClick = {this.addShortAnswer} > + Short Answer </Button>
      	<Button  onClick = {this.addMultipleChoice} > + Multiple Choice </Button>
      	</Card>
      </div>
    ); // ends return 

} // ends render 
} // end class