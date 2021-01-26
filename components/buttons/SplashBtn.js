import styled from "@emotion/styled";

const Button = styled.button`
  background-color: unset;
  color: var(--text-1);
  border: none;
  cursor: pointer;
`;

export const SplashBtn = ({ children }) => {
  return <Button>{children}</Button>;
};
