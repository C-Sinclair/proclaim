import Recorder from "../../audio/Recorder/Recorder";
import Image from "next/image";
import { AppHeader } from "../Header/Header";
import { AppFooter } from "../Footer/Footer";
import { ImageWrapper, Content } from "./Main.styles";

export default function Main({ children, hideFooter = false, width = "80%" }) {
  return (
    <main
      style={{
        "--width": width,
      }}
    >
      <AppHeader />

      <ImageWrapper>
        <Image
          alt="Gramophone"
          src="/gramophone.png"
          width={800}
          height={1000}
          quality={100}
        />
      </ImageWrapper>

      <Content>{children}</Content>

      {!hideFooter && (
        <AppFooter>
          <Recorder />
        </AppFooter>
      )}
    </main>
  );
}
