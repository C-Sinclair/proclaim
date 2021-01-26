import styled from "@emotion/styled";

const TitleRoot = styled.h1`
  position: relative;
  width: 100%;
  text-align: center;
  font-size: 2em;

  a {
    font-family: var(--font-stylized);
    font-size: 2em;
    font-weight: 400;
  }
`;

export const Title = () => {
  return (
    <TitleRoot>
      Welcome to <a>Radiogram</a>
    </TitleRoot>
  );
};
