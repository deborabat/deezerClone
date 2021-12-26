import React, { useState } from 'react';
import FlatList from 'flatlist-react';

import { FaDeezer } from "react-icons/fa";
import RenderItem from '../../Components/RenderItem';
import Header from '../../Components/Header'
import Menu from '../../Components/Menu'
import { Wrapper, Body, List} from './styles.js';


export default function HomeScreen() {

 const person = [
    {idx: 1, firstName: 'Elson', lastName: 'Correia', info: {age: 24}},
    {idx: 2,firstName: 'John', lastName: 'Doe', info: {age: 18}},
    {idx: 3,firstName: 'Jane', lastName: 'Doe', info: {age: 34}},
    {idx: 4,firstName: 'Maria', lastName: 'Carvalho', info: {age: 22}},
    {idx: 5,firstName: 'Kelly', lastName: 'Correia', info:{age: 23}},
    {idx: 6,firstName: 'Don', lastName: 'Quichote', info: {age: 39}},
    {idx: 7,firstName: 'Marcus', lastName: 'Correia', info: {age: 0}},
    {idx: 8,firstName: 'Bruno', lastName: 'Gonzales', info: {age: 25}},
    {idx: 9,firstName: 'Alonzo', lastName: 'Correia', info: {age: 44}}
  ]



  return (
    <Wrapper>
      <Header/>
      <Body>
        <Menu/>
        <List>
          <FlatList
            list={person}
            renderItem={<RenderItem person={person} idx={person.idx}/>}
            renderWhenEmpty={() => <div>List is empty!</div>}
          />
        </List>
      </Body>
    </Wrapper>
  );
}