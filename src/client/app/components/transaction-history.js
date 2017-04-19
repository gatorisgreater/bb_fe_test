import React from 'react';
import {connect} from 'react-redux';

import * as actions from '../actions/actions';

import Transaction from './transaction';

class TransactionHistory extends React.Component {
    constructor(props) {
      super(props);
      }
    
    render() {

      /* iterates over transactions.json file to individually render each transaction */
      const transactionHistory = this.props.transactionHistory.map((transaction, index) => {
        return <li key={index}>
                       <Transaction categoryCode={transaction.categoryCode} transactionDate={transaction.transactionDate} merchantLogo={transaction.merchantLogo} merchant={transaction.merchant} transactionType={transaction.transactionType} amount={transaction.amount} />
        </li>
      });

      return (
        <div className="transaction-history-container">
        
          <header className="transaction-history-header">
            <img className="transaction-history-image" src="../../assets/icons/briefcase.png" alt="Transaction History Icon" />
              <span className="transaction-history-title">Recent Transactions</span>
          </header>
          
          <ul className="transaction-history-list">
             {transactionHistory}
          </ul>
        
        </div>
      );
    }
}

const mapStateToProps = (state, props) => {
  return {
    transactionHistory: state.transactionHistory
  }
}

export default connect (mapStateToProps)(TransactionHistory);

