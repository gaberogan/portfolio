import { For, createEffect, untrack } from "solid-js";
import { css } from "@emotion/css";
import _ from "lodash";

const NUM_REPEATS = 4;

type CarouselProps = {
  images: string[];
  height: string;
  class?: string;
  speed?: number;
  disabled?: boolean;
};

export default function Carousel(props: CarouselProps) {
  let scrollRef: HTMLElement | null = null;
  let ref: HTMLElement | null = null;
  let scrollLeftFloat = 0;

  const getCarouselWidth = () => ref!.scrollWidth / NUM_REPEATS;

  const repeatedImages = () => {
    const arr: string[] = [];
    _.times(props.disabled ? 1 : NUM_REPEATS, () => arr.push(...props.images));
    return arr;
  };

  createEffect(() => {
    // Auto scroll the carousel
    const animate = () => {
      if (ref) {
        const hovering = ref.matches(":hover");
        if (props.disabled) {
          ref.style.transform && (ref.style.transform = "");
        } else if (!hovering) {
          scrollLeftFloat = (scrollLeftFloat + (props.speed || 1)) % getCarouselWidth();
          ref.style.transform = `translateX(${-scrollLeftFloat}px)`;
        }
        requestAnimationFrame(animate);
      }
    };
    untrack(animate);

    // Infinite loop scroll on scroll
    scrollRef?.addEventListener("scroll", () => {
      scrollRef!.scrollLeft = scrollRef!.scrollLeft % getCarouselWidth();
    });
  });

  return (
    <div class={style} ref={(el) => (scrollRef = el)}>
      <div ref={(el) => (ref = el)} class={`carousel ${props.class || ""}`}>
        <For each={repeatedImages()}>
          {(src) => <img src={src} style={{ height: props.height }}></img>}
        </For>
      </div>
    </div>
  );
}

const style = css`
  overflow-x: scroll;
  width: 100%;

  .carousel {
    display: flex;
    width: 100%;
  }

  ::-webkit-scrollbar {
    display: none;
  }
`;
