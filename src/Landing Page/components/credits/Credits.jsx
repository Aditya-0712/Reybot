import { Link } from "react-router-dom";
import "./credits.css";
import Upper from "./Upper";
import fb from "../../images/forCredits/f.svg";
import x from "../../images/forCredits/x.svg";
import be from "../../images/forCredits/be.svg";
import linkedin from "../../images/forCredits/in.svg";

function Lower(){
    const arr = [fb, x, linkedin, be];
    const renderSocials = arr.map((x, ind) =>{
        return <Link to="" className="social" key={ind}><img src={x} alt="social link"/></Link>;
    })

    return (
        <div className="lower">
            <Link to="/" className="plink">Englsh</Link>
            <Link to="/" className="plink">Privacy Policy</Link>
            <Link to="/" className="plink">Support</Link>
            <p>@ 2024 ReyBot. Allrights reserved</p>
            {renderSocials}
        </div>
    );
}

function Credits(){
    return (
        <div className="credits">
            <Upper />
            <Lower />
        </div>
    );
}

export default Credits;