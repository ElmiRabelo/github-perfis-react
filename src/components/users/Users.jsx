import React from "react";
import PropTypes from "prop-types";

import Spinner from "../layout/Spinner";
import UserItem from "./Useritem";

const Users = ({ users, carregando }) => {
	if (!carregando) {
		return (
			<div style={userStyles}>
				{users.map(user => (
					<UserItem key={user.id} user={user} />
				))}
			</div>
		);
	} else {
		return <Spinner />;
	}
};

const userStyles = {
	display: "grid",
	gridTemplateColumns: "repeat(3, 1fr)",
	gridGap: "1rem"
};

Users.propTypes = {
	users: PropTypes.array.isRequired,
	carregando: PropTypes.bool.isRequired
};

export default Users;
