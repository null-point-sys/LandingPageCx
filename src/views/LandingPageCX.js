
import React from "react";

//Components
import Navbar from "components/Navbars/NavbarLP.js";
import LandingPageHeader from "components/Headers/LandingPageHeader.js";
import Footer from "components/Footers/Footer.js";
import Services from "components/sections/Services.js";
import About from "components/sections/About";
import Price from "components/sections/Price";
import Testimonials  from "components/sections/Testimonials";
import Code  from "components/sections/SendCode";
import Contact from "components/sections/Contact";


function LandingPage() {
  document.documentElement.classList.remove("nav-open");
  React.useEffect(() => {
    document.body.classList.add("profile-page");
    return function cleanup() {
      document.body.classList.remove("profile-page");
    };
  });
  return (

    <>
      <Navbar/>
      <LandingPageHeader />
      <div className="main" >
        <Services/>
        <About/>
        <Price/>
        <Testimonials/>
        <Code/>
        <Contact/>
      </div>
      <Footer/>
    </>
  );
}

export default LandingPage;
