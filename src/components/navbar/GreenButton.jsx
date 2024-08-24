import "./greenbutton.css";

function GreenButton(props){
    const {colr, name, path} = props;

    return (
        <a href={path} className="greenbutton" style={{color:colr}}>{name}</a>
    );
}

export default GreenButton;