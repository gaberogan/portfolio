import { css } from "@emotion/css";

export default function SocialLinks() {
  return (
    <div class={style}>
      <div class="link">
        <img src="/icons/email.svg" />
        <span>rogangabe@gmail.com</span>
      </div>
      <a href="https://linkedin.com/in/gaberogan" target="_blank">
        <img src="/icons/linkedin.svg" />
        <span>linkedin.com/in/gaberogan</span>
      </a>
      <a href="https://github.com/gaberogan" target="_blank">
        <img src="/icons/github.svg" />
        <span>github.com/gaberogan</span>
      </a>
    </div>
  );
}

const style = css`
  display: flex;
  gap: 64px;

  a,
  .link {
    display: flex;
    align-items: center;
    gap: 16px;
    color: white;
    font-weight: 600;
    text-decoration: none;
  }

  @media (max-width: 991px) {
    flex-direction: column;
    gap: 32px;
  }
`;
