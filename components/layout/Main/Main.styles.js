import styled from "@emotion/styled";

export const ImageWrapper = styled.div`
  position: fixed;
  left: 0px;
  top: 50px;
  z-index: -1;
  opacity: 0.6;
`;

export const Content = styled.section`
  padding-top: var(--header-height);
  width: var(--width);
  margin: 0 auto;
`;

export const Centre = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const SpaceBetween = styled.div`
  display: flex;
  justify-content: space-between;
`;
