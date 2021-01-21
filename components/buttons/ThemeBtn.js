export const ThemeBtn = ({ theme }) => {
  const onClick = () => {
    document.body.setAttribute("data-theme", theme);
    localStorage.setItem("proclaim-theme", theme);
  };
  return <button onClick={onClick}>{theme}</button>;
};
