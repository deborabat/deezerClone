import React, { useState } from "react";
import { Navigation } from "react-minimal-side-navigation";
import { FaSistrix } from "react-icons/fa";

import "react-minimal-side-navigation/lib/ReactMinimalSideNavigation.css";
import { Container } from "./styles";

export default function Menu() {

  return (
    <Container>
      <Navigation
        activeItemId={location.pathname}
        onSelect={({ itemId }) => {}}
        items={[
          {
            title: "Home",
            itemId: "/home",
            // Optional
            elemBefore: () => <FaSistrix color ={'black'} size={'15px'}  />
          },
          {
            title: "About",
            itemId: "/about",
            elemBefore: () => <FaSistrix color ={'black'} size={'15px'}  />,
          },
          {
            title: "Another Tab",
            itemId: "/another",
          }
        ]}
      />
    </Container>
  );
}