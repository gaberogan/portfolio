import { For, createEffect, untrack } from "solid-js";
import { css } from "@emotion/css";
import _ from "lodash";

const NUM_REPEATS = 3;

type CarouselProps = {
  images: string[];
  height: string;
  class?: string;
  speed?: number;
  disabled?: boolean;
};

export default function Carousel(props: CarouselProps) {
  let ref: HTMLElement | null = null;
  let scrollLeftFloat = 0;

  const repeatedImages = () => {
    const arr: string[] = [];
    _.times(props.disabled ? 1 : NUM_REPEATS, () => arr.push(...props.images));
    return arr;
  };

  // Scroll the carousel
  createEffect(() => {
    const animate = () => {
      if (ref) {
        const hovering = ref.matches(":hover");
        if (!hovering && !props.disabled) {
          scrollLeftFloat =
            (scrollLeftFloat + (props.speed || 1)) % (ref.scrollWidth / NUM_REPEATS);
          ref.scrollLeft = scrollLeftFloat;
        }
        requestAnimationFrame(animate);
      }
    };
    untrack(animate);
  });

  return (
    <div ref={(el) => (ref = el)} class={`${style} Carousel ${props.class || ""}`}>
      <For each={repeatedImages()}>
        {(src) => <img src={src} style={{ height: props.height }}></img>}
      </For>
    </div>
  );
}

const style = css`
  display: flex;
  overflow-x: scroll;
  width: 100%;

  ::-webkit-scrollbar {
    display: none;
  }
`;
