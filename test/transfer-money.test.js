import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';
import TransferMoney from '../src/client/app/components/transfer-money';
import store from '../src/client/app/store';

describe('TransferMoney component', () => {

	it('Renders without crashing', () => {
		 shallow(<TransferMoney store={store} />);
		
	})

})