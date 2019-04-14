import React from 'react';
import { NavLink } from 'react-router-dom';

export default function Nav() {
	return (
		<nav className='nav'>
			<li>
				<NavLink to='/' exact activeClassName='active'>
					Home
				</NavLink>
				<NavLink to='/login' exact activeClassName='active'>
					Login
				</NavLink>
			</li>
		</nav>
	);
}
