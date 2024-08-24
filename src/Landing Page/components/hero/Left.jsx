import "./left.css";
import { Link } from "react-router-dom";

function Left(){
    return (
        <div className="left">
            <p className="p1">AI-driven business enhancement with Reybot.</p>
            <p className="p2">Empower Your Business:</p>
            <p className="p2" style={{marginTop:"0.657vw"}}><span>Reybot</span>Revolution</p>
            <p className="p3">Generate leads, Make Shops, Take your business to next level with<br></br>Reybot powered by AI & Whatsapp</p>
            <Link to="" className="getstarted">Get Started</Link>
            <p className="p4">Try for free no credit card required.</p>
        </div>
    );
}

export default Left;