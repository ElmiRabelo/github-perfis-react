import React, { Component } from "react";

import axios from "axios";

//components
import Navbar from "./components/layout/Navbar";
import Users from "./components/users/Users";

import "./App.css";

class App extends Component {
	constructor() {
		super();
		this.state = {
			users: [],
			carregando: false
		};
	}

	async componentDidMount() {
		this.setState({ carregando: true });

		const res = await axios.get("https://api.github.com/users");

		this.setState({ users: res.data, carregando: false });
	}

	render() {
		return (
			<div className="App">
				<Navbar titulo="Perfil no Github" icon="fab fa-github" />
				<div className="container">
					<Users carregando={this.state.carregando} users={this.state.users} />
				</div>
			</div>
		);
	}
}

export default App;
