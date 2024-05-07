import React, { useState, useEffect } from "react";
import DataColoumn from "./components/DataColoumn";
import './App.css';

const previousCardList = localStorage.getItem("cardList");

function App() {
  const[activeCard , setActiveCard] = useState(null)
  const [cardList, setCardList] = useState(JSON.parse(previousCardList) || []);

  useEffect(() => {
    localStorage.setItem("cardList", JSON.stringify(cardList));
  }, [cardList]);

  const onDrop = (cardSection , position) => {

    if(!activeCard)return;

    const cardToMove = cardList[activeCard];
    const updatedCardList = cardList.filter((card , index) => index !== activeCard);

    updatedCardList.splice(position , 0 , {
      ...cardToMove,
      cardSection :cardSection
    })

    setCardList(updatedCardList);
  }



  return (
    <div className="App">
      <h2>DRAG and DROP</h2>
      <div className="coloumnWrapper">
        <DataColoumn
          title = "Section 1"
          cardList = {cardList}
          cardSection = "section1"
          setActiveCard = {setActiveCard}
          setCardList = {setCardList}
          onDrop = {onDrop}
        />
        <DataColoumn
          title = "Section 2"
          cardList = {cardList}
          cardSection = "section2"
          setActiveCard = {setActiveCard}
          setCardList = {setCardList}
          onDrop = {onDrop}
        />
        <DataColoumn
          title = "Section 3"
          cardList = {cardList}
          cardSection = "section3"
          setActiveCard = {setActiveCard}
          setCardList = {setCardList}
          onDrop = {onDrop}
        />
      </div>
    </div>
  );
}

export default App;
