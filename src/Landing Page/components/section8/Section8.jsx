import "./section8.css";
import vector1 from "../../images/forSection8/vector1.png";
import { Link } from "react-router-dom";
import right from "../../images/forSection8/right arrow.svg";

function Section8(){
    return (
        <div className="section8">
            <div className="sec8pt1">
                <p>Join With Us Today &</p>
                <p>Grow your Business</p>
                <p>Unlock the potential of your business with Reybot. Seamlessly integrate with our AI-powered platform today and witness exponential growth tomorrow. Join us now and embark on the journey to success!</p>
            </div>
            <img src={vector1} alt="vector" className="vector"/>
            <Link to="" className="link">
                <p>Sign up free</p>
                <img src={right} alt="right arrow" />
            </Link>
        </div>
    );
}

export default Section8;