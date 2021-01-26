import { ThemeBtn } from "./ThemeBtn";
import { GiMoon, GiBarbedSun } from "react-icons/gi";

const themes = {
  light: {
    Component: GiBarbedSun,
  },
  dark: {
    Component: GiMoon,
  },
};

export const ThemeBtnSection = () => {
  return (
    <section>
      {Object.entries(themes).map(([theme, { Component }]) => (
        <ThemeBtn key={theme} theme={theme}>
          <Component />
        </ThemeBtn>
      ))}
    </section>
  );
};
