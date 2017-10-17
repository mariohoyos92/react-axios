import React from 'react';
import './Customer.css';

export default function Customer( { id, first, last, selectCustomer } = this.props ) {
  return (
    <div className="Customer__listName" onClick={() => selectCustomer(id)}>
      <span>{ first } { last }</span>
    </div>
  )
}
