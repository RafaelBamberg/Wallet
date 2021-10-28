import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

class Header extends Component {
  render() {
    const { email, expenses } = this.props;
    // logica de adicao de valores retirada do repositorio do DiegoDemontier
    // https://github.com/tryber/sd-013-b-project-trybewallet/blob/diego-demontier-trybe-wallet/src/components/Header.js
    // https://www.youtube.com/watch?v=sN9QvQAkyug
    let total = 0;
    if (expenses.length !== 0) {
      expenses.forEach((element) => {
        total += Number(element.value * element.exchangeRates[element.currency].ask);
      });
    }
    return (
      <div>
        <header>
          <p data-testid="email-field">{ email }</p>
          <p data-testid="total-field">{total.toFixed(2)}</p>
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