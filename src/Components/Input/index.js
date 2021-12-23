import React from 'react'
import {Input} from './style.js';

export default function InputCostum({value, type, color}) {
  return (
    <div>
      <Input defaultValue={value} type={type} inputColor={color} />
    </div>
  );
}
