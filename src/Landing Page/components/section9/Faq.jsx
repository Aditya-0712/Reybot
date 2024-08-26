import "./faq.css";
import { useState } from "react";
import plus from "../../images/forSection9/plus.svg";
import temp from "./text";
import minus from "../../images/forSection9/minus.svg";

function FaqCard(props){
    const [isopen, setOpen] = useState(false);
    const [btn, setBtn] = useState(plus);
    const {heading, content} = props;

    const handleClick = () =>{
        if (isopen){
            setOpen(false);
            setBtn(plus);
        }
        else{setOpen(true); setBtn(minus)}
    }

    return (
        <div className="faqcard">
            <div className="front">
                <p>{heading}</p>
                <img src={btn} alt="plus" onClick={handleClick}/>
            </div>

            {isopen && (
                <p className="content">{content}</p>
            )}
        </div>
    );
}

function Faq(){
    return (
        <div className="faq">
            <FaqCard heading="What are different conversation types?" content={temp} />
            <FaqCard heading="My business would like to become your partner how can we do so?" content={temp} />
            <FaqCard heading="I want to cancel my subscription, how can I do so?" content={temp} />
            <FaqCard heading="I need integration in to my workplace, do you offer that?" content={temp} />
        </div>
    );
}

export default Faq;