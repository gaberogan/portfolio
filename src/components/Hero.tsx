import { css } from "@emotion/css";

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
  );
}

const style = css`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  height: 42vw;

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
    font-size: 40px;

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
    max-width: 520px;
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
