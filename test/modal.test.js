import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';
import Modal from '../src/client/app/components/modal';
import store from '../src/client/app/store';

describe('Modal component', () => {

	it('Renders without crashing', () => {
		 shallow(<Modal store={store}/>);
		
	});

})