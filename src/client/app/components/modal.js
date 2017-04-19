import React from 'react';

class Modal extends React.Component {
  render() {
    const { closeModal, submitTransferAmount, merchant, transferAmount } = this.props;

    return (
      <div className="jumbotron" style={{position: 'absolute', width: '100%', top: 0, left: 0, height: 'auto', background: '#D6D2CF'}}>
        
        <header className="transfer-preview-header">Press the "Transfer" button below to confirm your transfer of ${transferAmount} to {merchant}.</header>
        
        <button 
          className="cancel-button" onClick={closeModal}>Cancel
        </button>

        <button 
          className="transfer-button" onClick={submitTransferAmount}>Transfer
        </button>

      </div>
    )
  }
}

export default Modal;