import "./section9.css";
import { Link } from "react-router-dom";
import right from "../../images/forSection9/Arrow Right.svg";
import Faq from "./Faq";

function Section9(){
    return (
        <div className="section9">
            <p className="heading">OUR FAQS</p>
            <p className="title">Frequently Asked<br></br>Questions</p>
            <Link to="" className="link">
                <p>Know More</p>
                <img src={right} alt="arrow" />
            </Link>
            <Faq />
        </div>
    );
}

export default Section9;