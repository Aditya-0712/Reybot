import "./hero.css";
import Left from "./Left";
import Right from "./right";

function Hero(){
    return (
        <div className="hero">
            <Left />
            <Right />
        </div>
    );
}

export default Hero;