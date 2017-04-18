import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';
import TransactionHistory from '../src/client/app/components/transaction-history';
import store from '../src/client/app/store';

describe('Transaction History component', () => {

	it('Renders without crashing', () => {
		 shallow(<TransactionHistory store={store}/>);
		
	});

})