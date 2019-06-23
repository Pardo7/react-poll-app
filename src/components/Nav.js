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
          <NavLink to="/add" exact activeClassName="active">
            New Question
          </NavLink>
        </li>
        <li>
          <NavLink to="/leaderboard" exact activeClassName="active">
            Leader Board
          </NavLink>
        </li>
        {props.user && (
          <Fragment>
            <li>Welcome {props.user.name}</li>
            <li>
              <a href="/login" onClick={props.onLogOut}>
                Logout
              </a>
            </li>
          </Fragment>
        )}
      </ul>
    </nav>
  );
}
