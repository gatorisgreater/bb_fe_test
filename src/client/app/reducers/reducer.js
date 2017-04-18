import * as actions from '../actions/actions';
import * as transactionData from '../../../../transactions.json';

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