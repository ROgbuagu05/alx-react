import './Login.css';
import React, {Fragment} from 'react';

function Login() {
  return (
    <Fragment className="App-login">
      <p>
        Login to access the full dashboard
      </p>
      <label htmlFor='email'>Email: </label>
      <input type="email" placeholder="Email" id="email" name="email"/>
      <label htmlFor='password'>Password: </label>
      <input type="password" placeholder="password" id="password" name="password"/>
    <button> Ok </button>
    </Fragment>
  );
}
export default Login;
