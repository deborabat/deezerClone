/* eslint-disable react/function-component-definition */
import React from 'react';

// eslint-disable-next-line import/extensions
import {
  Info,
  Image,
  InfoText,
  WeekLy,
} from '../styles';

// eslint-disable-next-line react/prop-types
export default function NewRelleases({ albums }) {
  return (
    <Info>
      <Image src="https://cdn.shortpixel.ai/client/to_webp,q_lossy,ret_img,w_250/https://www.hypebot.com/wp-content/uploads/2020/07/discover-weekly-250x250.png" alt="" />
    </Info>
  );
}
