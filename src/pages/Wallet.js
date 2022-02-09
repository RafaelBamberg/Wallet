import React from 'react';
import Expenses from './Expenses';
import ExpensesTable from './ExpensesTable';
import Header from './Header';
import '../App.css'

export default class Wallet extends React.Component {
  constructor() {
    super();
    this.state = {
    };
  }

  render() {
    return (
      <div className='Wallet'>
        <Header />
        <Expenses />
        <ExpensesTable />
      </div>
    );
  }
}
