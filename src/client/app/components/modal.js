import React from 'react';

class Modal extends React.Component {
  render() {
    const { closeModal, submitTransferAmount, merchant, transferAmount } = this.props;

    return (
      <div className="jumbotron" style={{position: 'absolute', width: '100%', top: 0, height: '100%', background: 'gray'}}>
        
        <header className="transfer-preview-header">Transfer Preview</header>
        <h2 className="transfer-preview-declaration">Press the "Transfer" button below to confirm your transfer of ${transferAmount} to {merchant}.
        </h2>
        
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