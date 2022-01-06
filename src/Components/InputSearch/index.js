import React, { useState } from 'react';
import { connect } from 'react-redux';

import { FaSistrix } from 'react-icons/fa';

import { Input, ErrorMsg } from './styles';

// eslint-disable-next-line react/function-component-definition
export default function InputSearch() {
  return (
    <div>
      <FaSistrix color="gray" size="15px" />
      <Input
        type="text"
        placeholder="Busque artistas, músicas ou podcasts"
      />

    </div>
  );
}
