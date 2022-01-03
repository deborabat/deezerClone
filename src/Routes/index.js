import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Login from '../Pages/Login';
import Home from '../Pages/HomeScreen';
import Favoritos from '../Pages/FavoriteScreen';

// eslint-disable-next-line react/function-component-definition
export default function RoutesScreen() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/auth" component={Login} />
        <Route exact path="/" component={Home} />
        <Route path="/fav" component={Favoritos} />
      </Routes>
    </BrowserRouter>
  );
}
