import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import DraftsIcon from '@material-ui/icons/Drafts';
import SendIcon from '@material-ui/icons/Send';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Divider from '@material-ui/core/Divider';
import MailIcon from '@material-ui/icons/Mail';
import { withRouter } from 'react-router';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import CardMedia from '@material-ui/core/CardMedia';
import Login from "./components/Login";

import Calendar from "./components/Calendar";
import Header from "./components/Header";


//import { createStackNavigator, createAppContainer } from 'react-navigation';



class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      isLoginOpen: true,
      isRegisterOpen: false

    };
  }

  
  showLoginBox() {
    this.setState({isLoginOpen: true, isRegisterOpen: false});
  }

  showRegisterBox() {
    this.setState({isRegisterOpen: true, isLoginOpen: false});
  }

   render(){
     return (


     

      <div className="root-container">


        
        
      {this.state.isLoginOpen && <LoginBox/>}
      {this.state.isRegisterOpen && <RegisterBox/>}


            <div
         className={"controller " + (this.state.isLoginOpen
         ? "selected-controller"
         : "")}
         onClick={this
         .showLoginBox
         .bind(this)}>
         
       </div>
       <div
         className={"controller " + (this.state.isRegisterOpen
         ? "selected-controller"
         : "")}
         onClick={this
         .showRegisterBox
         .bind(this)}>
         
       </div>
      </div>
        
        
     );
   }
}


//Login Box
class LoginBox extends React.Component {

  constructor(props) {
    super(props);
    this.state = {};
  }

  submitLogin(e) {}


  hello(){
    this.state = { 
      isLoginOpen: false 
     }; 
  }

  render() {
    return (
      <div>
          <Button onClick={App.showLoginBox}></Button>
      <Button onClick={App.hello}></Button>
      
      </div>
      
    );
  }

}

//Register Box 
class RegisterBox extends React.Component {

  constructor(props) {
    super(props);
    this.state = {};
  }

  submitRegister(e) {}

  render() {
    return (
      <div className="inner-container">
        <div className="header">
          Register
        </div>
        <div className="box">

          <div className="input-group">
            <label htmlFor="username">Username</label>
            <input
              type="text"
              name="username"
              className="login-input"
              placeholder="Username"/>
          </div>

          <div className="input-group">
            <label htmlFor="email">Email</label>
            <input type="text" name="email" className="login-input" placeholder="Email"/>
          </div>

          <div className="input-group">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              name="password"
              className="login-input"
              placeholder="Password"/>
          </div>
          <button
            type="button"
            className="login-btn"
            onClick={this
            .submitRegister
            .bind(this)}>Register</button>
        </div>
      </div>
    );
  }
}

export default App;