import { Component } from 'react';

import { connect } from 'react-redux';

import { LOGIN } from '../actions/authActions';

import AuthService from '../Services/AuthService';

class Login extends Component {
	state = {
		email: '',
		password: '',
		error: ''
	}

	handleChange = (e) => {
		const { name, value} = e.target;

		this.setState({ [name]: value });
	}

	handleSubmit = (e) => {
		e.preventDefault();

		const { email, password } = this.state;

		AuthService.login(email, password)
			.then(user => {
				this.props.login(user);
				this.props.history.replace('/');
			})
			.catch(() => {
				this.setState({error: 'Usuario y/o contraseña incorrecta'});
			});
	}

	render() {
		const { email, password, error} = this.state;

		return (
			<div className="container">
				<h2 className="m-2 has-text-centered">Login</h2>
				<form className="m-4" onSubmit={this.handleSubmit}>
					<div className="field">
						<input
							value={email}
							className="input"
							type="email"
							name="email"
							onChange={this.handleChange}
							required
							placeholder="Ingresa tu email"/>
					</div>
					<div className="field">
						<input
							className="input"
							value={password}
							type="password"
							name="password"
							onChange={this.handleChange}
							required
							placeholder="Ingresa tu contraseña" />
					</div>
					<p className="help is-danger">{error}</p>
					<div className="field">
						<button className="button is-info" type="submit">Ingresar</button>
					</div>
				</form>
			</div>
		)
	}
}

const mapDispatchToProps = (dispatch) => {
	return {
		login:  (user) => {
            localStorage.setItem('user',JSON.stringify(user));
			dispatch({
				type: LOGIN,
				payload: user
			});
		}
	}
}

export default connect(null, mapDispatchToProps)(Login);