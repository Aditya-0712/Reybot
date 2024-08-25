import "./landing.css";
import Navbar from "./components/navbar/Navbar";
import Hero from "./components/hero/Hero";
import Brands from "./components/brands/Brands";
import Section2 from "./components/section2/Section2";
import Section3 from "./components/section3/Section3";
import Section4 from "./components/section4/Section4";
import "./fonts/fonts.css";

function Landing(){
    return (
        <div className="landing">
            <Navbar />
            <Hero />
            <Brands />
            <Section2 />
            <Section3 />
            <Section4 />
        </div>
    );
}

export default Landing;