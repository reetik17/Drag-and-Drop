import React, { useState }          from 'react';
import './styles/AddNewCardWrapper.scss';

function AddNewCard (props){
    const {setCardList  , cardSection} = props;

    const [cardData, setCardData] = useState({
        cardTitle: "",
        cardSection: cardSection,
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
    
        setCardData((prev) => {
          return { ...prev, [name]: value.trimStart() };
        });
      };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(cardData);
        setCardList((prev) => {
          return [...prev, cardData];
        });
        setCardData({
          cardTitle: "",
          cardSection:cardSection,
        });
    };

    return (
        <div className='addNewCardWrapper' >
            <input
                type="text"
                name="cardTitle"
                value={cardData.cardTitle}
                className="titleInput"
                placeholder="Enter your card title"
                onChange={handleChange}
            />
            <button onClick={handleSubmit} disabled={!cardData.cardTitle}>+ Add Card</button>
        </div>
    )
}

export default AddNewCard;
