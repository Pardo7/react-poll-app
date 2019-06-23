import React, { Fragment } from "react";
import { setAuthedUser } from "../actions/authedUser";

function SelectUserProfile(props) {
  const { users, dispatch } = props;

  return (
    <Fragment>
      <h3>Sign In</h3>
      <select readOnly className="profile-selection" value={'profile'} onChange={e => dispatch(setAuthedUser(e.target.value))}>
        <option value="profile" disabled>Profile Select...</option>
        {Object.values(users).map(user => <option key={user.id} value={user.id}>{user.name}</option>)}
      </select>
    </Fragment>
  );
}

export default SelectUserProfile;
