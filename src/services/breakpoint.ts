import { createGlobalSignal } from "./solid";

const isBrowser = typeof window !== "undefined";

type Breakpoint = "mobile" | "desktop";

const calculateBreakpoint = () => {
  if (!isBrowser) {
    return "desktop";
  }

  if (window.innerWidth <= 991) {
    return "mobile";
  }

  return "desktop";
};

const [_breakpoint, setBreakpoint] = createGlobalSignal<Breakpoint>(calculateBreakpoint());
export const breakpoint = _breakpoint;

isBrowser && window.addEventListener("resize", () => setBreakpoint(calculateBreakpoint()));
