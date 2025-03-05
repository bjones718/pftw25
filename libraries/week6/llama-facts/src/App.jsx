import './App.css'
import { Facts } from './facts';
 
function App() {
   const llamaFacts = ["Llamas life expectancy is less than 20 years.", "Llamas are a part of the Camelidae family.", "Female llamas give birth every other year."];
 

  return (
  <div class="container">  
  <h1>Llama Facts</h1>

  <ul>
    <li>{llamaFacts[0]}</li>
    <li>{llamaFacts[1]}</li>
    <li>{llamaFacts[2]}</li>
    <li><Facts /></li>
  </ul>  
  
  </div>
      
  )
}

export default App
