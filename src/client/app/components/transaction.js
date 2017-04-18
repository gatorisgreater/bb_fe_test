import React from 'react';

import moment from 'moment';

export default function Transaction(props) {

	return(
		<div className="transaction-container">
               <span> {props.categoryCode} </span>
               <span> {props.transactionDate} </span>
               <img className="transaction-image" src={props.merchantLogo} alt="Merchant Logo" />
               <span> {props.merchant}</span>
               <span> {props.transactionType} </span>
               <span> -${props.amount} </span>
		</div>
	)
}