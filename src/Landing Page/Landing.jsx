import "./landing.css";
import Navbar from "../components/navbar/Navbar";

function Landing(){
    return (
        <div className="landing">
            <Navbar />
            <div className="hero"></div>
        </div>
    );
}

export default Landing;