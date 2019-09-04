import React, {useState} from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';

import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';

import LinkButton from "./LinkButton";

import Home from "./Home" ;
import Calendar from './Calendar';




import {
  BrowserRouter as Router,
  Route,
  Link,
  Redirect,
  withRouter
} from "react-router-dom";













const useStyles = makeStyles(theme => ({
  '@global': {
    body: {
      backgroundColor: theme.palette.common.white,
    },
  },
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));




export default function SignIn() {

  var show = false ;


  const [isAuthentificated, setIsAuthentificated] = useState(false);
  console.log("Status" + isAuthentificated);

const fakeAuth = {
  isAuthenticated: false,
  authenticate(cb) {
    this.isAuthenticated = true;
    setTimeout(cb, 100); // fake async
  },
  signout(cb) {
    this.isAuthenticated = false;
    setTimeout(cb, 100);
  }
};





function PrivateRoute({ component: Component, ...rest }) {
  return (
    <Route
      {...rest}
      render={props =>
        fakeAuth.isAuthenticated ? (
          <Component {...props} />
        ) : (
          <Redirect
            to={{
              pathname: "/login",
              state: { from: props.location }
            }}
          />
        )
      }
    />
  );
}


const AuthButton = withRouter(
  ({ history }) =>
    fakeAuth.isAuthenticated ? (
      <p>
        Welcome!{" "}
        <button
          onClick={() => {
            fakeAuth.signout(() => this.push("/"));
          }}
        >
          Sign out
        </button>
      </p>
    ) : (
      <p>Login</p>
    )
);



  const classes = useStyles();

  const [form, setValues] = useState({
    username: '',
    password: ''
  });


  


   




  const updateField = e => {
    setValues({
      ...form,
      [e.target.name]: e.target.value
    });
  };



  function login(){
    console.log("ALED");
    
  }

 
   function doGetTEXT()  {


    

    var url = "http://127.0.0.1:8081/authentification/";

    url += form.username + "/" + form.password;

    var aPromise = fetch(url);

    
   
    aPromise
      .then(function(response) {
          console.log("OK! Server returns a response object:");
          return response.text();
      })
      .then(function(data){
          console.log(data);

          if(data === "OK"){
            
            //setIsAuthentificated(true) ;

            alert("Correct");
            
            //alert("Correct" + isAuthentificated);
            

            
            
          }
          else if(data === "PWD"){
            alert("Bad password !");
           
             
            
          }
          else if(data === "EMAIL"){
            alert("Bad email !");
          }

          console.log(url);

      })
      .catch(function(error)  {
          console.log("Noooooo! Something error:");
          console.log(error);
      });
   
  }


  return (
    <Container component="main" maxWidth="xs">


            
            
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Student Dashboard
        </Typography>
        <form className={classes.form} noValidate>
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email Address"
            name="username"
            autoFocus
            value={form.username}
            onChange={updateField}
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            autoComplete="current-password"
            value={form.password}
            onChange={updateField}
          />
          
          <FormControlLabel
            control={<Checkbox value="remember" color="primary" />}
            label="Remember me"
          />
          

          <div>
          {/* <Link to="/home"> */}
                        <Button onClick={ () => {}
          }>Login
                       {/*  <AuthButton>
                        Login
                        </AuthButton> */}

                        </Button>
                        
                         
                      
                     
                      
           {/* </Link> */}

          {/*  <PrivateRoute path="/protected" component={Home} /> */}
          </div>
      
                    
                    
          

        </form>

        

        
      </div>
    </Container>
  );
}