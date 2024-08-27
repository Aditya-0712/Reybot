import "./section10.css";
import PriceCard from "./PriceCard";
import { useState } from "react";

function Section10(){
    const [attr, setAttr] = useState({
        isMonthly:true,
        classOne:"selected",
        classTwo:"nonSelected"
    })

    const handleMonth = () =>{
        if (attr.isMonthly === false){
            setAttr({
                isMonthly:true,
                classOne:"selected",
                classTwo:"nonSelected"
            });
        }
    }

    const handleYear = () =>{
        if (attr.isMonthly){
            setAttr({
                isMonthly:false,
                classOne:"nonSelected",
                classTwo:"selected"
            });
        }
    }
    
    return (
        <div className="section10">
            <p className="heading">Discover Products<br></br>With the <span>Best Pricing</span></p>
            <p className="desc">Select from best plan, ensuring a perfect match. Need more<br></br>or less? Customize your subscription for a seamless fit!</p>
            <div className="sec10pt1">
                <p className={attr.classOne} onClick={handleMonth}>Monthly</p>
                <p className={attr.classTwo} style={{marginLeft: "1.31vw"}} onClick={handleYear}>Yearly <span>20% off</span></p>
            </div>
            <PriceCard isMonthly={attr.isMonthly}/>
        </div>
    );
}

export default Section10;