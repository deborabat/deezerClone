import React, { useState } from 'react';

import {
  FaPlayCircle, FaPauseCircle, FaRegHeart, FaHeart, FaExternalLinkAlt,
} from 'react-icons/fa';

import { Container, TextItem } from './styles.js';

export default function RenderItem({ itemType, itemData, itemDataCategories }) {
  console.log(itemData);

  return (
    <>
      {itemDataCategories !== undefined
        && itemType === 'artists'
        && (
        <Container key={itemDataCategories.data.id}>
          <div
            style={{
              backgroundImage: `url(${data.icons[0].url})`,
            }}
          />
          {/* <IconsContainer>
            <FaExternalLinkAlt color ={'black'} size={'15px'}  />
            <FaHeart color ={'black'} size={'15px'}  />
            <FaPlayCircle color ={'black'} size={'15px'}  />
          </IconsContainer>  */}
          <TextItem>{data.name}</TextItem>
        </Container>
        )}
      {itemData !== undefined
        && itemType === 'album'
        && (
        <Container key={itemData.data.id}>
          <div
            style={{
              backgroundImage: `url(${data.images[0].url})`,
            }}
          />
          <TextItem>{data.name}</TextItem>
          {data.artists !== undefined && (
          <>
            {data.artists.map((artist) => (
              <TextItem>{artist.name}</TextItem>
            ))}
          </>
          )}
        </Container>
        )}
      {itemData !== undefined
        && itemType === 'playlist'
        && (
        <Container key={itemData.data.id}>
          <div
            style={{
              backgroundImage: `url(${data.images[0].url})`,
            }}
          />
          <TextItem>{data.name}</TextItem>
          {data.artists !== undefined && (
          <>
            {data.artists.map((artist) => (
              <TextItem>{artist.name}</TextItem>
            ))}
          </>
          )}
        </Container>
        )}
      {itemData !== undefined
        && itemType === 'newReleases'
        && (
        <Container key={itemData.data.id}>
          <div
            style={{
              backgroundImage: `url(${data.images[0].url})`,
            }}
          />
          <TextItem>{data.name}</TextItem>
          {data.artists !== undefined && (
          <>
            {data.artists.map((artist) => (
              <TextItem>{artist.name}</TextItem>
            ))}
          </>
          )}
        </Container>
        )}
    </>
  );
}
