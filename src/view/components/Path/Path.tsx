import { Category } from "@/domain/models";
import { AppStore } from "@/infrastructure/redux/store";
import { isInProductDetail } from "@/view";
import React from "react";
import { useSelector } from "react-redux";
import { useLocation } from "react-router";
import { styled } from "styled-components";

interface PathInterface {}

const Path: React.FC<PathInterface> = () => {
  const { categoryPath } = useSelector((state: AppStore) => state.product);

  const location = useLocation()

  return (
    <PathContainer>
      {!isInProductDetail(location) ? <></> : categoryPath?.map((element: Category, index: number) =>  (`${element.name} ${index === categoryPath.length - 1 ? '': ' > '}`))}
    </PathContainer>
  );
};

export default Path;

const PathContainer = styled.div`
  min-height: 60px;
  min-width: 150vh;
  margin-top: 1rem;
  display: flex;
  text-align: end;
  align-items: flex-end;
  background-color: lightgrey;
`;
