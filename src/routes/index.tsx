import Carousel from "~/components/Carousel";

const titles = [
  "Gabe Rogan",
  "a mobile developer",
  "a web developer",
  "a full stack engineer",
  "a software consultant",
];

export default function Home() {
  return (
    <main>
      {/* Hero */}
      {/* <div>
        <h1>
          Hey folks, I'm <span>{titles[0]}</span>
        </h1>
        <div>
          Building a successful product is a challenge. I create delightful user experiences and
          develop software to save your business time and money.
        </div>
        <div>
          <img src="/icons/phone-tablet.svg" />
          <span>Download Resume</span>
        </div>
      </div>
      <img src="/coder.jpg" /> */}
      {/* Worked with */}
      {/* <h2>Worked with</h2>
      <div>
        <img src="/icons/eightsleep.svg" />
        <img src="/icons/betql.svg" />
        <img src="/icons/audacy.svg" />
        <img src="/icons/uconn.svg" />
        <img src="/icons/prismic.svg" />
        <img src="/icons/ibm.svg" />
        <img src="/icons/lingumi.svg" />
      </div> */}
      {/* Screenshots */}
      <Carousel
        height="400px"
        images={[
          "/screenshots/eight1.jpg",
          "/screenshots/eight2.jpg",
          "/screenshots/eight3.jpg",
          "/screenshots/betql1.jpg",
          "/screenshots/betql2.jpg",
          "/screenshots/betql3.jpg",
          "/screenshots/audacy1.jpg",
          "/screenshots/audacy2.jpg",
          "/screenshots/prismic1.jpg",
        ]}
      ></Carousel>
      {/* Contact */}
      {/* <div>
        <img src="/profile.jpg" />
        <div>
          Get in touch with <img src="/icons/calendly.svg" />
        </div>
      </div>
      <div>
        <div>
          <img src="/icons/email.svg" />
          <span>rogangabe@gmail.com</span>
        </div>
        <a href="https://linkedin.com/in/gaberogan">
          <img src="/icons/linkedin.svg" />
          <span>linkedin.com/in/gaberogan</span>
        </a>
        <a href="https://github.com/gaberogan">
          <img src="/icons/github.svg" />
          <span>github.com/gaberogan</span>
        </a>
      </div> */}
    </main>
  );
}
