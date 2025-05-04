import PropTypes from "prop-types";
import "./ItemCard.css";
import clsx from "clsx";
import trash from "../assets/trash.svg";
import copy from "../assets/copy.svg";
export default function ItemCard({
   
    artist,
    colors,
    yearsActive,
    alternativeGenre,
    mostNotableAlbum,
    aboutTheArtist,
    image,
    id,
    deleteFn,
    duplicateFn
}) {   
    return(
        <div className="artistAltCard">
        <div className="cardImg>"> 
            <img src={image} alt={artist} />
            </div>
            <div className="cardTitle">{artist}</div>
            <div className="box">
        <ul>
             <li><h3><mark>Years Active:</mark></h3><p>{yearsActive}</p></li>
             <li><h3><mark>Alternative Genre:</mark></h3><p>{alternativeGenre}</p></li>
             <li><h3><mark>Most Notable Album:</mark></h3><p>{mostNotableAlbum}</p></li>
             <li><h3><mark>About The Artist:</mark></h3><p>{aboutTheArtist}</p></li>
       </ul>
        </div>
            <div className="actions"><a href="#" onClick={(evt) => {
                evt.preventDefault();
                deleteFn(id)

            }}><img src={trash} /></a><a href="#" onClick={(evt) =>{
                evt.preventDefault();
                duplicateFn(id)
            }}><img src={copy} /></a>
            </div>
            {colors.map((color) => {
                return <div key={color} className={clsx(["stripe", color])} />
            })}
        </div>
    )
}

ItemCard.propTypes = {
    artist: PropTypes.string,
    colors: PropTypes.arrayOf(PropTypes.string),
    yearsActive: PropTypes.string,
    alternativeGenre: PropTypes.string,
    mostNotableAlbum: PropTypes.string,
    aboutTheArtist: PropTypes.string,
    image: PropTypes.string,
    id: PropTypes.string,
    duplicateFn: PropTypes.func,
    deleteFn: PropTypes.func

}