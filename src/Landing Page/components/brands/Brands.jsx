import "./brands.css";
import brand1 from "../../../images/forBrands/brand1.png";
import brand2 from "../../../images/forBrands/brand2.png";
import brand3 from "../../../images/forBrands/brand3.png";
import brand4 from "../../../images/forBrands/brand4.png";

function Brands(){
    return (
        <div className="brands">
            <img src={brand1} alt="brand" style={{width:"204px", height:"48px"}}/>
            <img src={brand2} alt="brand" style={{width:"234px", height:"54px"}}/>
            <img src={brand3} alt="brand" style={{width:"330px", height:"55px"}}/>
            <img src={brand4} alt="brand" style={{width:"281px", height:"42px"}}/>
        </div>
    );
}

export default Brands;