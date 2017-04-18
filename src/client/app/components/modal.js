import React from 'react';

class Modal extends React.Component {
  render() {
    const { closeModal, submitTransferAmount } = this.props;

    return (
      <div className="jumbotron" style={{position: 'absolute', width: '100%', top: 0, height: 500, background: 'gray'}}>
        <h1>Transfer Preview</h1>
        <button 
          className="btn btn-md btn-primary" 
          onClick={closeModal}
          >Cancel</button>

        <button 
          className="btn btn-md btn-primary" 
          onClick={submitTransferAmount}
          >Transfer</button>

      </div>
    )
  }
}

export default Modal;