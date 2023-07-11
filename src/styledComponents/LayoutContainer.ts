import styled from "styled-components";

const LayoutContainer = styled.div`
  padding: 0 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media only screen and (min-width: 1421px) {
    width: 100%;
  }
  @media only screen and (min-width: 1176px) {
    padding: 12px;
  }
`;

export default LayoutContainer;
