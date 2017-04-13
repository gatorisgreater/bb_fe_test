import * as actions from '../actions/actions';

export const initialState = {
	availableBalance: 5824.76,
	transactionHistory: []
}


export default function reducer (state=initialState, action) {
	
	switch(action.type) {
	case actions.TRANSFER_MONEY :
		let amount = action.amount;
		let merchant = action.merchant;
		state = Object.assign({}, state, {transactionHistory: state.transactionHistory.concat({amount: amount, merchant: merchant})});
		return state;
		break;
	
	default :
		return state;			
	}

}