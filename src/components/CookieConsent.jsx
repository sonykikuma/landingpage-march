import React, { useState } from "react";
import { X } from "lucide-react";

const CookieConsent = () => {
  const [isVisible, setIsVisible] = useState(true);

  if (!isVisible) return null;

  return (
    <div
      className="position-fixed bottom-0 end-0 m-4 shadow-lg bg-white rounded-3 p-4 animate__animated animate__fadeIn"
      style={{ maxWidth: "400px", zIndex: 1050 }}
    >
      <button
        onClick={() => setIsVisible(false)}
        className="btn-close position-absolute top-0 end-0 m-2"
        aria-label="Close"
      ></button>

      <div className="mb-3">
        <p className="small text-secondary mb-3">
          This website uses cookies to enhance user experience and to analyze
          performance and traffic on our website. We also share information
          about your use of our site with our social media, advertising and
          analytics partners.{" "}
          <a href="#" className="text-primary">
            More info
          </a>
        </p>
      </div>

      <button
        onClick={() => setIsVisible(false)}
        className="btn btn-primary w-100 py-3 fw-medium"
        style={{ backgroundColor: "#4A154B", borderColor: "#4A154B" }}
      >
        ACCEPT ALL COOKIES
      </button>

      <div className="mt-3 bg-light rounded p-3 d-flex align-items-start">
        <div
          className="rounded-circle bg-purple-100 d-flex align-items-center justify-content-center me-3 flex-shrink-0"
          style={{ width: "32px", height: "32px", backgroundColor: "#F3E5F5" }}
        >
          <span style={{ color: "#673AB7" }}>👋</span>
        </div>
        <div>
          <p className="small text-secondary mb-0">
            Hey there 👋 Want to know something cool?
          </p>
        </div>
      </div>
    </div>
  );
};

export default CookieConsent;
