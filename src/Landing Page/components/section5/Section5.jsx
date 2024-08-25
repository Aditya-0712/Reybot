import "./section5.css";
import ads5 from "../../images/forSection5/Group 102.jpg";

function Section5(){
    return (
        <div className="section5">
            <p className="heading">YOUR AI POWERED BUSINESS</p>
            <p className="heading" style={{color:"#0DD171", marginTop:"5px"}}>GROWTH PARTNER <span>NEW</span></p>

            <div className="unit">
                <div className="leftp">
                    <p>Seamlessly<br></br>WhatsApp<br></br>Integration</p>
                    <p>Craft personalized marketing<br></br>campaigns and reach out to<br></br>potential customers with<br></br>targeted messages.</p>
                </div>
                <img src={ads5} alt="ad" />
                <div className="rightp">
                    <p>AI-Powered Lead<br></br>Generation</p>
                    <p>Reybot utilizes advanced<br></br>artificial intelligence<br></br>algorithms to generate<br></br>leads efficiently, saving<br></br>you time and effort.</p>
                </div>
            </div>
        </div>
    );
}

export default Section5;