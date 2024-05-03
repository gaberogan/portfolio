import { css } from "@emotion/css";
import { animate } from "motion";
import { createEffect, createSignal, mergeProps, untrack } from "solid-js";
import { wait } from "~/services/wait";

const commonStyle = { position: "absolute", left: 0, top: 0 } as const;
const fadeTopStyle = { ...commonStyle, transform: "translateY(-70%) scaleY(0)", opacity: 0 };
const visibleStyle = { ...commonStyle, transform: "translateY(0)", opacity: 1 };
const fadeBottomStyle = { ...commonStyle, transform: "translateY(70%)", opacity: 0 };

type CarouselTextProps = {
  options: string[];
  duration: number;
  delay: number;
  class?: string;
};

export default function CarouselText(props: CarouselTextProps) {
  let ref1: HTMLElement | null = null;
  let ref2: HTMLElement | null = null;

  const [options, setOptions] = createSignal(props.options);

  const animateText = async () => {
    await wait(props.delay * 1000);

    if (!ref1 || !ref2) {
      return;
    }

    animate(
      ref1!,
      { transform: fadeTopStyle.transform, opacity: fadeTopStyle.opacity },
      { easing: "ease-out", duration: props.duration }
    );
    animate(
      ref2!,
      { transform: visibleStyle.transform, opacity: visibleStyle.opacity },
      { easing: "ease-out", duration: props.duration }
    );

    await wait(props.duration * 1000 + 100 /* motion needs extra time to settle */);

    if (!ref1 || !ref2) {
      return;
    }

    setOptions([...options().slice(1), options()[0]]);
    Object.assign(ref1.style, visibleStyle);
    Object.assign(ref2.style, fadeBottomStyle);

    untrack(animateText);
  };

  createEffect(animateText);

  return (
    <div class={props.class} style={{ position: "relative", "white-space": "nowrap" }}>
      <div>&nbsp;</div>
      <div style={visibleStyle} ref={(el) => (ref1 = el)}>
        {options()[0]}
      </div>
      <div style={fadeBottomStyle} ref={(el) => (ref2 = el)}>
        {options()[1]}
      </div>
    </div>
  );
}

const style = css``;
