import Link from "next/link";
import { SplashBtn } from "../components/buttons/SplashBtn";
import Main from "../components/layout/Main/Main";
import { Centre, SpaceBetween } from "../components/layout/Main/Main.styles";
import { Title } from "../components/layout/Title/Title";

export default function Splash() {
  return (
    <Main hideFooter width="250px">
      <Title />

      <Centre>
        <SpaceBetween>
          <SplashBtn>
            <Link href="/login">Log in</Link>
          </SplashBtn>
          <SplashBtn>
            <Link href="/register">Sign up</Link>
          </SplashBtn>
        </SpaceBetween>

        <h4>Or continue shrouded in mystery...</h4>
        <SplashBtn>
          <Link href="/den">Enter</Link>
        </SplashBtn>
      </Centre>
    </Main>
  );
}
