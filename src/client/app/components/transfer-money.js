import React from 'react';


class TransferMoney extends React.Component {
	constructor(props) {
		super(props);
		this.submitTransferAmount = this.submitTransferAmount.bind(this);
	}

	submitTransferAmount(event) {
		event.preventDefault();
		console.log(event);
		console.log(this.refs.input.value);
	}

	render() {

		let availableBalance = 5824.76;

			return (
		        <div className="transfer-money-container" >
		          <header className="transfer-money-header">
		          <img src="../../assets/icons/arrows.png" />
		          <h2>Make a Transfer</h2>
		          </header>
		          <form className="transfer-money-form" onSubmit={this.submitTransferAmount}>
		          <div className="from-account">
		          <label>FROM ACCOUNT</label>
		          <input placeholder={availableBalance} disabled />
		          <p>Free Checking(4692) - Available ${availableBalance}</p>
		          </div>
		          <div className="to-account">
		          <label>TO ACCOUNT</label>
		          <input type="text" placeholder="Georgia Power Electric Company" ref="input" />
		          </div>
		          <div className="transfer-amount">
		          <label>AMOUNT</label>
		          <input type="number" placeholder="$0.00" ref="input" />
		          </div>
		          <button type="submit" name="submit transfer money" value="SUBMIT" >SUBMIT </button>                       
		          </form>
		        </div>
		      );

	}

}

export default TransferMoney;