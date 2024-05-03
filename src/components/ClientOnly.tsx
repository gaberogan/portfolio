import { JSX, createEffect, createSignal } from "solid-js";

export default function ClientOnly(props: { children: JSX.Element }) {
  const [show, setShow] = createSignal(false);

  createEffect(() => setShow(true));

  return <>{show() ? props.children : null}</>;
}
