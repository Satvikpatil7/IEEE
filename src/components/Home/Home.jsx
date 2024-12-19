import React, { useEffect } from "react";
import Card from "../3Dmodel/Card";
import Journey from "./Journey";
import Success from "./Success";
import ExecutiveTeam from "./ExecutiveTeam";
import Chapters from "./Chapters";
import PhotoSection from "./PhotoSection";
import Footer from "./Footer";
import Testimonials from "./Testimonials";
import Popup from "../NavBar/Popup";

const Home = () => {
  useEffect(() => {
    alert("Our website is still under development, and we are working hard to resolve some bugs. The official launch is scheduled for 29th December during our SB AGM. In the meantime, if you encounter any issues, please try reloading the page. Thank you for your patience and support!");
  }, []);
  return (
    
    <>
    <Popup
        text={
          <>
            You're missing out on something awesome!
            <br />
            Open this on your desktop for the full experience!!
          </>
        }
      />
      
      <div className="w-full h-screen">
        <Card />
      </div>
      <Journey />
      <Success />
      <ExecutiveTeam />
      <Chapters />
      <PhotoSection />
      <Testimonials />
      <Footer />
    </>
  );
};

export default Home;
