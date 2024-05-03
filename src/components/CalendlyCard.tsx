import { css } from "@emotion/css";

export default function CalendlyCard() {
  return (
    <div id="contact" class={style}>
      <img class="profile" src="/profile.jpg" />
      <div class="button">
        Get in touch with <img src="/icons/calendly.svg" />
      </div>
    </div>
  );
}

const style = css`
  display: flex;
  align-items: center;
  gap: 30px;
  color: #19254b;
  font-weight: bold;
  font-size: 22px;

  .profile {
    width: 120px;
    border-radius: 100px;
  }

  .button {
    display: flex;
    align-items: center;
    gap: 12px;
    background-color: #fff;
    border-radius: 100px;
    padding: 12px 32px;
  }

  @media (max-width: 991px) {
    flex-direction: column;
  }
`;
