import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { NavLink, Redirect } from 'react-router-dom';

import SearchBar from '../SearchBar';
import LogoutButton from '../auth/LogoutButton';
import AddPost from '../AddPost/addPost';
import './Navbar.css';
import logo from '../../static/little-dipper-logo.jpeg';

const NavBar = () => {
	const sessionUser = useSelector(state => state.session.user);

	return (
		<nav>
			<ul>
				<li>
					<NavLink to='/' exact={true} activeClassName='active'>
						<img src={logo} alt='logo' id='logo' />
					</NavLink>
				</li>
			<SearchBar />
				{sessionUser ?
					<div id='add-picture-and-logout-buttons'>
						<p id='hello-user'>Hello, {sessionUser.username}</p>
						<li>
							<button id='new-picture-button'>
								<NavLink to='/pictures/new' >
									New Post
								</NavLink>
							</button>
						</li>
						<li>
							<LogoutButton id='logout-button' />
						</li>
					</div>
				:
					<div id='login-and-signup-buttons'>
						<li>
							<button id='login-button'>
								<NavLink to='/login' exact={true} activeClassName='active'>
									Login
								</NavLink>
							</button>
						</li>
						<li>
							<button id='signup-button'>
								<NavLink to='/sign-up' exact={true} activeClassName='active'>
									Sign Up
								</NavLink>
							</button>
						</li>
					</div>
				}


				{/* <li>
				<NavLink to='/users' exact={true} activeClassName='active'>
					Users
				</NavLink>
				</li> */}

			</ul>
		</nav>
	);
}

export default NavBar;
