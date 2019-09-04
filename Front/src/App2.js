import React, { Component } from "react";
import {
  BrowserRouter as Router,
  Route,
  Link,
  Redirect,
  withRouter
} from "react-router-dom";

import Home from './components/Home';

import Header from './components/Header';
import Calendar from './components/Calendar';


////////////////////////////////////////////////////////////
// 1. Click the public page
// 2. Click the protected page
// 3. Log in
// 4. Click the back button, note the URL each time

function AuthExample() {

   

    function login() {
        return fakeAuth.authenticate(() => {
          this.setState({ redirectToReferrer: true });
        });
      };
  return (
    <Router>
      <div>
        <AuthButton />
        <ul>
          <li>
            <Link to="/home">Public Page</Link>
          </li>
          <li>
            <Link to="/protected">Protected Page</Link>
            <button onClick={AuthExample.login}>Log in</button>

            
          </li>
        </ul>
        <Route path="/home" component={Home} />
        <Route path="/login" component={Login} />
        <PrivateRoute path="/protected" component={Login} />
      </div>
    </Router>
  );
}

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

const AuthButton = withRouter(
  ({ history }) =>
    fakeAuth.isAuthenticated ? (
      <p>
        Welcome!{" "}
        <button
          onClick={() => {
            fakeAuth.signout(() => history.push("/"));
          }}
        >
          Sign out
        </button>
      </p>
    ) : (
      <p>You are not logged in.</p>
    )
);

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


function Protected() {
  return <h3>Protected</h3>;
}

class Login extends Component {
  state = { redirectToReferrer: false };

  login = () => {
    fakeAuth.authenticate(() => {
      this.setState({ redirectToReferrer: true });
    });
  };

  render() {
    let { from } = this.props.location.state || { from: { pathname: "/home" } };
    let { redirectToReferrer } = this.state;

    if (redirectToReferrer) return <Redirect to={from} />;

    return (
      <div>
        <p>You must log in to view the page at {from.pathname}</p>
        {/* <button onClick={this.login}>Log in</button> */}
      </div>
    );
  }
}

export default AuthExample;
