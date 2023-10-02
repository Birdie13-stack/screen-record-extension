import React from "react";
import record from "../assets/record.jpg";
import share from "../assets/share.jpg";
import refresh from "../assets/refresh.jpg";
import repo from "../assets/repo.jpg";

function Features() {
  return (
    <div className="features">
      <h2>Features</h2>
      <p className="features-desc">Key Highlights of our extension</p>

      <div className="features-content">
        <div className="features-text">
          <div className="feature">
            <img src={record} alt="" className="feature-img" />
            <div className="text">
              <h3>Simple Screen Recording</h3>
              <p className="description">
                Effortless screen recording for everyone. Record with ease, no
                tech expertise required.
              </p>
            </div>
          </div>
          <div className="feature">
            <img src={share} alt="" />
            <div className="text">
              <h3>Easy-to-Share URL</h3>
              <p className="description">
                Share your recordings instantly with a single link. No
                attachments, no downloads.
              </p>
            </div>
          </div>
          <div className="feature">
            <img src={refresh} alt="" />
            <div className="text">
              <h3>Revisit Recordings</h3>
              <p className="description">
                Access and review your past content effortlessly. Your
                recordings, always at your fingertips.
              </p>
            </div>
          </div>
        </div>
        <img src={repo} alt="An image of the Video Repository" />
      </div>
    </div>
  );
}

export default Features;
