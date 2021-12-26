import React from "react";
import { Navigation } from "react-minimal-side-navigation";
import { useNavigate,useLocation } from 'react-router-dom';
import { FaHome, FaRegHeart } from "react-icons/fa";

import "react-minimal-side-navigation/lib/ReactMinimalSideNavigation.css";
import { Container } from "./styles";


export default function Menu() {
  const navigate = useNavigate();
  const location = useLocation();
  return (
    <Container>
      <Navigation
       activeItemId={location.pathname}
      
        items={[
          {
            title: "Home",
            itemId: "/",
            // Optional
            elemBefore: () => <FaHome color ={'black'} size={'15px'}  />
          },
          {
            title: "Favotitos",
            itemId: "/fav",
            elemBefore: () => <FaRegHeart color ={'black'} size={'15px'}  />,
          },
        ]}
        onSelect={({ itemId }) => {
          navigate(itemId);
         }}
      />
    </Container>
  );
}