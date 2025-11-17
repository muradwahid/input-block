
import React from 'react';
import { getPassLength } from '../../utils/functions';

const PasswordStrengthMeter = ({value}) => {
  const length = getPassLength(value);
  const meterCls = () => {
    switch (length) {
      case 1: return 'veryWeakPass';
      case 2: return 'weakPass';
      case 3: return 'mediumPass';
      case 4: return 'strongPass';
      default: return '';
    }
  }
  return <div className='b-blocks-input-field-passStrengthMeter-container'>
      <div className={`b-blocks-input-field-passStrengthMeter ${meterCls()}`}></div>
      <div className={`b-blocks-input-field-passStrengthMeter ${length>1 ? meterCls():''}`}></div>
      <div className={`b-blocks-input-field-passStrengthMeter ${length>2 ? meterCls():''}`}></div>
      <div className={`b-blocks-input-field-passStrengthMeter ${length>3 ? meterCls():''}`}></div>
    </div>
};

export default PasswordStrengthMeter;