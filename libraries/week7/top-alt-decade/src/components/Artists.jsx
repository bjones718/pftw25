export function Artists(props) {
    const oddArtistCard  = props.odd ? "odd" : "even";
    
    return (
     <div className={oddArtistCard}>
        <h2>{props.artist}</h2>
        <div className="box">
        <ul>
            <li><img src={props.image} alt={props.artist}/></li>
             <li><h3><mark>Years Active:</mark> {props.yearsActive}</h3></li>
             <li><h3><mark>Alternative Genre:</mark> {props.alternativeGenre}</h3></li>
             <li><h3><mark>Most Notable Album:</mark>  {props.mostNotableAlbum}</h3></li>
             <li><h3><mark>About The Artist:</mark>  {props.aboutTheArtist}</h3></li>
       </ul>
        </div>
   </div>
   
       ); 
}