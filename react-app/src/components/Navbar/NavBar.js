import React from 'react';
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';

import LogoutButton from '../auth/LogoutButton';
import AddPost from '../AddPost/addPost';
import './Navbar.css';

const NavBar = () => {
	const sessionUser = useSelector(state => state.session.user);

	return (
		<nav>
		<ul>
			<li>
				<NavLink to='/' exact={true} activeClassName='active'>
					Home
				</NavLink>
			</li>
			{sessionUser ?
				<div id='add-picture-and-logout-buttons'>
					<li>
						<NavLink to='/pictures/new'>
							New Post
						</NavLink>
					</li>
					<li>
						<LogoutButton />
					</li>
				</div>
			:
				<div id='login-and-signup-buttons'>
					<li>
						<NavLink to='/login' exact={true} activeClassName='active'>
							Login
						</NavLink>
					</li>
					<li>
						<NavLink to='/sign-up' exact={true} activeClassName='active'>
							Sign Up
						</NavLink>
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
