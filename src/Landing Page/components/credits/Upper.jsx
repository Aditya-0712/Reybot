import "./upper.css";
import logo from "../../images/forCredits/logo.png";
import send from "../../images/forCredits/send.svg";
import { Link } from "react-router-dom";

function Upper(){
    return (
        <div className="upper">
            <div className="pt1up">
                <img src={logo} alt="logo" />
                <p>Al-driven business enhancement with Reybot</p>
            </div>
            <div className="pt2up">
                <p>Quick Links</p>
                <Link to="" className="lnk">Home</Link>
                <Link to="" className="lnk">Product</Link>
                <Link to="" className="lnk">Pricing</Link>
            </div>
            <div className="pt2up">
                <p>Support</p>
                <Link to="" className="lnk">Company</Link>
                <Link to="" className="lnk">Our Blog</Link>
                <Link to="" className="lnk">Contact Us</Link>
            </div>
            <div className="pt2up">
                <p style={{marginLeft:"1.314vw"}}>Newsletter</p>
                <Link to="" className="lnk" style={{marginLeft:"1.314vw"}}>Subscribe to recieve future<br></br>updates</Link>
                <form autoComplete="off">
                    <input type="email" name="email" placeholder="Email Address" />
                    <button type="submit">
                        <img src={send} alt="submit" />
                    </button>
                </form>
            </div>
        </div>
    );
}

export default Upper;