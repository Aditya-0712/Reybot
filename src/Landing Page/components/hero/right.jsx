import "./right.css";
import whatsapp from "../../images/forHero/whatsapp.png";
import chat from "../../images/forHero/Chat1.png";
import chat3d from "../../images/forHero/chat3d.png";

function Right(){
    return (
        <div className="right">
            <img className="whatsapp" src={whatsapp} alt="whatsapp" /> 
            <img className="chatpic" src={chat} alt="chat" />
            <img className="chat3d" src={chat3d} alt="chat emoji" />
        </div>
    );
}

export default Right;