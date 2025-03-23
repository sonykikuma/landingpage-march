import React, { useState, useEffect } from "react";
import { Menu, X, Search } from "lucide-react";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed-top transition ${
        scrolled ? "bg-white shadow-sm py-2" : "bg-transparent py-3"
      }`}
    >
      <div className="container d-flex align-items-center justify-content-between">
        {/* Logo */}
        <div className="d-flex align-items-center">
          <a
            href="/"
            className="d-flex align-items-center text-decoration-none"
          >
            <svg
              viewBox="0 0 54 54"
              className="me-2"
              style={{ height: "40px", width: "40px" }}
            >
              <g fill="none">
                <path
                  d="M19.712.133a5.381 5.381 0 0 0-5.376 5.387 5.381 5.381 0 0 0 5.376 5.386h5.376V5.52A5.381 5.381 0 0 0 19.712.133m0 14.365H5.376A5.381 5.381 0 0 0 0 19.884a5.381 5.381 0 0 0 5.376 5.387h14.336a5.381 5.381 0 0 0 5.376-5.387 5.381 5.381 0 0 0-5.376-5.386"
                  fill="#E01E5A"
                ></path>
                <path
                  d="M53.76 19.884a5.381 5.381 0 0 0-5.376-5.386 5.381 5.381 0 0 0-5.376 5.386v5.387h5.376a5.381 5.381 0 0 0 5.376-5.387m-14.336 0V5.52A5.381 5.381 0 0 0 34.048.133a5.381 5.381 0 0 0-5.376 5.387v14.364a5.381 5.381 0 0 0 5.376 5.387 5.381 5.381 0 0 0 5.376-5.387"
                  fill="#36C5F0"
                ></path>
                <path
                  d="M34.048 54a5.381 5.381 0 0 0 5.376-5.387 5.381 5.381 0 0 0-5.376-5.386h-5.376v5.386A5.381 5.381 0 0 0 34.048 54m0-14.365h14.336a5.381 5.381 0 0 0 5.376-5.386 5.381 5.381 0 0 0-5.376-5.387H34.048a5.381 5.381 0 0 0-5.376 5.387 5.381 5.381 0 0 0 5.376 5.386"
                  fill="#2EB67D"
                ></path>
                <path
                  d="M0 34.249a5.381 5.381 0 0 0 5.376 5.386 5.381 5.381 0 0 0 5.376-5.386v-5.387H5.376A5.381 5.381 0 0 0 0 34.25m14.336-.001v14.364A5.381 5.381 0 0 0 19.712 54a5.381 5.381 0 0 0 5.376-5.387V34.25a5.381 5.381 0 0 0-5.376-5.387 5.381 5.381 0 0 0-5.376 5.387"
                  fill="#ECB22E"
                ></path>
              </g>
            </svg>
            <span className="fs-4 fw-bold" style={{ color: "#4A154B" }}>
              slack
            </span>
          </a>
        </div>

        {/* Desktop Navigation */}
        <div className="d-none d-md-flex align-items-center">
          <div className="d-flex align-items-center me-4">
            <div className="dropdown me-3">
              <button
                className="btn nav-link dropdown-toggle text-dark border-0"
                type="button"
                id="productDropdown"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Product
              </button>
            </div>
            <a href="#" className="nav-link me-3 text-dark">
              Enterprise
            </a>
            <a href="#" className="nav-link me-3 text-dark">
              Resources
            </a>
            <a href="#" className="nav-link me-3 text-dark">
              Pricing
            </a>
          </div>
        </div>

        {/* Right Side Actions */}
        <div className="d-none d-md-flex align-items-center">
          <button className="btn btn-sm btn-light rounded-circle me-3">
            <Search size={20} className="text-secondary" />
          </button>
          <a href="#" className="me-3 text-dark fw-medium text-decoration-none">
            Sign in
          </a>
          <a href="#" className="btn btn-outline-secondary me-2">
            TALK TO SALES
          </a>
          <a
            href="#"
            className="btn btn-primary"
            style={{ backgroundColor: "#4A154B", borderColor: "#4A154B" }}
          >
            TRY FOR FREE
          </a>
        </div>

        {/* Mobile menu button */}
        <div className="d-md-none">
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="btn btn-sm btn-light rounded-1 text-dark"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        className={`container d-md-none ${
          mobileMenuOpen ? "d-block" : "d-none"
        }`}
      >
        <div className="py-3">
          <a href="#" className="d-block px-3 py-2 text-dark fw-medium">
            Product
          </a>
          <a href="#" className="d-block px-3 py-2 text-dark fw-medium">
            Enterprise
          </a>
          <a href="#" className="d-block px-3 py-2 text-dark fw-medium">
            Resources
          </a>
          <a href="#" className="d-block px-3 py-2 text-dark fw-medium">
            Pricing
          </a>
          <div className="pt-4 pb-3 border-top border-light">
            <div className="px-3">
              <a
                href="#"
                className="d-block w-100 px-3 py-2 text-center text-dark fw-medium"
              >
                Sign in
              </a>
            </div>
            <div className="mt-3 px-3">
              <a
                href="#"
                className="d-block w-100 btn btn-outline-secondary mb-2"
              >
                TALK TO SALES
              </a>
              <a
                href="#"
                className="d-block w-100 btn btn-primary"
                style={{ backgroundColor: "#4A154B", borderColor: "#4A154B" }}
              >
                TRY FOR FREE
              </a>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
