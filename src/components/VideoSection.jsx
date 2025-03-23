import React, { useEffect, useRef } from "react";
import { PlayCircle } from "lucide-react";

const VideoSection = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate__animated", "animate__fadeIn");
          }
        });
      },
      {
        threshold: 0.1,
      }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => {
      if (containerRef.current) {
        observer.unobserve(containerRef.current);
      }
    };
  }, []);

  return (
    <section className="py-5 bg-light">
      <div className="container">
        <div
          ref={containerRef}
          className="row align-items-center g-4 opacity-0 transition"
        >
          <div className="col-lg-6">
            <div className="position-relative rounded-lg shadow-lg">
              <div className="ratio ratio-16x9 bg-dark rounded-lg overflow-hidden">
                <div
                  className="bg-image"
                  style={{
                    backgroundImage:
                      "url('https://a.slack-edge.com/b4438/marketing/img/homepage/self-serve-campaign/inline-images/hp-card-01.jpg')",
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                  }}
                ></div>
                <div className="d-flex align-items-center justify-content-center">
                  <button className="btn btn-link rounded-circle p-2">
                    <div
                      className="bg-white rounded-circle d-flex align-items-center justify-content-center shadow-lg"
                      style={{
                        width: "64px",
                        height: "64px",
                        transition: "transform 0.3s",
                      }}
                    >
                      <PlayCircle size={42} style={{ color: "#4A154B" }} />
                    </div>
                  </button>
                </div>
                <div className="position-absolute bottom-0 end-0 m-3">
                  <span className="badge bg-primary px-3 py-2 fw-medium">
                    FUTURE
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-6">
            <h2 className="display-5 fw-bold mb-4">
              Now is your moment to build a better tomorrow
            </h2>
            <p className="fs-5 text-secondary mb-4">
              We've seen what the future can be. Now it's time to decide what it
              will be.
            </p>
            <a href="#" className="btn btn-outline-dark px-4 py-2 fw-medium">
              WATCH VIDEO
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VideoSection;
