import "./section3.css";
import broadcast from "../../../images/forSection3/broadcast.svg";
import FeatureCard from "./FeatureCard";
import book from "../../../images/forSection3/book.svg";
import msg from "../../../images/forSection3/msg.svg";
import phone from "../../../images/forSection3/phone.svg";
import mail from "../../../images/forSection3/mail.svg";
import settings from "../../../images/forSection3/settings.svg";

function Section3(){
    return (
        <div className="section3">
            <div className="features">
                <p>Core features of</p>
                <p>Reybot</p>
                <p>Lorem ipsum dolor sit amet consectetur. Facilisis turpis eu pulvinar nibh nunc viverra sit pulvinar in. Cursus mauris congue habitant </p>
            </div>
            <div className="wrap">
                <FeatureCard imgUrl={broadcast} text="Broadcast" />
                <FeatureCard imgUrl={msg} text="Chatbots" />
                <FeatureCard imgUrl={book} text="Create Custom Templates" />
                <FeatureCard imgUrl={phone} text="Customer Care" />
                <FeatureCard imgUrl={settings} text="Automated Follow Ups" />
                <FeatureCard imgUrl={mail} text="AI Generated Lead Generation" />
            </div>
        </div>
    );
}

export default Section3;