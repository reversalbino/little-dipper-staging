import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { Redirect } from 'react-router-dom';
import { signUp } from '../../store/session';

import * as sessionActions from '../../store/session';
import background from '../../static/homepage-night-sky.jpg';

const SignUpForm = () => {
  const [errors, setErrors] = useState([]);
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [repeatPassword, setRepeatPassword] = useState('');
  const user = useSelector(state => state.session.user);
  const dispatch = useDispatch();

  const onSignUp = async (e) => {
    e.preventDefault();

    if(!(String(email)
    .toLowerCase()
    .match(
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    ))) {
      let temp = ['Please enter a valid email'];
      setErrors(temp);
      return;
    };

    if (password === repeatPassword) {
      const data = await dispatch(signUp(username, email, password));
      if (data) {
        setErrors(data)
      }
    }
    else {
      let temp = ['Passwords don\'t match'];
      setErrors(temp);
    }
  };

  const updateUsername = (e) => {
    setUsername(e.target.value);
  };

  const updateEmail = (e) => {
    setEmail(e.target.value);
  };

  const updatePassword = (e) => {
    setPassword(e.target.value);
  };

  const updateRepeatPassword = (e) => {
    setRepeatPassword(e.target.value);
  };

  if (user) {
    return <Redirect to='/' />;
  }

  function demoLogin() {
    dispatch(sessionActions.demoLogin());
  }

  return (
    <div id='homepage'>
      <img id='background' src={background} alt='background' />
      <div id='homepage-message'>
        <h1>Share your view with the world</h1>
      </div>
      <form onSubmit={onSignUp} id='signup-form'>
      <div>
        {errors.map((error, ind) => (
          <div key={ind}>{error}</div>
        ))}
      </div>
      <div>
        {/* <label>User Name</label> */}
        <input
          type='text'
          name='username'
          onChange={updateUsername}
          value={username}
          placeholder='Username'
        ></input>
      </div>
      <div>
        {/* <label>Email</label> */}
        <input
          type='text'
          name='email'
          onChange={updateEmail}
          value={email}
          placeholder='Email'
        ></input>
      </div>
      <div>
        {/* <label>Password</label> */}
        <input
          type='password'
          name='password'
          onChange={updatePassword}
          value={password}
          placeholder='Password'
        ></input>
      </div>
      <div>
        {/* <label>Repeat Password</label> */}
        <input
          type='password'
          name='repeat_password'
          onChange={updateRepeatPassword}
          value={repeatPassword}
          placeholder='Confirm Password'
        ></input>
      </div>
      <button type='submit' id='signup-button-homepage'>Sign Up</button>
      <button type='button' id='demo-login-button' onClick={demoLogin}>Demo</button>
    </form>
    </div>
  );
};

export default SignUpForm;
