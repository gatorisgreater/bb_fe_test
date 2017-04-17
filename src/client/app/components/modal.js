import React from 'react';

class Modal extends React.Component {
  render() {
    const { closeModal } = this.props;

    return (
      <div className="jumbotron" style={{position: 'absolute', width: '100%', top: 0, height: 500, background: 'gray'}}>
        <h1>Some Modal</h1>
        <button 
          className="btn btn-md btn-primary" 
          onClick={closeModal}
          >Transfer</button>

        <button 
          className="btn btn-md btn-primary" 
          onClick={closeModal}
          >Go Back</button>

      </div>
    )
  }
}

export default Modal;