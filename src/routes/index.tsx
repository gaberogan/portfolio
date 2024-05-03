import { css } from "@emotion/css";
import CalendlyCard from "~/components/CalendlyCard";
import Hero from "~/components/Hero";
import SocialLinks from "~/components/SocialLinks";
import WorkedWith from "~/components/WorkedWith";

export default function Home() {
  return (
    <main class={style}>
      <Hero />
      <WorkedWith />
      <CalendlyCard />
      <SocialLinks />
    </main>
  );
}

const style = css`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 48px;
  padding-bottom: 48px;
`;
