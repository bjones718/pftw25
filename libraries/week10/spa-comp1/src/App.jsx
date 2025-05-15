 import {Routes, Route } from "react-router-dom";
 import './App.css';
 import { Home } from "./views/home"
 import { CardDetail } from "./views/CardDetail";
 import cardsData from "./assets/cardsData.json";

 function App() {

return (
<Routes>
  <Route path="/" element={<Home />} />
  <Route path=":id" element={<CardDetail data={cardsData} />} />
</Routes>

)

 }

 export default App