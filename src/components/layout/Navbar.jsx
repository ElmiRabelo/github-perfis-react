import React, { Component } from "react";

//é como um checador de tipos, informando que tipo de dado sua prop deve possuir
import PropTypes from "prop-types";

class Navbar extends Component {
	static defaultProps = {
		titulo: "Perfil no Github",
		icon: "fab fa-github"
	};

	static propTypes = {
		titulo: PropTypes.string.isRequired,
		icon: PropTypes.string.isRequired
	};

	render() {
		const { titulo, icon } = this.props;
		return (
			<nav className="navbar bg-primary">
				<h1>
					<i className={icon}></i> {titulo}
				</h1>
			</nav>
		);
	}
}

export default Navbar;
