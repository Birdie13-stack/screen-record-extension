import React from "react";
import one from "../assets/1.jpg";
import two from "../assets/2.jpg";
import three from "../assets/3.jpg";
import screen from "../assets/screen.jpg";

function Work() {
  return (
    <div className="work">
      <h2>How It Works</h2>

      <section className="work-section">
        <div>
          <img src={one} alt="" />

          <h3>Record Screen</h3>

          <p>
            Click the "Start Recording" button in our extension. choose which
            part of your screen to capture and who you want to send it to.
          </p>

          <img src={screen} alt="" className="screen-img" />
        </div>
        <div>
          <img src={two} alt="" />

          <h3>Share Your Recording</h3>

          <p>
            We generate a shareable link for your video. Simply send it to your
            audience via email or copy the link to send via any platform.
          </p>

          <img src={screen} alt="" className="screen-img" />
        </div>
        <div>
          <img src={three} alt="" />

          <h3>Learn Effortlessly</h3>

          <p>
            Recipients can access your video effortlessly through the provided
            link, with our user-friendly interface suitable for everyone.
          </p>

          <img src={screen} alt="" className="screen-img" />
        </div>
      </section>
    </div>
  );
}

export default Work;
