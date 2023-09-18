export default function Project(props) {
    return (
        <div className="card">
            <h3>{props.name}</h3>
            <a href={props.link} target="_blank"><img src={props.imgSrc} alt={props.imgDesc} /></a>
        </div>
    );
}