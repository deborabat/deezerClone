import React, { useState } from 'react';

import { FaPlayCircle, FaPauseCircle, FaRegHeart,FaHeart, FaHeadphonesAlt  } from "react-icons/fa";

import { Container, IconsContainer, TextItem} from './styles.js';

export default function RenderItem(person, idx) {

console.log(person.item)
  return (
    <Container key={idx}>
        <TextItem> {person.item.firstName} {person.item.lastName} </TextItem>
         <IconsContainer> 
          <FaHeadphonesAlt color ={'black'} size={'15px'}  />
          <FaHeart color ={'black'} size={'15px'}  />
          <FaPlayCircle color ={'black'} size={'15px'}  />
        </IconsContainer> 
     
    </Container>
  );
}