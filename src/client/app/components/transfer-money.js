import React from 'react';

function TransferMoney() {
	return (
        <div className="transfer-money-container">
          <header className="transfer-money-header">
          <img src="../../assets/icons/arrows.png" />
          <h2>Make a Transfer</h2>
          </header>
          <form className="transfer-money-form">
          <div className="from-account">
          <label>FROM ACCOUNT</label>
          <p>Free Checking(4692) - Available </p>
          </div>
          <div className="to-account">
          <label>TO ACCOUNT</label>
          <input type="text" placeholder="Georgia Power Electric Company"></input>
          </div>
          <div className="transfer-amount">
          <label>AMOUNT</label>
          <input type="number" placeholder="$0.00"></input>
          </div>
          <input type="submit" name="submit transfer money" value="SUBMIT" disabled />                       
          </form>
        </div>
      );
}

export default TransferMoney;