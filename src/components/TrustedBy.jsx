import React, { useEffect, useRef } from "react";

const TrustedBy = () => {
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
    <section className="py-5 bg-white">
      <div ref={containerRef} className="container opacity-0">
        <div className="row justify-content-center align-items-center g-4">
          <div className="col-6 col-sm-4 col-md-3 col-lg-2 text-center">
            <img
              src="/fox.png"
              alt="FOX"
              className="img-fluid"
              style={{ maxWidth: "120px", height: "auto" }}
            />
          </div>
          <div className="col-6 col-sm-4 col-md-3 col-lg-2 text-center">
            LONELY PLANET
            <img
              src="/lonely-planet.png"
              alt="Lonely Planet"
              className="img-fluid"
              style={{ maxWidth: "120px", height: "auto" }}
            />
          </div>
          <div className="col-6 col-sm-4 col-md-3 col-lg-2 text-center">
            <img
              src="/intuit.png"
              alt="Intuit"
              className="img-fluid"
              style={{ maxWidth: "120px", height: "auto" }}
            />
          </div>
          <div className="col-6 col-sm-4 col-md-3 col-lg-2 text-center">
            <img
              src="/kiva.png"
              alt="Kiva"
              className="img-fluid"
              style={{ maxWidth: "120px", height: "auto" }}
            />
          </div>
          <div className="col-6 col-sm-4 col-md-3 col-lg-2 text-center">
            <img
              src="/target.jpg"
              alt="Target"
              className="img-fluid"
              style={{ maxWidth: "120px", height: "auto" }}
            />
          </div>
          <div className="col-6 col-sm-4 col-md-3 col-lg-2 text-center">
            <img
              src="/carvana.jpg"
              alt="Carvana"
              className="img-fluid"
              style={{ maxWidth: "120px", height: "auto" }}
            />

            {/* <svg
              viewBox="0 0 350 100"
              xmlns="http://www.w3.org/2000/svg"
              className="img-fluid"
              style={{ maxWidth: "100%", height: "auto" }}
            >
              <path
                fill="#CC0000"
                d="M156.1,30.8c-20.4,0-35.5,15.3-35.5,35c0,19.4,15.9,35,36,35c9.3,0,16.7-2.6,23.3-8.1v-20.8 c-5.9,6.5-12,9.3-19.4,9.3c-10.9,0-19.4-8.5-19.4-19.9c0-11.1,8.7-19.9,19.7-19.9c7.2,0,13.5,3.2,19.1,9.3V30C174.3,33.9,166.2,30.8,156.1,30.8z M130.1,41.2H66.9v18.1h23.1v24.9c-4.2,2.5-9.5,3.9-14.5,3.9c-11.7,0-19.6-7.3-19.6-18.2c0-10.4,8.3-18.2,19.1-18.2c4.5,0,8.9,1.4,12.8,4.1 l14.1-14.1c-7.8-6.5-17.6-9.9-27.4-9.9c-21.8,0-38,16.5-38,38.3c0,21.5,16.4,38.2,38,38.2c8.9,0,16.8-2.3,25.6-7.6V41.2z M236.3,41.2h-63.2v18.1h23.1v24.9c-4.2,2.5-9.5,3.9-14.5,3.9c-11.7,0-19.6-7.3-19.6-18.2c0-10.4,8.3-18.2,19.1-18.2c4.5,0,8.9,1.4,12.8,4.1 l14.1-14.1c-7.8-6.5-17.6-9.9-27.4-9.9c-21.8,0-38,16.5-38,38.3c0,21.5,16.4,38.2,38,38.2c8.9,0,16.8-2.3,25.6-7.6V41.2z M293.3,99.2h19.4V32.4h-19.4V99.2z M283.2,32.4h-45.7v66.8h19.4V79.6h26.3V62.5h-26.3V49.5h26.3V32.4z M303.2,9.9c-6.7,0-11.8,5-11.8,11.5 s5.1,11.5,11.8,11.5c6.7,0,11.8-5,11.8-11.5S309.9,9.9,303.2,9.9z M317.4,32.4v66.8h19.4V32.4H317.4z"
              />
            </svg> */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrustedBy;
