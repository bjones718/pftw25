import PropTypes from "prop-types";
import { useParams } from "react-router-dom";
export function CardDetail({data}) {
        const { id } = useParams();
        const selectedCard = data.find((cards) => cards.id === id);
        console.log("cards", selectedCard);
        return (
    
    <>
    <h1>{selectedCard.artist}</h1>
    <img src={selectedCard.image} alt= {selectedCard.artist} />
    </>
        )
}
CardDetail.propTypes = {
    data: PropTypes.array
};