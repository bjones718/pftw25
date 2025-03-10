import "./App.css";
import { Artists } from "./components/Artists.jsx";
 
function App() {
   const topAlt = [
{
artist:   "Toro Y Moi",
yearsActive: "2010-current",
alternativeGenre: "Synth Pop, Alt-Funk, chill-wave, Indie pop",
mostNotableAlbum: "Anything In Return (2013)",
aboutTheArtist:  "It's not easy to pin down Toro y Moi and Chaz Bundick. Since he first started releasing music in 2009, one never quite knows what he's going to do next. From super-chilled bedroom pop to slick R&B-influenced jams, his albums have covered a lot of ground. Everything he does is relaxed and smoothed-out at its core, though -- that's the one thing to count on. On 2015's What For?, Bundick takes another unexpected left turn. Casting aside the late-night R&B of 2013's anything in Return in favor of a guitar-heavy '70s approach, Bundick casts a wide net that includes bits and pieces of power pop, album rock, AM-ready soft rock, some fiery post-acid rock guitar riffing, and even a little disco. - Tim Sender, AllMusic.com",
image: "./toroy.png"
},
{
artist:  "Fleet Foxes",
yearsActive: "2006-current",
alternativeGenre:  "Folk, Indie Rock",
mostNotableAlbum:  "Shore(2020)",
aboutTheArtist:  " Fleet Foxes is an American indie folk band from Seattle, WA. Led by lead singer-songwriter Robin Pecknold, the band released their fourth critically acclaimed album Shore in the fall of 2020. Shore earned the band their second Grammy nomination (Best Alternative Music Album), and sweeping praise (MOJO five stars, Rolling Stone four stars, Pitchfork fifth consecutive Best New Music) with Rolling Stone calling the album “…the most immediately rewarding Fleet Foxes record since their brilliant 2008 debut.”",
image:  "./ff.png"
},
{
 artist: "Men I Trust",
yearsActive: "2014-current",
alternativeGenre:  "Indie pop, Indie rock",
mostNotableAlbum:  "Oncle Jazz(2019)",
aboutTheArtist:  "Men I Trust, a Canadian indie band formed in 2014, has quietly but profoundly left its mark on the music scene.  Renowned for their hypnotic melodies and captivating vocals, the band has earned acclaim for their distinct approach to music. Self-producing their tracks, they showcase a maturity beyond their years in the industry. Men I Trust's influence extends from their evocative compositions to their understated yet compelling live performances, offering audiences a genuine and intimate musical experience. In an era where music defies easy categorization, Men I Trust stands out for their ability to create a sound that transcends genres, shaping the indie music landscape with grace and authenticity.- MenITrust.com",
image:  "./mit.png"
},
{
artist:  "Faye Webster",
yearsActive:  "2017-current",
alternativeGenre:  "Indie folk",
mostNotableAlbum:  "Underdressed at the Symphony",
aboutTheArtist:  "Atlanta-based indie singer and songwriter Faye Webster began writing rustic, country-tinged songs at age 14, and after finding an unlikely entry point into the music industry as part of a rap collective, she's forged ahead in similarity unpredictable fashion ever since. Her eponymous 2017 debut showcased her vulnerable, introspective indie folk narratives and playful character. Two more albums followed, 2019's Atlanta Millionaires Club and 2021's I Know I'm Funny haha. Both records showcased her ever-sharp indie pop, and the latter hit number ten on Billboard's Folk Albums chart. She also reworked some of her songs with lush orchestral arrangements on her 2022 EP Car Therapy Sessions, a direction she continued to pursue on her 2024 album Underdressed at the Symphony.",
image:  "./faye.png"
},
{
artist: "Tokyo Tea Room",
yearsActive: "2023-current",
alternativeGenre:  "Dream pop, Synth pop",
mostNotableAlbum:  "No-Rush(2025)",
aboutTheArtist:  " Tokyo Tea Room are the dream pop lovechild of Canterbury natives Daniel Elliott and Ben Marshall. A meeting of melodic bass, hypnotic guitar and dreamy synths form a unique sound with a soulful personality.  They started playing at their college in London, England in 2023 and have gained a large listening audience in a short amount of time.  Their debut album, No Rush was released in January, 2024 and has skyrocketed to the top indie album charts.",
image: "./tty.png"
}

 ];

return (
 
  <div className="topArtist">
      {topAlt.map((decade, index) => {
         return (
          <Artists
      key={index}   
      artist={decade.artist}
      image={decade.image} alt={decade.artist}
      yearsActive={decade.yearsActive}
      alternativeGenre={decade.alternativeGenre}
      mostNotableAlbum={decade.mostNotableAlbum}
      aboutTheArtist={decade.aboutTheArtist}
      odd= {index % 2 === 0}
      />
    );
    })}

  </div>
)
}


export default App
