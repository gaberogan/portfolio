import { For, createEffect } from "solid-js";
import { css } from "@emotion/css";
import _ from "lodash";

const NUM_REPEATS = 3;
const SCROLL_SPEED = 0.8;

export default function Carousel(props: { images: string[]; height: string; class?: string }) {
  let ref: HTMLElement | null = null;

  const repeatedImages = () => {
    const arr: string[] = [];
    _.times(NUM_REPEATS, () => arr.push(...props.images));
    return arr;
  };

  // Scroll the carousel
  createEffect(() => {
    const animate = () => {
      if (ref) {
        const hovering = ref.matches(":hover");
        if (!hovering) {
          ref.scrollLeft = (ref.scrollLeft + SCROLL_SPEED) % (ref.scrollWidth / NUM_REPEATS);
        }
        requestAnimationFrame(animate);
      }
    };
    animate();
  });

  return (
    <div ref={(el) => (ref = el)} class={`${style} Carousel`}>
      <For each={repeatedImages()}>
        {(src) => <img src={src} style={{ height: props.height }}></img>}
      </For>
    </div>
  );
}

const style = css`
  display: flex;
  overflow-x: scroll;

  ::-webkit-scrollbar {
    display: none;
  }
`;
