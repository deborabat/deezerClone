import React from "react";
import { BrowserRouter,  Route, Routes } from "react-router-dom";

import Home from "../Pages/HomeScreen";
import Favoritos from "../Pages/FavoriteScreen"

export default function RoutesScreen() {
  return(
    <BrowserRouter>
    <Routes>
      <Route exact path="/" component={Home} />
      <Route path="/fav" component={Favoritos}   />
      </Routes>
    </BrowserRouter>
  )
}

