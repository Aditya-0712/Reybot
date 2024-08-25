import "./brands.css";
import brand1 from "../../images/forBrands/brand1.png";
import brand2 from "../../images/forBrands/brand2.png";
import brand3 from "../../images/forBrands/brand3.png";
import brand4 from "../../images/forBrands/brand4.png";

function Brands(){
    return (
        <div className="brands">
            <img src={brand1} alt="brand" style={{width:"13.41vw", height:"3.15vw"}}/>
            <img src={brand2} alt="brand" style={{width:"15.38vw", height:"3.55vw"}}/>
            <img src={brand3} alt="brand" style={{width:"21.69vw", height:"3.61vw"}}/>
            <img src={brand4} alt="brand" style={{width:"18.47vw", height:"2.76vw"}}/>
        </div>
    );
}

export default Brands;