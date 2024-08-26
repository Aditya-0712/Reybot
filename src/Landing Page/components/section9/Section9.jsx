import "./section9.css";
import { Link } from "react-router-dom";
import right from "../../images/forSection9/Arrow Right.svg";
import Faq from "./Faq";
import oval1 from "../../images/forSection9/oval1.png";
import oval2 from "../../images/forSection9/oval2.png";

function Section9(){
    return (
        <div className="section9">
            <img src={oval1} className="oval1" alt="oval" />
            <p className="heading">OUR FAQS</p>
            <p className="title">Frequently Asked<br></br>Questions</p>
            <Link to="" className="link">
                <p>Know More</p>
                <img src={right} alt="arrow" />
            </Link>
            <Faq />
            <img src={oval2} className="oval2" alt="oval" />
        </div>
    );
}

export default Section9;