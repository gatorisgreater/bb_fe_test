import React from 'react';


function TransactionHistory() {
      return (
        <div className="transaction-history-container">
          <div className="transaction-history-header">
          <img src="../../assets/icons/briefcase.png" />
          <h2>Recent Transactions</h2>
          </div>
          <div className="transaction-history-list">
           <ul>
            <li>trans#1</li>
            <li>trans#2</li>
            <li>trans#3</li>
          </ul>
          </div>
        </div>
      );
}

export default TransactionHistory;

