import "./Hero.css";
import heroImg from "../assets/images/hero-sec.png";
import { Fragment } from "react";
const Hero = () => {
  return (
    <Fragment>
      <section className="heroMain">
        <img
          src={heroImg}
          alt={"React"}
          className="heroImg img-fluid mx-auto d-block mb-3"
        />
        <h1 className="fs-1 text-center react-hero-heading mb-3">React</h1>
        <h2 className="text-center hero-def fw-medium">
          The library for web and native user interfaces
        </h2>
        <div className="d-flex justify-content-center gap-2">
          <div>
            <a
              href={"https://react.dev/learn"}
              className="rounded-pill fw-semibold hero-learnReact px-4 py-2"
            >
              Learn React
            </a>
          </div>
          <div>
            <a
              href={"https://react.dev/reference/react"}
              className="rounded-pill fw-semibold hero-APIReference px-4 py-2"
            >
              API Reference
            </a>
          </div>
        </div>
      </section>
    </Fragment>
  );
};

export default Hero;
