import React from "react";
import { Link } from "react-router-dom";

const Notfound = () => {
  return (
    <div className="min-vh-100 d-flex flex-column align-items-center justify-content-center text-center p-4">
      <h1 className="display-1 fw-bold" style={{ color: "#4A154B" }}>
        404
      </h1>
      <h2 className="mb-4">Page Not Found</h2>
      <p className="lead mb-5">We couldn't find the page you're looking for.</p>
      <Link
        to="/"
        className="btn btn-primary px-4 py-2"
        style={{ backgroundColor: "#4A154B", borderColor: "#4A154B" }}
      >
        Back to Home
      </Link>
    </div>
  );
};

export default Notfound;
