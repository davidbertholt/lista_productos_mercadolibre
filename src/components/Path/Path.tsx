import React from "react";
import { styled } from "styled-components";

interface PathInterface {}

const Path: React.FC<PathInterface> = () => {
  return <PathContainer />;
};

export default Path;

const PathContainer = styled.div`
  min-height: 60px;
  background-color: ligthgrey;
`;
