import "./Group1.css";
import { Link } from "react-router-dom";
import rightArrow from "../../../images/forSection2/Arrow Right.svg";

function Group1(){
    return (
        <div className="group1">
            <p className="heading">GROW YOUR BUSINESS FAST</p>
            <p className="bold">Packed with All</p>
            <p className="bold" style={{color:"#0ED171", marginTop:"5px"}}>Essential Integrations</p>
            <p className="desc">Your all-in-one solution, packed with essential integrations</p>

            <Link to="" className="a"><p>Know more</p><img src={rightArrow} alt="arrow" /></Link>
        </div>
    );
}

export default Group1;