import React from 'react';
import Modal from './modal';

import {connect} from 'react-redux';

import * as actions from '../actions/actions';

class TransferMoney extends React.Component {
	constructor(props) {
		super(props);
		this.submitTransferAmount = this.submitTransferAmount.bind(this);
		this.handleMerchantChange = this.handleMerchantChange.bind(this);
		this.handleTransferChange = this.handleTransferChange.bind(this);

		this.state = {
			modalOpen: false,
			merchant: '',
			transferAmount: 0
		};
	}

	/* updates component state for TO ACCOUNT input data entry */
	handleMerchantChange(event) {
		this.setState({ merchant: event.target.value});
	}

	/* updates component state for AMOUNT input data entry */	
	handleTransferChange(event) {
		this.setState({ transferAmount: event.target.value});
	}

	/* dispatches transfer money action, generates today's date in spec format and opens transfer preview modal */
	submitTransferAmount(event) {
		event.preventDefault();

		function dateGenerator() {
			let today = new Date();
			let day = today.getDate();
			let month = today.getMonth()+1;
			let monthIndex = month - 1;
			let monthNames = [
			    "Jan", "Feb", "Mah",
			    "Apr", "May", "Jun", "Jul",
			    "Aug", "Sep", "Oct",
			    "Nov", "Dec"
			  ];

			if(day<10) {
			    day='0'+day;
			} 

			if(month<10) {
			    month='0'+month;
			} 

			return monthNames[monthIndex] + " " + day;
		};

		let today = dateGenerator();
		this.props.dispatch(actions.transferMoney(this.state.merchant, this.state.transferAmount, today))
		this.setState({modalOpen: false});			
	}

	/* opens transfer preview modal */
	_openModal(event) {
	  	event.preventDefault();
    	this.setState({modalOpen: true});
  	}

	/* closes transfer preview modal */
  	_closeModal() {
    	this.setState({modalOpen: false});
  	}

	render() {

		const { modalOpen, merchant, transferAmount } = this.state;

	{/*disables Submit button until both input fields have information */}
		const isEnabled = 
			merchant.length > 0 &&
			transferAmount > 0;

		let availableBalance = this.props.availableBalance;

			return (
		        <div className="transfer-money-container" >
		          <header className="transfer-money-header">
			          <img className="transfer-money-image" src="../../assets/icons/arrows.png" alt="Transfer Money Icon" />
			          <span className="transfer-money-title">Make a Transfer</span>
		          </header>

		          <form className="transfer-money-form" onSubmit={this._openModal.bind(this)} >
			          <div className="from-account">
				          <label htmlFor="from-account" className="from-account-label">FROM ACCOUNT</label>
				          <select id="from-account" className="from-account-select-menu" disabled>
				          <option>Free Checking(4692) - Available ${availableBalance}</option>
				          </select>
				      </div>
				      
				      <div className="to-account">
				          <label htmlFor="to-account" className="to-account-label">TO ACCOUNT</label>
				          <input id="to-account" className="to-account-input" type="text" placeholder="Georgia Power Electric Company" value={this.state.merchant} onChange={this.handleMerchantChange} required />
			          </div>

			          <div className="transfer-amount">
				          <label htmlFor="transfer-amount" className="transfer-amount-label">AMOUNT</label>
				          <input id="transfer-amount" className="transfer-amount-input" type="number" placeholder="$ 0.00" value={this.state.transerAmount} onChange={this.handleTransferChange} required />
			          </div>
			          
			          <button className="submit-button" type="submit" name="submit transfer money" value="SUBMIT" disabled={!isEnabled} >SUBMIT </button>

			           {/* Shows Modal when "this.state.modalOpen === true" */}
				        {modalOpen 
				          ? <Modal submitTransferAmount={this.submitTransferAmount} closeModal={this._closeModal.bind(this)} merchant={merchant} transferAmount={transferAmount} />
				          : ''}

		          </form>

		        </div>
		    );
	}
}

const mapStateToProps = (state, props) => {
	return {
		availableBalance: state.availableBalance
	}
}

export default connect(mapStateToProps)(TransferMoney);