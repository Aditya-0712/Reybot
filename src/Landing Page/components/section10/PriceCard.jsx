import "./pricecard.css";
import point from "../../images/forSection10/checkmark.svg";
import { Link } from "react-router-dom";

function CardPart(props){
    const {title, desc, price, ym, title2, arr} = props;

    const renderPoints = arr.map((x, ind) =>{
        return (
            <div className="point" key={ind}>
                <img src={point} alt="point" />
                <p>{x}</p>
            </div>
        );
    })

    return (
        <div className="cardpart">
            <p className="title">{title}</p>
            <p className="low">{desc}</p>
            <p className="price">{price} <span>/{ym}</span> </p>
            <p className="secTitle">{title2}</p>
            {renderPoints}
            <div className="space"></div>
            <Link to="" className="link">Get Started</Link>
        </div>
    );
}

function PriceCard({isMonthly}){
    const arr1 = ["Green tick", "1 user, more users for 5.99£/month", "600 conversations", "0.18 £ for additional conversation", "Upto 25 contacts"];

    const arr2 = ["Green tick", "5 users, more users for 5.99£/month", "1000 conversations", "0.18 £ for additional conversation", "Upto 5000 contacts", "Hub spot integrations", "Al Assistance"];

    const arr3 = ["Green tick", "5 users, more users for 5.99£/month", "1500 conversations", "0.18 £ for additional conversation", "Upto 50000 contacts", "Hub spot integrations", "Al Assistance"];

    const arr4 = ["Need customer care resources to support your whatsapp growth"];

    let dur, mul;

    if (isMonthly){
        mul=1;
        dur="month";
    }
    else{
        mul=Math.round(12*0.8);
        dur="year";
    }

    return (
        <div className="pricecard">
            <CardPart title="Premium" desc="Best for personal use" price="$0" ym={dur} title2="What you get:" arr={arr1} />
            <CardPart title="Gold" desc="Ideal for single shop owners, online businesses" price={40*mul-0.01  + "£"} ym={dur} title2="What you get:" arr={arr2} />
            <CardPart title="Platinum" desc="Ideal for businesses of all sizes, multiple locations" price={70*mul-0.01 + "£"} ym={dur} title2="What you get:" arr={arr3} />
            <CardPart title="Custom" desc="Best for personal use" price={10000*mul-0.01 + "£"} ym={dur} title2="Contact Us" arr={arr4} />
        </div>
    );
}

export default PriceCard;