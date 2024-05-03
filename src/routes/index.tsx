import { css } from "@emotion/css";
import Carousel from "~/components/Carousel";

const titles = [
  "Gabe Rogan",
  "a mobile developer",
  "a web developer",
  "a full stack engineer",
  "a software consultant",
];

export default function Home() {
  return (
    <main class={style}>
      {/* Hero */}
      <div class="hero">
        <div class="left">
          <h1 class="title">
            Hey folks, I'm <span class="orange">{titles[0]}</span>
          </h1>
          <div class="blurb">
            Building a successful product is a challenge. I create delightful user experiences and
            develop software to save your business time and money.
          </div>
          <div class="download-button">
            <img src="/icons/document.svg" />
            <span>Download Resume</span>
          </div>
        </div>
        <img src="/coder.jpg" class="coder" />
      </div>
      {/* Worked with */}
      {/* <h2>Worked with</h2>
      <div>
        <img src="/icons/eightsleep.svg" />
        <img src="/icons/betql.svg" />
        <img src="/icons/audacy.svg" />
        <img src="/icons/uconn.svg" />
        <img src="/icons/prismic.svg" />
        <img src="/icons/ibm.svg" />
        <img src="/icons/lingumi.svg" />
      </div> */}
      {/* Screenshots */}
      {/* <Carousel
        height="400px"
        images={[
          "/screenshots/eight1.jpg",
          "/screenshots/eight2.jpg",
          "/screenshots/eight3.jpg",
          "/screenshots/betql1.jpg",
          "/screenshots/betql2.jpg",
          "/screenshots/betql3.jpg",
          "/screenshots/audacy1.jpg",
          "/screenshots/audacy2.jpg",
          "/screenshots/prismic1.jpg",
        ]}
      ></Carousel> */}
      {/* Contact */}
      {/* <div>
        <img src="/profile.jpg" />
        <div>
          Get in touch with <img src="/icons/calendly.svg" />
        </div>
      </div>
      <div>
        <div>
          <img src="/icons/email.svg" />
          <span>rogangabe@gmail.com</span>
        </div>
        <a href="https://linkedin.com/in/gaberogan">
          <img src="/icons/linkedin.svg" />
          <span>linkedin.com/in/gaberogan</span>
        </a>
        <a href="https://github.com/gaberogan">
          <img src="/icons/github.svg" />
          <span>github.com/gaberogan</span>
        </a>
      </div> */}
    </main>
  );
}

const style = css`
  .hero {
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: center;
    height: 40vw;

    @media (max-width: 767px) {
      height: initial;
    }

    .left {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      gap: 18px;
      width: 100%;
      max-width: 1400px;
      margin: 0 auto;
      padding: 0 64px;

      @media (max-width: 767px) {
        padding: 0 32px;
        margin-top: -120px;
      }
    }

    .title {
      font-size: 40px;
      margin: 0;

      @media (max-width: 991px) {
        font-size: 30px;
      }
    }

    .orange {
      color: #fca27c;

      @media (max-width: 767px) {
        display: block;
      }
    }

    .blurb {
      max-width: 550px;
      font-size: 18px;
      font-weight: 500;
      line-height: 1.3;
      margin-bottom: 12px;

      @media (max-width: 991px) {
        font-size: 16px;
        max-width: 400px;
      }
    }

    .download-button {
      display: flex;
      align-items: center;
      gap: 8px;
      background-color: #fff;
      padding: 18px 32px;
      border-radius: 50px;
      color: #19254b;
      font-weight: bold;
      font-size: 16px;
      cursor: pointer;
      :hover {
        opacity: 0.9;
      }
    }

    .coder {
      position: absolute;
      top: 0;
      right: 0;
      height: 100%;
      z-index: -3;

      @media (max-width: 767px) {
        position: static;
        order: -1;
        height: 500px;
        object-fit: cover;
      }
    }
  }

  .Carousel {
    margin-top: 1000px;
  }
`;
