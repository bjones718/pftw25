import { useState } from 'react'
 
import './App.css'
import Masthead from "./Masthead/Masthead";
import ItemCard from "./ItemCard/ItemCard";
import {nanoid} from 'nanoid';
function App() {
  const [cards, setCards] = useState([
   
    {
    artist:   "Toro Y Moi",
    colors: ["black", "blueviolet", "white"],
    yearsActive: "2010-current",
    alternativeGenre: "Synth Pop, Alt-Funk, chill-wave, Indie pop",
    mostNotableAlbum: "Anything In Return (2013)",
    aboutTheArtist:  "It's not easy to pin down Toro y Moi and Chaz Bundick. Since he first started releasing music in 2009, one never quite knows what he's going to do next. From super-chilled bedroom pop to slick R&B-influenced jams, his albums have covered a lot of ground. Everything he does is relaxed and smoothed-out at its core, though -- that's the one thing to count on...- Tim Sender, AllMusic.com",
    image: "./toro.png",
    id: "1"
    },
    {
    artist:  "Fleet Foxes",
    colors: ["blue", "black", "teal"],
    yearsActive: "2006-current",
    alternativeGenre:  "Folk, Indie Rock",
    mostNotableAlbum:  "Shore(2020)",
    aboutTheArtist:  "Fleet Foxes is an American indie folk band from Seattle, WA. Led by lead singer-songwriter Robin Pecknold, the band released their fourth critically acclaimed album Shore in the fall of 2020.",
    image:  "./ffoxes.png",
    id: "2"
    },
    {
    artist: "Men I Trust",
    colors: ["orange", "blue", "green"],
    yearsActive: "2014-current",
    alternativeGenre:  "Indie pop, Indie rock",
    mostNotableAlbum:  "Oncle Jazz(2019)",
    aboutTheArtist:  "Men I Trust, a Canadian indie band formed in 2014, has quietly but profoundly left its mark on the music scene.  Renowned for their hypnotic melodies and captivating vocals, the band has earned acclaim for their distinct approach to music. Self-producing their tracks, they showcase a maturity beyond their years in the industry. Men I Trust's influence extends from their evocative compositions to their understated yet compelling live performances, offering audiences a genuine and intimate musical experience...- MenITrust.com",
    image:  "./menitrust.png",
    id:"3"
    },
    {
    artist:  "Faye Webster",
    colors: ["blueviolet", "aqua", "white"],
    yearsActive:  "2017-current",
    alternativeGenre:  "Indie folk",
    mostNotableAlbum:  "Underdressed at the Symphony",
    aboutTheArtist:  "Atlanta-based indie singer and songwriter Faye Webster began writing rustic, country-tinged songs at age 14, and after finding an unlikely entry point into the music industry as part of a rap collective, she's forged ahead in similarity unpredictable fashion ever since. Her eponymous 2017 debut showcased her vulnerable, introspective indie folk narratives and playful character. Two more albums followed, 2019's Atlanta Millionaires Club and 2021's I Know I'm Funny haha.",
    image:  "./Faye.png",
    id:"4"
    },
    {
    artist: "Tokyo Tea Room",
    colors: ["magenta", "aqua", "teal"],
    yearsActive: "2023-current",
    alternativeGenre:  "Dream pop, Synth pop",
    mostNotableAlbum:  "No-Rush(2025)",
    aboutTheArtist:  " Tokyo Tea Room are the dream pop lovechild of Canterbury natives Daniel Elliott and Ben Marshall. A meeting of melodic bass, hypnotic guitar and dreamy synths form a unique sound with a soulful personality.  They started playing at their college in London, England in 2023 and have gained a large listening audience in a short amount of time.  Their debut album, No Rush was released in January, 2024 and has skyrocketed to the top indie album charts.",
    image: "./TTY.png",
    id:"5"
    }
   ]);
   function deleteCard(id) {
    console.log("delete me", id);
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
    setCards([...cards, matchingCard]);
  
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
  </div>
   )
  
    
    
     
    
     
}

export default App
