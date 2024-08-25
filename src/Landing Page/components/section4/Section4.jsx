import "./section4.css";
import HeaderCard from "./HeaderCard";
import MainCard from "./MainCard";

function Section4(){
    return (
        <div className="section4">
            <p className="heading">A Complete Soluion for</p>
            <p className="heading" style={{color:"#0DD171", marginTop:"10px"}}>Marketing & Customer Care</p>
            <HeaderCard />
            <MainCard />
        </div>
    );
}

export default Section4;