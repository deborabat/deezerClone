import React from 'react';
import { Route, Routes } from 'react-router-dom';

import Login from '../Pages/Login';
import Home from '../Pages/HomeScreen';
import Favoritos from '../Pages/FavoriteScreen';

// eslint-disable-next-line react/function-component-definition
export default function RoutesScreen() {
  return (
    <Routes>
      <Route exact path="/" element={<Login />} />
      <Route path="/Home" element={<Home />} />
      <Route path="/fav" element={<Favoritos />} />
    </Routes>
  );
}
