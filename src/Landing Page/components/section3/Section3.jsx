import "./section3.css";
import broadcast from "../../../images/forSection3/broadcast.svg";
import FeatureCard from "./FeatureCard";
import book from "../../../images/forSection3/book.svg";
import msg from "../../../images/forSection3/msg.svg";
import phone from "../../../images/forSection3/phone.svg";
import mail from "../../../images/forSection3/mail.svg";
import settings from "../../../images/forSection3/settings.svg";

function Section3(){
    const arr = [{url:broadcast, text:"Broadcast"}, {url:msg, text:"Chatbots"}, {url:book, text:"Create Custom Templates"}, {url:phone, text:"Customer Care"}, {url:settings, text:"Automated Follow Ups"}, {url:mail, text:"AI Generated Lead Generation"}];

    const renderCards = arr.map((x, ind) =>{
        return <FeatureCard imgUrl={x.url} text={x.text} key={ind}/>;
    })

    return (
        <div className="section3">
            <div className="features">
                <p>Core features of</p>
                <p>Reybot</p>
                <p>Lorem ipsum dolor sit amet consectetur. Facilisis turpis eu pulvinar nibh nunc viverra sit pulvinar in. Cursus mauris congue habitant </p>
            </div>
            <div className="wrap">
                {renderCards}
            </div>
        </div>
    );
}

export default Section3;