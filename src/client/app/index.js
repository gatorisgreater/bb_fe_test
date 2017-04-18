import React from 'react';
import {render} from 'react-dom';

import {Provider} from 'react-redux';
import store from './store';
import TransferMoney from './components/transfer-money';
import TransactionHistory from './components/transaction-history';

class App extends React.Component {
  render () {
    return (
    	<div>
    		<header className="header-logo">
	    	<img src="../../assets/logo.jpg" />
	    	</header>
		    	<div className="content">
		  		<TransferMoney />
		  		<TransactionHistory />
		  		</div>
  		</div>
  	)

  }
}

render(<Provider store={store}>
        <App/>
       </Provider> 
       ,document.getElementById('app'));
