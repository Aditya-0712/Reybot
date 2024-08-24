import "./landing.css";
import Navbar from "../components/navbar/Navbar";
import Hero from "../components/hero/Hero";

function Landing(){
    return (
        <div className="landing">
            <Navbar />
            <Hero />
        </div>
    );
}

export default Landing;