import React from 'react';

import moment from 'moment';

export default function Transaction(props) {


	return(
		<div className="transaction-container">
			<ul>
               <li> {props.categoryCode} </li>
               <li> {props.transactionDate} </li>
               <img className="transaction-image" src={props.merchantLogo} />
               <li> {props.merchant}</li>
               <li> {props.transactionType} </li>
               <li> -${props.amount} </li>
            </ul>
		</div>
		)
}