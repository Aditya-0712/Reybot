import "./section.css";
import sun from "../../images/forSection6/sun.png";
import vector1 from "../../images/forSection6/vector1.png";
import vector2 from "../../images/forSection6/vector2.png";

function Section6(){
    return (
        <div className="section6">
            <div className="sec6pt1">
                <img src={sun} alt="sun" />
                <img src={vector1} alt="vector" />
            </div>
            <div className="sec6pt2">
                <p className="heading">Trusted By</p>
                <p className="heading" style={{color:"#0DD171"}}>Global Companies.</p>
                <p className="desc">Partner with a trusted leader in global solutions. Our track record of success with multinational corporations demonstrates our reliability, innovation, and commitment to excellence. Join the ranks of esteemed global companies who rely on us for cutting-edge solutions and unparalleled support</p>
                <div className="box">
                    <div><p>10</p><p>World Wide Clients</p></div>
                    <div style={{marginLeft:"100px"}}><p>25 +</p><p style={{marginLeft:"10px"}}>Bots</p></div>
                </div>
            </div>
            <img className="sec6pt3" src={vector2} alt="vector" />
        </div>
    );
}

export default Section6;