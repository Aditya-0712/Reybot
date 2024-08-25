import "./featurecard.css";

function FeatureCard(props){
    const {imgUrl, text} = props;

    return (
        <div className="featurecard">
            <img src={imgUrl} alt="features" />
            <p>{text}</p>
        </div>
    );
}

export default FeatureCard;