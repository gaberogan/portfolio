import { css } from "@emotion/css";

export default function CalendlyCard() {
  const launchCalendly = () => {
    window.Calendly.initPopupWidget({ url: "https://calendly.com/gabe-rogan/30min" });
  };

  return (
    <div onClick={launchCalendly} id="contact" class={style}>
      <img class="profile" src="/profile.jpg" />
      <div class="button">
        Get in touch with <img class="logo" src="/icons/calendly.svg" />
      </div>
    </div>
  );
}

const style = css`
  display: flex;
  align-items: center;
  gap: 24px;
  color: #19254b;
  font-weight: bold;
  font-size: 18px;

  .profile {
    width: 100px;
    border-radius: 100px;
  }

  .button {
    display: flex;
    align-items: center;
    gap: 8px;
    background-color: #fff;
    border-radius: 100px;
    padding: 12px 32px;
    cursor: pointer;

    :hover {
      opacity: 0.9;
    }
  }

  .logo {
    height: 24px;
  }

  @media (max-width: 991px) {
    flex-direction: column;
  }
`;
