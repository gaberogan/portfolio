import { css } from "@emotion/css";
import CarouselText from "./CarouselText";

const titles = [
  "Gabe Rogan",
  "a mobile developer",
  "a web developer",
  "a full stack engineer",
  "a software consultant",
];

export default function Hero() {
  return (
    <div class={`${style} Hero`}>
      <div class="left">
        <h1 class="title">
          Hey folks, I'm <CarouselText class="orange" options={titles} duration={0.25} delay={2} />
        </h1>
        <div class="blurb">
          Building a successful product is a challenge. I create delightful user experiences and
          develop software to make your vision a reality.
        </div>
        <a
          href="https://drive.google.com/uc?export=download&id=1asng5JA8wMHqT2f_qyzHmY8BfyQKHBlk"
          class="download-button"
        >
          <img src="/icons/document.svg" />
          <span>Download Resume</span>
        </a>
      </div>
      <img src="/coder.jpg" class="coder" />
    </div>
  );
}

const style = css`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  height: 40vw;

  @media (max-width: 991px) {
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

    @media (max-width: 991px) {
      padding: 0 32px;
      margin-top: -120px;
    }
  }

  .title {
    display: flex;
    gap: 12px;
    font-size: 32px;

    @media (max-width: 767px) {
      font-size: 30px;
      flex-direction: column;
      gap: 0;
    }
  }

  .orange {
    color: #fca27c;
  }

  .blurb {
    max-width: 550px;
    font-size: 17px;
    font-weight: 500;
    line-height: 1.35;
    margin-bottom: 12px;
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
    text-decoration: none;
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

    @media (max-width: 991px) {
      position: static;
      order: -1;
      height: 75vh;
      object-fit: cover;
    }
  }
`;
