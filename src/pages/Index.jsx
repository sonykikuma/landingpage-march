import React, { useEffect } from "react";
import Navbar from "../components/Navbar";
import Banner from "../components/Banner";
import Hero from "../components/Hero";
import TrustedBy from "../components/TrustedBy";
import VideoSection from "../components/VideoSection";
import CookieConsent from "../components/CookieConsent";

const Index = () => {
  useEffect(() => {
    // Smooth scroll initialization
    document.documentElement.style.scrollBehavior = "smooth";

    return () => {
      document.documentElement.style.scrollBehavior = "auto";
    };
  }, []);

  return (
    <div className="min-vh-100 d-flex flex-column">
      <Navbar />
      <div className="pt-5 mt-4">
        <Banner />
        <main>
          <Hero />
          <TrustedBy />
          <VideoSection />
        </main>
      </div>
      <CookieConsent />
    </div>
  );
};

export default Index;
