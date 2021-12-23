import React, { useState } from 'react';
import FlatList from 'flatlist-react';

import { FaDeezer } from "react-icons/fa";

import Header from '../../Components/Header'
import Menu from '../../Components/Menu'
import { Wrapper,} from './styles.js';

export default function RenderItem(person, idx) {


  return (
      <li key={idx}>
        <b>{person.firstName} {person.lastName}</b> (<span>{person.info.age}</span>)
      </li>
  );
}