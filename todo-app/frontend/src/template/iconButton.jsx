import React from 'react';
import IfHelper from '../shared/ifHelper';

export default props => (
  <IfHelper test={!props.hide}>
    <button className={`btn btn-${props.style}`} onClick={props.onClick}>
      <i className={`fa fa-${props.icon}`}></i>
    </button>
  </IfHelper>
)