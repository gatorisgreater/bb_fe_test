import React from 'react';
import Modal from './modal';

import {connect} from 'react-redux';
import moment from 'moment';

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

	handleMerchantChange(event) {
		this.setState({ merchant: event.target.value});
	}

	handleTransferChange(event) {
		this.setState({ transferAmount: event.target.value});
	}

	submitTransferAmount(event) {
		event.preventDefault();
		let date = moment().format('MMM D');

		this.props.dispatch(actions.transferMoney(this.state.merchant, this.state.transferAmount, date))
		console.log(event);
		console.log(date);
		console.log(this.state.merchant);
		console.log(this.state.transferAmount);	
		this.setState({modalOpen: false});			
	}

	  _openModal(event) {
	  	event.preventDefault();
    this.setState({modalOpen: true});
  }

  _closeModal() {
    this.setState({modalOpen: false});
  }

	render() {

		const { modalOpen, merchant, transferAmount } = this.state;

		const isEnabled = 
			merchant.length > 0 &&
			transferAmount > 0;

		let availableBalance = this.props.availableBalance;

			return (
		        <div className="transfer-money-container" >
		          <header className="transfer-money-header">
		          <img src="../../assets/icons/arrows.png" />
		          <h2>Make a Transfer</h2>
		          </header>
		          <form className="transfer-money-form" onSubmit={this._openModal.bind(this)} >
		          <div className="from-account">
		          <label>FROM ACCOUNT</label>
		          <select disabled>
		          <option>Free Checking(4692) - Available ${availableBalance}</option>
		          </select>
		          </div>
		          <div className="to-account">
		          <label>TO ACCOUNT</label>
		          <input type="text" placeholder="Georgia Power Electric Company" value={this.state.merchant} onChange={this.handleMerchantChange} required />
		          </div>
		          <div className="transfer-amount">
		          <label>AMOUNT</label>
		          <input type="number" placeholder="$0.00" value={this.state.transerAmount} onChange={this.handleTransferChange} required />
		          </div>
		          <button type="submit" name="submit transfer money" value="SUBMIT" disabled={!isEnabled} >SUBMIT </button>

           {/* Only show Modal when "this.state.modalOpen === true" */}
        {modalOpen 
          ? <Modal submitTransferAmount={this.submitTransferAmount} closeModal={this._closeModal.bind(this)} />
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