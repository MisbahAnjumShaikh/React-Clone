import { Fragment } from "react";

const random = () => {
    return (
      <Fragment>
        <h1 className="fs-1 text-center react-hero-heading">React</h1>
        <h2 className="text-center hero-def mb-4">The library for web and native user interfaces</h2>
        <div className="d-flex justify-content-center gap-2">
          <a
            href="https://react.dev/learn"
            className="rounded-pill fw-semibold hero-learnReactBtn px-4 py-2"
          >
            Learn React
          </a>
          <a
            href="https://react.dev/reference/react"
            className="rounded-pill fw-semibold hero-APIReferenceBtn px-4 py-2"
          >
            API Reference
          </a>
        </div>
      </Fragment>
    );
  };
  
  export default random