import React from "react";
import IndexCard from "./IndexCard";
import { StyledTitle } from "./elements/SiteIndexElements";

const SiteIndex = () => {
  return (
    <div>
      <StyledTitle>Welcome!</StyledTitle>
      <IndexCard />
    </div>
  );
};

export default SiteIndex;
