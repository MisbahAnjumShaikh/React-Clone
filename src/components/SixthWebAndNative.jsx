import "./SixthWebAndNative.css";
import { Fragment } from "react";
import SixthCards from "./SixthCards.jsx";

const SixthWebAndNative = () => {
  return (
    <Fragment>
      <section className="sixthSec">
        <h1 className="sixthHeading text-center mb-4">
          Use the best from <br /> every platform
        </h1>
        <p className="sixthPara text-center mb-5">
          People love web and native apps for different reasons. React lets you
          build both <br /> web apps and native apps using the same skills. It
          leans upon each platform’s <br /> unique strengths to let your
          interfaces feel just right on every platform.
        </p>
        <div className="d-flex gap-2 cards">
        <SixthCards sixthCardsHeading={"Stay true to the web"} className="webCard" sixthCardsPara={"People expect web app pages to load fast. On the server, React lets you start streaming HTML while you’re still fetching data, progressively filling in the remaining content before any JavaScript code loads. On the client, React can use standard web APIs to keep your UI responsive even in the middle of rendering."}/>

        <SixthCards sixthCardsHeading={"Go truly native"} sixthCardsPara={"People expect native apps to look and feel like their platform." <a>React Native</a>  "and" Expo "let you build apps in React for Android, iOS, and more. They look and feel native because their UIs are truly native. It’s not a web view—your React components render real Android and iOS views provided by the platform."}/>
        </div>
      </section>
    </Fragment>
  );
};

export default SixthWebAndNative;
