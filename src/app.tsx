import { MetaProvider, Title } from "@solidjs/meta";
import { Router } from "@solidjs/router";
import { FileRoutes } from "@solidjs/start/router";
import { Suspense } from "solid-js";
import "./app.css";
import { css } from "@emotion/css";

export default function App() {
  return (
    <Router
      root={(props) => (
        <MetaProvider>
          <Title>Gabe Rogan</Title>
          <header class={style}>
            <div class="left">
              <img src="/icons/phone-tablet.svg" />
              <div>Gabe Rogan</div>
            </div>
            <nav>
              <a href="#projects">Projects</a>
              <a href="#contact">Contact</a>
              <a href="https://github.com/gaberogan" target="_blank">
                Github
              </a>
              <a href="https://www.linkedin.com/in/gaberogan/" target="_blank">
                LinkedIn
              </a>
            </nav>
          </header>
          <div class={backgroundStyle} />
          <Suspense>{props.children}</Suspense>
        </MetaProvider>
      )}
    >
      <FileRoutes />
    </Router>
  );
}

const style = css`
  display: flex;
  position: relative;
  align-items: center;
  justify-content: space-between;
  height: 100px;
  padding: 0 64px;
  font-weight: bold;
  width: 100%;
  max-width: 1400px;
  margin: 0 auto;

  @media (max-width: 991px) {
    position: absolute;
    padding: 0 32px;
  }

  .left {
    font-size: 24px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 8px;
  }

  nav {
    display: flex;
    gap: 30px;
    font-size: 18px;

    a {
      text-decoration: none;
      color: white;
    }

    @media (max-width: 991px) {
      display: none;
    }
  }
`;

const backgroundStyle = css`
  z-index: -1;
  position: absolute;
  background: radial-gradient(at left top, #00000066, #00000000);
  top: 0;
  right: 0;
  left: 0;
  height: 2000px;
`;
