import React, { useEffect, useRef } from "react";

const Hero = () => {
  const headingRef = useRef(null);
  const subHeadingRef = useRef(null);
  const ctaRef = useRef(null);
  const imageRef = useRef(null);

  useEffect(() => {
    const heading = headingRef.current;
    const subHeading = subHeadingRef.current;
    const cta = ctaRef.current;
    const image = imageRef.current;

    // Add animation classes
    if (heading) heading.classList.add("animate__animated", "animate__fadeIn");
    if (subHeading) {
      subHeading.classList.add("animate__animated", "animate__fadeIn");
      subHeading.style.animationDelay = "0.2s";
    }
    if (cta) {
      cta.classList.add("animate__animated", "animate__fadeIn");
      cta.style.animationDelay = "0.4s";
    }
    if (image) {
      image.classList.add("animate__animated", "animate__fadeIn");
      image.style.animationDelay = "0.3s";
    }
  }, []);

  return (
    <section
      className="pt-5 pb-4"
      style={{
        //backgroundColor: "#1A1D2D",
        paddingTop: "7rem",
      }}
    >
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-6 text-center text-lg-start mb-4 mb-lg-0">
            <h1
              ref={headingRef}
              className="display-4 fw-bold  mb-4 opacity-0"
              style={{ fontFamily: "'Larsseit', sans-serif" }}
            >
              Slack is where the future works
            </h1>
            <p
              ref={subHeadingRef}
              className="fs-5 mb-4 opacity-0 mx-auto mx-lg-0"
              style={{ maxWidth: "500px" }}
            >
              Transform the way you work with one place for everyone and
              everything you need to get stuff done.
            </p>
            <div
              ref={ctaRef}
              className="d-flex flex-column flex-sm-row justify-content-center justify-content-lg-start gap-3 opacity-0"
            >
              <a
                href="#"
                className="btn btn-primary px-4 py-2 fw-medium"
                style={{ backgroundColor: "#4A154B", borderColor: "#4A154B" }}
              >
                TRY FOR FREE
              </a>

              <a
                href="#"
                className="btn btn-light d-flex align-items-center justify-content-center px-4 py-2 fw-medium text-white bg-primary"
                // style={{ borderColor: "#4A154B" }}
              >
                <span
                  className="d-flex align-items-center justify-content-center rounded-circle me-2"
                  style={{
                    backgroundColor: "white",
                    width: "28px",
                    height: "28px",
                  }}
                >
                  <img
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c1/Google_%22G%22_logo.svg/768px-Google_%22G%22_logo.svg.png"
                    alt="Google Logo"
                    width="16"
                    height="16"
                  />
                </span>
                SIGN UP WITH GOOGLE
              </a>
            </div>
          </div>
          <div ref={imageRef} className="col-lg-6 opacity-0">
            <div className="position-relative">
              <div
                className="card shadow-lg border-0"
                style={{ backgroundColor: "#3F0E40", borderRadius: "8px" }}
              >
                <div
                  className="d-flex align-items-center p-2"
                  style={{ backgroundColor: "#350D36" }}
                >
                  <div className="d-flex align-items-center me-2">
                    <div
                      className="rounded-circle bg-danger me-1"
                      style={{ width: "12px", height: "12px" }}
                    ></div>
                    <div
                      className="rounded-circle bg-warning me-1"
                      style={{ width: "12px", height: "12px" }}
                    ></div>
                    <div
                      className="rounded-circle bg-success"
                      style={{ width: "12px", height: "12px" }}
                    ></div>
                  </div>
                  <div
                    className="px-3 py-1 rounded text-white small"
                    style={{ backgroundColor: "#5D3D5E" }}
                  >
                    # project-unicorn
                  </div>
                </div>
                <div className="d-flex">
                  <div
                    className="p-3 text-white"
                    style={{ width: "25%", backgroundColor: "#350D36" }}
                  >
                    <div className="mb-3">
                      <p className="text-white-50 small mb-2">Channels</p>
                      <div className="d-flex align-items-center mb-1">
                        <span className="text-white-50 me-2">#</span>
                        <span>general</span>
                      </div>
                      <div
                        className="d-flex align-items-center mb-1 px-2 py-1 rounded"
                        style={{ backgroundColor: "#1164A3" }}
                      >
                        <span className="text-white-50 me-2">#</span>
                        <span>project-unicorn</span>
                      </div>
                      <div className="d-flex align-items-center">
                        <span className="text-white-50 me-2">#</span>
                        <span>random</span>
                      </div>
                    </div>
                    <div>
                      <p className="text-white-50 small mb-2">
                        Direct messages
                      </p>
                      <div className="d-flex align-items-center mb-1">
                        <div
                          className="me-2 rounded-circle bg-success"
                          style={{ width: "8px", height: "8px" }}
                        ></div>
                        <span>slackbot</span>
                      </div>
                    </div>
                  </div>
                  <div className="p-3 bg-white" style={{ width: "75%" }}>
                    <div className="border-bottom pb-3 mb-3">
                      <div className="d-flex align-items-center mb-2">
                        <div className="fs-5 fw-semibold">
                          # project-unicorn
                        </div>
                        <div className="ms-auto d-flex align-items-center text-muted">
                          <span className="small">5</span>
                        </div>
                      </div>
                      <div className="d-flex align-items-center">
                        <div className="d-flex">
                          <div
                            className="rounded-circle bg-primary border border-white"
                            style={{
                              width: "20px",
                              height: "20px",
                              marginRight: "-5px",
                            }}
                          ></div>
                          <div
                            className="rounded-circle bg-success border border-white"
                            style={{
                              width: "20px",
                              height: "20px",
                              marginRight: "-5px",
                            }}
                          ></div>
                          <div
                            className="rounded-circle bg-warning border border-white"
                            style={{
                              width: "20px",
                              height: "20px",
                              marginRight: "-5px",
                            }}
                          ></div>
                          <div
                            className="rounded-circle bg-danger border border-white"
                            style={{ width: "20px", height: "20px" }}
                          ></div>
                        </div>
                      </div>
                    </div>
                    <div className="d-flex mb-3">
                      <div
                        className="rounded-circle bg-purple me-3 flex-shrink-0"
                        style={{ width: "32px", height: "32px" }}
                      ></div>
                      <div>
                        <div className="d-flex align-items-center mb-1">
                          <span className="fw-semibold small">Zoe Maxwell</span>
                          <span className="text-muted small ms-2">
                            10:32 AM
                          </span>
                        </div>
                        <p className="small mb-0">Are we ready for launch?</p>
                      </div>
                    </div>
                    <div className="d-flex">
                      <div
                        className="rounded-circle bg-warning me-3 flex-shrink-0"
                        style={{ width: "32px", height: "32px" }}
                      ></div>
                      <div>
                        <div className="d-flex align-items-center mb-1">
                          <span className="fw-semibold small">Matt Brewer</span>
                          <span className="text-muted small ms-2">
                            10:35 AM
                          </span>
                        </div>
                        <p className="small mb-0">Here's the run of show</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="position-absolute p-1 top-0 end-0 translate-middle-y bg-white text-dark fw-bold fs-6 d-flex align-items-center justify-content-center rounded"
                style={{
                  width: "32px",
                  height: "32px",
                  transform: "rotate(12deg)",
                }}
              >
                <span>
                  <img
                    src="/thumbs-up.svg"
                    alt="thumbs up"
                    width="16"
                    height="16"
                  />
                </span>{" "}
                3
              </div>
              <div
                className="position-absolute top-50 end-0 translate-middle-y bg-white shadow text-dark fw-bold fs-6 d-flex align-items-center justify-content-center rounded-circle"
                style={{
                  width: "32px",
                  height: "32px",
                  transform: "rotate(6deg)",
                }}
              >
                8
              </div>
              <div
                className="position-absolute bottom-0 start-0 translate-middle-y bg-white shadow text-dark fw-bold fs-6 d-flex align-items-center justify-content-center rounded-circle"
                style={{
                  width: "32px",
                  height: "32px",
                  transform: "rotate(-12deg)",
                }}
              >
                5
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
