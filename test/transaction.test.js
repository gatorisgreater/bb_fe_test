import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';
import Transaction from '../src/client/app/components/transaction';

describe('Transaction component', () => {

	it('Renders without crashing', () => {
		 shallow(<Transaction />);
		
	});

})