import React from 'react';

export default function Transaction(props) {

     let leftBorderColor = props.categoryCode;

	return(
		<div className="transaction-container" style={{borderLeft: leftBorderColor, borderStyle: "solid"}} >
               <span className="transaction-date"> {props.transactionDate} </span>
               <img className="transaction-image" src={props.merchantLogo} alt="Merchant Logo" />
               <span className="transaction-merchant"> {props.merchant}</span>
               <span className="transaction-type"> {props.transactionType} </span>
               <span className="transaction-amount"> -${props.amount} </span>
		</div>
	)
}