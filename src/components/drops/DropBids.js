import React from "react";

import Logo from "../../assets/vslogo.svg";
import EditionBidBox from "./EditionBidBox";
import UniqueBidBox from "./UniqueBidBox";

const DropBids = () => {
  return (
    <div className="max-w-md mx-auto md:mx-0 md:max-w-none md:grid grid-cols-10 items-stretch pt-12 pb-3">
      <div className="col-span-4">
        <UniqueBidBox />
      </div>
      <div className="py-6 md:py-0 col-span-2 h-full flex items-center justify-center">
        <Logo className="h-12" />
      </div>
      <div className="col-span-4">
        <EditionBidBox />
      </div>
    </div>
  );
};

export default DropBids;
