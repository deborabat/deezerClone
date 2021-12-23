import React, { useState } from 'react';
import FlatList from 'flatlist-react';

import { FaDeezer } from "react-icons/fa";

import Header from '../../Components/Header'
import Menu from '../../Components/Menu'
import { Wrapper,} from './styles.js';

export default function HomeScreen() {

  people = [
    {firstName: 'Elson', lastName: 'Correia', info: {age: 24}},
    {firstName: 'John', lastName: 'Doe', info: {age: 18}},
    {firstName: 'Jane', lastName: 'Doe', info: {age: 34}},
    {firstName: 'Maria', lastName: 'Carvalho', info: {age: 22}},
    {firstName: 'Kelly', lastName: 'Correia', info:{age: 23}},
    {firstName: 'Don', lastName: 'Quichote', info: {age: 39}},
    {firstName: 'Marcus', lastName: 'Correia', info: {age: 0}},
    {firstName: 'Bruno', lastName: 'Gonzales', info: {age: 25}},
    {firstName: 'Alonzo', lastName: 'Correia', info: {age: 44}}
  ]

  

  return (
    <Wrapper>
      <Header/>
      <div>
        <Menu/>

      </div>
    </Wrapper>
  );
}