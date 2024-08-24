import "./navbar.css";
import logo from "../../../images/forNavbar/logo.png";
import Link from "./Link";
import moon from "../../../images/forNavbar/moon.svg";
import Dropdown from "./Dropdown";
import GreenButton from "./GreenButton";

function Navbar(){
    return (
        <div className="navbar">
            <img className="logo" src={logo} alt="logo" />
            <div className="links">
                <Link path="" name={"Home"} />
                <Link path="" name={"Features"} />
                <Link path="" name={"Solutions"} />
                <Link path="" name={"Pricing"} />
                <Link path="" name={"Support"} />
            </div>
            <img className="mode" src={moon} alt="mode" />
            <Dropdown />
            <GreenButton colr="white" name="Dashboard" />
            <GreenButton colr="#0DD171" name="Sign Up" />
        </div>
    );
}

export default Navbar;