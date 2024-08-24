import "./landing.css";
import Navbar from "./components/navbar/Navbar";
import Hero from "./components/hero/Hero";
import Brands from "./components/brands/Brands";
import Section2 from "./components/section2/Section2";

function Landing(){
    return (
        <div className="landing">
            <Navbar />
            <Hero />
            <Brands />
            <Section2 />
        </div>
    );
}

export default Landing;