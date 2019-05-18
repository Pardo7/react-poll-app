import React, { Fragment } from "react";
import { setAuthedUser } from "../actions/authedUser";

function SelectUserProfile(props) {
	const { authedUser, users, dispatch } = props;
	const displayUser = Object.values(users).filter(user => user.id === authedUser) || "";

	return (
		<Fragment>
			<h3>Sign In</h3>
			<select readOnly className="profile-selection" value={displayUser.name} onChange={e => dispatch(setAuthedUser(e.target.value))}>
				{Object.values(users).map(user => <option key={user.id} value={user.id}>{user.name}</option>)}
			</select>
		</Fragment>
	);
}

export default SelectUserProfile;
