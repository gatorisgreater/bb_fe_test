import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';
import TransactionHistory from '../src/client/app/components/transaction-history';

describe('Transaction History component', () => {

	it('Renders without crashing', () => {
		 shallow(<TransactionHistory />);
		
	});

})