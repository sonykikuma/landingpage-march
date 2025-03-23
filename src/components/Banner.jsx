import React, { useState } from "react";
import { X } from "lucide-react";

const Banner = () => {
  const [isVisible, setIsVisible] = useState(true);

  if (!isVisible) return null;

  return (
    <div
      className="text-white py-3 animate__animated animate__fadeIn"
      style={{
        backgroundColor: "#1264A3",
        position: "relative",
        zIndex: "1",
        borderRadius: "28px",
        margin: "0 10px",
      }}
    >
      <div className="container d-flex flex-column flex-sm-row align-items-center justify-content-center justify-content-sm-between">
        <div className="flex-grow-1 text-center text-sm-start">
          <p className="mb-0">
            Slack is your digital HQ. Meet the new features keeping teams
            connected in a work-from-anywhere world.
            <a
              href="#"
              className="ms-2 fw-medium text-white text-decoration-underline"
            >
              Let's go →
            </a>
          </p>
        </div>
        <button
          onClick={() => setIsVisible(false)}
          className="mt-2 mt-sm-0 ms-sm-4 btn btn-sm text-white border-0"
          aria-label="Close banner"
        >
          <X size={18} />
        </button>
      </div>
    </div>
  );
};

export default Banner;
