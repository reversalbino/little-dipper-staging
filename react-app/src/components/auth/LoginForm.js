import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { login } from '../../store/session';

import * as sessionActions from '../../store/session';
import background from '../../static/homepage-night-sky.jpg';

const LoginPage = () => {
  const [errors, setErrors] = useState([]);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const user = useSelector(state => state.session.user);
  const dispatch = useDispatch();

  const onLogin = async (e) => {
    e.preventDefault();
    const data = await dispatch(login(email, password));
    if (data) {
      setErrors(data);
    }
  };

  const updateEmail = (e) => {
    setEmail(e.target.value);
  };

  const updatePassword = (e) => {
    setPassword(e.target.value);
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
      <form onSubmit={onLogin} id='login-form'>
        <div>
          {errors.map((error, ind) => (
            <div key={ind}>{error}</div>
          ))}
        </div>
        <div>
          {/* <label htmlFor='email'>Email</label> */}
          <input
            name='email'
            type='text'
            placeholder='Email'
            value={email}
            onChange={updateEmail}
          />
        </div>
        <div>
          {/* <label htmlFor='password'>Password</label> */}
          <input
            name='password'
            type='password'
            placeholder='Password'
            value={password}
            onChange={updatePassword}
          />
        </div>
        <button type='submit' id='login-button-homepage'>Login</button>
        <button type='button' id='demo-login-button' onClick={demoLogin}>Demo</button>
      </form>
    </div>
  );
};

export default LoginPage;
