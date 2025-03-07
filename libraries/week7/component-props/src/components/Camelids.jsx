export function Camelids(props) {
    return (
     <div>
     <h2>{props.type}</h2>
     <img src={props.image} alt={props.type}/>
     <h3>{props.trivia}</h3>
     </div>

    );
}