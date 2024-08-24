import "./landing.css";
import Navbar from "../components/navbar/Navbar";

function Landing(){
    return (
        <div className="landing">
            <Navbar />
            <div style={{backgroundColor:"#00202C", margin:"0", width:"100%", height:"720px"}}></div>
        </div>
    );
}

export default Landing;