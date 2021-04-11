import React, { useEffect, useState } from "react";
import * as fcl from "@onflow/fcl";
import * as t from "@onflow/types";
import * as sdk from "@onflow/sdk";

import Main from "../../layouts/Main";
import ArtistHeader from "../../components/artist/ArtistHeader";
import ArtistSocial from "../../components/artist/ArtistSocial";
import DropModule from "../../components/drops/DropModule";
import { fetchVersusDrop } from "./transactions";
import Loading from "../../components/general/Loading";

const marketplaceAccount = "0x179b6b1cb6755e31";

const Drops = ({ user }) => {
  const [drop, setDrop] = useState(null);
  const [bidTransaction, setBidTransaction] = useState(null);
  console.log(drop, bidTransaction);
  useEffect(() => {
    async function fetchDrop() {
      console.log("response");
      const response = await fcl.send([
        fcl.script(fetchVersusDrop),
        sdk.args([sdk.arg(marketplaceAccount, t.Address)]),
      ]);
      console.log(response);
      const dropResponse = await fcl.decode(response);
      console.log(dropResponse);
      setDrop(dropResponse);
      setBidTransaction(null); //we mark that the current transaction has been taken into account
    }
    if (drop == null || bidTransaction != null) {
      setInterval(() => {
        fetchDrop();
      }, 5000);
    }
  }, [drop, user, bidTransaction]);
  return (
    <Main>
      {drop ? (
        <>
          <ArtistHeader />
          <DropModule drop={drop} marketplaceAccount={marketplaceAccount} />
          <ArtistSocial />
        </>
      ) : (
        <Loading className="w-full min-h-screen" />
      )}
    </Main>
  );
};

export default Drops;
