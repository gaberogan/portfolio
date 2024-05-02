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
  align-items: center;
  justify-content: space-between;
  padding: 12px;

  .left {
    display: flex;
    align-items: center;
  }

  nav {
    display: flex;
    gap: 30px;

    a {
      text-decoration: none;
    }
  }
`;
