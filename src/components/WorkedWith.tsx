import { css } from "@emotion/css";
import Carousel from "~/components/Carousel";
import { breakpoint } from "~/services/breakpoint";

export default function WorkedWith() {
  return (
    <div id="projects" class={style}>
      <Carousel
        disabled={breakpoint() === "desktop"}
        class="worked-with"
        speed={0.3}
        height={breakpoint() === "desktop" ? "auto" : "30px"}
        images={[
          "/icons/eightsleep.svg",
          "/icons/betql.svg",
          "/icons/audacy.svg",
          "/icons/uconn.svg",
          "/icons/prismic.svg",
          "/icons/ibm.svg",
          "/icons/lingumi.svg",
        ]}
      />
      <Carousel
        height="400px"
        speed={breakpoint() === "desktop" ? 0.6 : 0.4}
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
      />
    </div>
  );
}

const style = css`
  width: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 48px;

  .worked-with {
    width: 100%;
    max-width: 1400px;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 45px;
    padding: 0 64px;

    img {
      min-width: 0;
    }

    @media (max-width: 991px) {
      gap: 30px;
      padding: 0 32px;
      width: 100%;
      overflow-x: scroll;
      justify-content: initial;

      img {
        height: 30px;
        min-width: auto;
      }
    }
  }
`;
