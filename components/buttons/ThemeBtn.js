import styled from "@emotion/styled";

const Button = styled.button`
  background-color: unset;
  color: var(--text-1);
  outline: none;
  border: none;
  cursor: pointer;
  opacity: 0.6;
  transition: all 0.2s;

  &:hover {
    opacity: 0.8;
  }

  svg {
    height: 20px;
    width: 20px;
  }
`;

export const ThemeBtn = ({ theme, children }) => {
  const onClick = () => {
    document.body.setAttribute("data-theme", theme);
    localStorage.setItem("proclaim-theme", theme);
  };
  return <Button onClick={onClick}>{children}</Button>;
};
