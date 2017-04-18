import * as actions from '../actions/actions';

export const initialState = {
	availableBalance: 5824.76,
	transactionHistory: []
}


export default function transferReducer (state=initialState, action) {
	
	switch(action.type) {
	case actions.TRANSFER_MONEY :
		let amount = action.amount;
		let merchant = action.merchant;
		let balanceMinusTransfer = state.availableBalance - amount;
		state = Object.assign({}, state, {availableBalance: balanceMinusTransfer, transactionHistory: state.transactionHistory.concat({amount: amount, merchant: merchant})});
		return state;
		break;
	
	default :
		return state;			
	}

}