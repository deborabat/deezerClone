import React from 'react';
import { Route, Routes } from 'react-router-dom';

import Login from '../Pages/LoginScreen';
import Home from '../Pages/HomeScreen';
import Favoritos from '../Pages/FavoriteScreen';
import Loading from '../Pages/LoadingScreen';

// eslint-disable-next-line react/function-component-definition
export default function RoutesScreen(accessToken) {
  const userToken = localStorage.getItem(accessToken);
  return (
    <Routes>
      <Route exact path="/auth" element={<Login />} />

      <Route exact path="/" element={<Loading />} />
      <Route exact path="/Home" element={<Home />} />
      <Route path="/fav" element={<Favoritos />} />
    </Routes>
  );
}
