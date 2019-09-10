import React from "react";

//é como um checador de tipos, informando que tipo de dado sua prop deve possuir
import PropTypes from "prop-types";

const Navbar = ({ titulo, icon }) => {
	return (
		<nav className="navbar bg-primary">
			<h1>
				<i className={icon}></i> {titulo}
			</h1>
		</nav>
	);
};

Navbar.defaultProps = {
	titulo: "Perfil no Github",
	icon: "fab fa-github"
};

Navbar.propTypes = {
	titulo: PropTypes.string.isRequired,
	icon: PropTypes.string.isRequired
};

export default Navbar;
