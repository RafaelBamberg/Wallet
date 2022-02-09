import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import profile from './user-regular-24.png'
import '../App.css'
class Header extends Component {
  render() {
    const { email, expenses } = this.props;
    let total = 0;
    if (expenses.length !== 0) {
      expenses.forEach((element) => {
        total += Number(element.value * element.exchangeRates[element.currency].ask);
      });
    }
    return (
      <div>
        <header>
          <img className='profile-flex' src={ profile } alt="profile"/>
          <p data-testid="email-field">{ email }</p>
          <p data-testid="total-field">Valor total: {total.toFixed(2)}</p>
          <p data-testid="header-currency-field">BRL</p>
        </header>
      </div>
    );
  }
}

Header.propTypes = {
  email: PropTypes.string.isRequired,
  expenses: PropTypes.arrayOf(PropTypes.object),
};

Header.defaultProps = {
  expenses: [],
};

const mapStateToProps = (state) => ({
  email: state.user.email,
  expenses: state.wallet.expenses,
});
export default connect(mapStateToProps)(Header);
