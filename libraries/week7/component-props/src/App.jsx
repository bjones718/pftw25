import "./App.css";
import { Camelids } from "./components/Camelids.jsx";

function App() {
  const camelids = [
    { 
        type: "Llama",
        image: "./llama1.png",
        trivia: "Llamas can be bred at any time of the year."
      },
      {
        type: "Alpacas",
        image: "./alpaca.png",
        trivia: "Alpacas rarely spit but will do so if frightened or abused."
  
      }
   ]

  return (
    <div className="camelids">
      {camelids.map((comparison, index) => {
         return (
          <Camelids 
      key={index}   
      type={comparison.type}
      image={comparison.image}
      trivia={comparison.trivia}

      />
      );
      })}
      
      </div>
    )
  }      
     export default App
    
     
        

      

