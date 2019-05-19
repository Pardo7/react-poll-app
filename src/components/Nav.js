import React, { Fragment } from "react";
import { NavLink } from "react-router-dom";

export default function Nav(props) {
	return (
		<nav className="nav">
			<ul>
				<li>
					<NavLink to="/" exact activeClassName="active">
						Home
					</NavLink>
				</li>
				<li>
					<NavLink to="/login" exact activeClassName="active">
						Login
					</NavLink>
				</li>
				{props.user && (
					<Fragment>
						<li>
							Welcome {props.user.name}
						</li>
						<li>
							<a href="#" onClick={props.onLogOut}>
									Logout
							</a>
						</li>
					</Fragment>
				)}
			</ul>
		</nav>
	);
}
