import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { storeUsers } from '../actions/index';
import '../App.css'
import wallet from './wallet.png'

class Login extends Component {
  constructor() {
    super();

    this.state = {
      email: '',
      password: '',
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  handleChange({ target }) {
    const { name } = target;
    this.setState({
      [name]: target.value,
    });
  }

  handleClick(event) {
    event.preventDefault();
    const { history, dispatchSetValue } = this.props;
    const { email } = this.state;
    dispatchSetValue(email);
    history.push('/carteira');
  }

  render() {
    const { email, password } = this.state;
    const PASSWORD_LENGTH = 6;
    let valid = true;
    if (email.includes('@' && '.com') && password.length >= PASSWORD_LENGTH) {
      valid = false;
    } else {
      valid = true;
    }

    return (
      <div className='login'>
        <img src={ wallet } alt="logo" className='logo'/>
        <form>
          <p className='text'>Login</p>
          <input
            className='login-input'
            type="email"
            name="email"
            data-testid="email-input"
            value={ email }
            onChange={ this.handleChange }
          />
          <p className='text'>Senha</p>
          <input
            type="password"
            name="password"
            data-testid="password-input"
            value={ password }
            onChange={ this.handleChange }
          />
        </form>
      <div className='button-move'>
        <button
            className='login-button'
            onClick={ this.handleClick }
            disabled={ valid }
            type="submit"
          >
            Entrar
          </button>
      </div>
      </div>
    );
  }
}

Login.propTypes = {
  dispatchSetValue: PropTypes.func.isRequired,
  history: PropTypes.shape({
    push: PropTypes.func.isRequired,
  }).isRequired,
};

const mapDispatchToProps = (dispatch) => ({
  dispatchSetValue: (value) => dispatch(storeUsers(value)),
});

export default connect(null, mapDispatchToProps)(Login);
