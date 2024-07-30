import React from "react";

export const Hero = () => {
  return (
    <>
      <div className="hero-section">
        <div className="container text-center">
          <div className="row align-items-center justify-content-center">
            <div className="col-lg-6">
              <h1 className="display-4 font-weight-bold">
                Experience the Art of Wine Making
              </h1>
              <p className="lead mt-3 mb-4">
                Discover our handcrafted wines made from the finest grapes and
                traditional techniques. Join us on a journey of exceptional
                taste and quality.
              </p>
              <a href="#learn-more" className="btn btn-primary btn-lg">
                Learn More
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
