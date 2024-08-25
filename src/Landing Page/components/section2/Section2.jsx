import "./section2.css";
import Group1 from "./Group1";
import adcard from "../../images/forSection2/card.png";

function Section2(){
    return (
        <div className="section2">
            <Group1 />
            <img className="adcard" src={adcard} alt="ad card" />
        </div>
    );
}

export default Section2;