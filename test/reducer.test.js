import reducer from '../src/client/app/reducers/reducer';
import * as actions from '../src/client/app/actions/actions';

const initialState = {
	availableBalance: 5824.76,
	transactionHistory: []

}


describe('PeachTree Bank SPA', () => {
    describe("reducer", () => {

        it("should return the initial state",  () => {
            expect(
             reducer(undefined, {})
             ).toEqual(initialState)
        });

        it("should handle TRANSFER MONEY action",  () => {
            expect(
             reducer(undefined, {type: actions.TRANSFER_MONEY, merchant: "Buffalo Wild Wings", amount: 45.55, date: "Apr 18"})
             ).toEqual({availableBalance: 5779.21, transactionHistory:[{merchant: "Buffalo Wild Wings", amount: 45.55, date: "Apr 18"}]})
        });
 
    });
})        