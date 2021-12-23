import React from 'react'
import { FaSistrix } from "react-icons/fa";
import {Input, ErrorMsg} from './styles.js';

export default function InputSearch(props) {


  return (
    <div>
      <FaSistrix color ={'black'} size={'15px'}  />
      <Input 
        type="text" 
        placeholder="Buscar" 
      />
  
    </div>
  );
}
