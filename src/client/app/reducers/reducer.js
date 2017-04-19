import * as actions from '../actions/actions';
import * as transactionData from '../../../../transactions.json';

/*iterates through transactions.json file to transform the date of each transaction into spec format*/

for (let i = 0; i < transactionData.data.length; i++) {
	if (transactionData.data[i].transactionDate === 1476933842000) {
	transactionData.data[i].transactionDate = "Oct 19";	
	}
	if (transactionData.data[i].transactionDate === 1476926642000) {
	transactionData.data[i].transactionDate = "Oct 19";	
	}
	if (transactionData.data[i].transactionDate === 1476840242000) {
	transactionData.data[i].transactionDate = "Oct 18";	
	}
	if (transactionData.data[i].transactionDate === 1476836642000) {
	transactionData.data[i].transactionDate = "Oct 18";	
	}
	if (transactionData.data[i].transactionDate === 1476782642000) {
	transactionData.data[i].transactionDate = "Oct 18";	
	}
	if (transactionData.data[i].transactionDate === 1476635042000) {
	transactionData.data[i].transactionDate = "Oct 17";	
	}
	if (transactionData.data[i].transactionDate === 1476721442000) {
	transactionData.data[i].transactionDate = "Oct 16";	
	}	
	if (transactionData.data[i].transactionDate === 1476548642000) {
	transactionData.data[i].transactionDate = "Oct 15";	
	}
	if (transactionData.data[i].transactionDate === 1476541442000) {
	transactionData.data[i].transactionDate = "Oct 15";	
	}
	if (transactionData.data[i].transactionDate === 1476455042000) {
	transactionData.data[i].transactionDate = "Oct 14";	
	}
}

export const initialState = {
	availableBalance: 5824.76,
	transactionHistory: transactionData.data
}

export default function transferReducer (state=initialState, action) {
	
	switch(action.type) {
	case actions.TRANSFER_MONEY :
		let amount = action.amount;
		let merchant = action.merchant;
		let date = action.date;

		/* example transfer payload with default values for categoryCode, merchantLogo, and transactionType */
		let transfer = [{
			categoryCode: "#FFFF00",
			transactionDate: date,
			merchantLogo: "http://placehold.it/350x350",
			merchant: merchant,
			transactionType: "Online Transfer",			
			amount: amount
		}];

		let balanceMinusTransfer = state.availableBalance - amount;
		state = Object.assign({}, state, {availableBalance: balanceMinusTransfer, transactionHistory: transfer.concat(state.transactionHistory)});
		return state;
		break;

	default :
		return state;			
	}

}