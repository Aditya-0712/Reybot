import { useState } from "react";
import arrow from "../../images/forNavbar/arrow.svg";
import UK from "../../images/forNavbar/United Kingdom.png";
import "./dropdown.css";
import India from "../../images/forNavbar/India.png";
import US from "../../images/forNavbar/US.png";
import Germany from "../../images/forNavbar/Germany.png";
import Aus from "../../images/forNavbar/Australia.png";

function Dropdown(){
    const [top, setTop] = useState(UK);
    const [isOpen, setOpen] = useState(false);
    const [anim, setAnim] = useState("none");

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

    return (
        <div className="dropdown">
            <div className="front" onClick={handleClick}>
                <img src={top} alt="flag" className="flag"/>
                <img src={arrow} alt="arrow" className="arrow" style={{transform:anim}}/>
            </div>
            {isOpen && (
                <div className="below">
                    <img src={India} alt="flag" onClick={() =>{handleSelect(India)}}/>
                    <img src={US} alt="flag" onClick={() =>{handleSelect(US)}} />
                    <img src={Germany} alt="flag" onClick={() =>{handleSelect(Germany)}} />
                    <img src={Aus} alt="flag" onClick={() =>{handleSelect(Aus)}} />
                    <img src={UK} alt="flag" onClick={() =>{handleSelect(UK)}} />
                </div>
            )}
        </div>
    );
}

export default Dropdown;