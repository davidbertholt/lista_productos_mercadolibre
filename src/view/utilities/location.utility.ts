import { Location } from "react-router";

const regex = /\/item\//;

export const isInProductDetail = (location: Location) =>
  location.pathname.match(regex);
