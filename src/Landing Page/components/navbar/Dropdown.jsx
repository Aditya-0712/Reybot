import { useState } from "react";
import arrow from "../../../images/forNavbar/arrow.svg";
import UK from "../../../images/forNavbar/United Kingdom.png";
import "./dropdown.css";
import India from "../../../images/forNavbar/India.png";
import US from "../../../images/forNavbar/US.png";
import Germany from "../../../images/forNavbar/Germany.png";
import Aus from "../../../images/forNavbar/Australia.png";

function Dropdown(){
    const [top, setTop] = useState(UK);
    const [isOpen, setOpen] = useState(false);
    const [anim, setAnim] = useState("none");
    const arr = [{one:India, two:"IN"}, {one:Germany, two:"GR"}, {one:US, two:"US"}, {one:Aus, two:"AU"}, {one:UK, two:"UK"}];

    const handleClick = () =>{
        if (isOpen){
            setOpen(false);
            setAnim("none");
        }
        else{
            setOpen(true);
            setAnim("rotate(180deg)")
        }
    }

    const handleSelect = (val) =>{
        setTop(val);
        setOpen(false);
        setAnim("none");
    }

    const renderOpts = arr.map((x, ind) =>{
        return (<div onClick={() =>{handleSelect(x.one)}} key={ind}><img src={x.one} alt="flag"/><p>{x.two}</p></div>);
    })

    return (
        <div className="dropdown">
            <div className="front" onClick={handleClick}>
                <img src={top} alt="flag" className="flag"/>
                <img src={arrow} alt="arrow" className="arrow" style={{transform:anim}}/>
            </div>
            {isOpen && (
                <div className="below">
                    {renderOpts}
                </div>
            )}
        </div>
    );
}

export default Dropdown;