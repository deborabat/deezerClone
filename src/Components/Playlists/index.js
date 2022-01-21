/* eslint-disable react/function-component-definition */
import React from 'react';
import PlaceholderLoading from 'react-placeholder-loading';
import { useNavigate } from 'react-router-dom';

import Header from '../Header';
// eslint-disable-next-line import/extensions
import { Wrapper, Info, Image, Description, Item } from './styles';

// eslint-disable-next-line react/prop-types
export default function NewReleases({ releases, loading, user, playlists }) {
  console.log({ playlists });
  return (
    <Wrapper>
      <Header user={user} />
      {loading ? (
        <Info>
          <PlaceholderLoading shape="rect" width="50%" height="80%" />
        </Info>
      ) : (
        <>
          <Description>New Releases</Description>
          <Item>
            {releases?.items?.map((item, indice) => (
              <Info>
                <Image src={item?.images[0].url} alt="" />
                <Description>{item?.name}</Description>
              </Info>
            ))}
          </Item>
          <Description>{playlists?.message}</Description>
          <Item>
            {playlists?.playlists?.items.map((item, indice) => (
              <Info>
                <Image src={item?.images[0].url} alt="" />
                <Description>{item?.name}</Description>
              </Info>
            ))}
          </Item>
        </>
      )}
    </Wrapper>
  );
}
