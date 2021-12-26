import React from "react";
import { BrowserRouter,  Route } from "react-router-dom";

import Home from "../Pages/HomeScreen";
import Favoritos from "../Pages/FavoriteScreen"

const Routes = () => {
  return(
    <BrowserRouter>
      <Route exact path="/" component={Home} />
      <Route path="/fav" component={Favoritos}   />
    </BrowserRouter>
  )
}

export default Routes;