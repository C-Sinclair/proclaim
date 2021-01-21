import { ThemeBtn } from "./ThemeBtn";

const themes = ["light", "dark"];

export const ThemeBtnSection = () => {
  return (
    <section>
      {themes.map((theme) => (
        <ThemeBtn key={theme} theme={theme} />
      ))}
    </section>
  );
};
