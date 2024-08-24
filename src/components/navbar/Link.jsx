import "./link.css";

function Link(props){
    const {path, name} = props;

    return (
        <a href={path} className="link">{name}</a>
    );
}

export default Link;