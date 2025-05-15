import { useState } from 'react';
import ItemCard from "../ItemCard/ItemCard";
import Masthead from "../Masthead/Masthead";
import { NewCardForm } from '../NewCardForm/NewCardForm';
import {nanoid} from 'nanoid';
import cardsData from "../assets/cardsData.json";
export function Home() {
    
    const [cards, setCards] = useState(cardsData);

    function deleteCard(id) {
        console.log("delete me", id)
        const updateArray = cards.filter((artistCard) => {
          return artistCard.id !== id;
        })
        setCards(updateArray)
      }
       function duplicateCard(id) {
        console.log("duplicate me", id)
        const matchingCard = cards.find((artistCard) => {
          return artistCard.id ===id
        });
        const updatedCard = {...matchingCard, id: nanoid()}
        setCards([...cards, updatedCard]);
       
      }
        function addCard(newCard) {
          const cardWithId = {
            ...newCard,
            id: nanoid()
          }
          setCards([...cards, cardWithId])
        }
      
   return (
  <div className="page">
    <Masthead />
    <div className="collection">
   
   {cards.map((artistCard) => {
    return (
      <ItemCard 
      key={artistCard.id} 
      deleteFn={deleteCard}
      duplicateFn={duplicateCard}
      {...artistCard} />
    )
   })}
    </div>
    <hr />
   <NewCardForm addArtistFn={addCard} />
  </div>
   );
    

}