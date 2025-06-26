import "./CardDetail.css";
import PropTypes from "prop-types";
import { useParams, Link } from "react-router-dom";
export function CardDetail({data}) {
        const { id } = useParams();
        const selectedCard = data.find((cards) => cards.id === id);
        console.log("cards", selectedCard);
        return (
    
    <div className="detail-wrapper">
    <>
    <Link className={"link-styles"} to="/">Return to Artist List</Link>
    <div className="boxDetail">
        <h1>{selectedCard.artist}</h1>
            <div className="imageBox">
            <img src={selectedCard.imageDetail} alt= {selectedCard.artist} />
            </div>
       
                <h2>More about the Artist</h2>
                <div className="aboutText">
                <p>{selectedCard.moreAboutTheArtist}</p>
                </div>
  

    </div>
     
     </>
    </div>
        )
    
    }
CardDetail.propTypes = {
};