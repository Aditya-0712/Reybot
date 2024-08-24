import "./landing.css";
import Navbar from "./components/navbar/Navbar";
import Hero from "./components/hero/Hero";
import Brands from "./components/brands/Brands";

function Landing(){
    return (
        <div className="landing">
            <Navbar />
            <Hero />
            <Brands />
        </div>
    );
}

export default Landing;