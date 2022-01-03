/* eslint-disable react/function-component-definition */
import React from 'react';
import {
  FaPlayCircle, FaPauseCircle, FaRegHeart, FaHeart, FaExternalLinkAlt,
} from 'react-icons/fa';
import useDataLayerValue from '../../services/DataLayer';
import Header from '../Header';
import SongRow from '../SongRow';
// eslint-disable-next-line import/extensions
import {
  Wrapper,
  Info,
  Image,
  InfoText,
  Songs,
  Icons,
  WeekLy,
  Description,
  Shuffle,
  MuiSvgIcon,
} from './styles.js';

export default function Lists({ spotify }) {
  const [{ discoverWeekly }, dispatch] = useDataLayerValue();
  return (
    <Wrapper>
      <Header spotify={spotify} />
      <Info>
        <Image src={discoverWeekly?.images[0]?.url} alt="" />
        <InfoText>
          <strong>PLAYLIST</strong>
          <WeekLy>Discover Weekly</WeekLy>
          <Description>{discoverWeekly?.description}</Description>
        </InfoText>
      </Info>
      <Songs>
        <Icons>
          <Shuffle><FaPlayCircle color="black" size="15px" /></Shuffle>
          <FaRegHeart color="black" size="15px" />
          <MuiSvgIcon><FaExternalLinkAlt color="black" size="15px" /></MuiSvgIcon>
        </Icons>
        {discoverWeekly?.tracks.items.map((item) => (
          <SongRow track={item.track} />
        ))}
      </Songs>
    </Wrapper>
  );
}
