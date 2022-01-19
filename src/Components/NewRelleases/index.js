/* eslint-disable react/function-component-definition */
import React from 'react';
import FlatList from 'flatlist-react';
import { useNavigate } from 'react-router-dom';
import RenderItens from './RenderItens';

import Header from '../Header';
// eslint-disable-next-line import/extensions
import {
  Wrapper,
  Info,
  Image,
  InfoText,
  WeekLy,
} from './styles';

// eslint-disable-next-line react/prop-types
export default function NewRelleases({ NewRelleasesUser }) {
  return (
    <Wrapper>
      <Header />
      {/* {loading
        ? (
          <Info>
            <PlaceholderLoading shape="rect" width="50%" height="80%" />
          </Info>
        ) : ( */}

      <ul>
        <FlatList
          list={NewRelleasesUser}
          renderItem={<RenderItens />}
          renderWhenEmpty={() => <div>List is empty!</div>}

        />
      </ul>

    </Wrapper>
  );
}
