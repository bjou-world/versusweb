import React from "react";

import Main from "../../layouts/Main";
import ArtistHeader from "../../components/artist/ArtistHeader";
import ArtistSocial from "../../components/artist/ArtistSocial";
import DropModule from "../../components/drops/DropModule";

const Drops = () => {
  return (
    <Main>
      <ArtistHeader />
      <DropModule />
      <ArtistSocial />
    </Main>
  );
};

export default Drops;
