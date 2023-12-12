import React from "react";
import Navbar from "../components/Navbar";
import Banner from "../components/Banner";
import Videosection from "../components/Videosection";
import Comp1 from "../components/Comp1";
import Comp2 from "../components/Comp2";
import Comp3 from "../components/Comp3";
import Pricing from "../components/Pricing";
import Calltoaction from "../components/Calltoaction";
import Newsletter from "../components/Newsletter";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <div className="max-w-[1240px] w-full">
      <Navbar />
      <Banner />
      <Videosection />
      <Comp1 />
      <Comp2 />
      <Comp3 />

      <Pricing />
      <Calltoaction />
      <Newsletter />
      <Footer />
    </div>
  );
};

export default Home;
