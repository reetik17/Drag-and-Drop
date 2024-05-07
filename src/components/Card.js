import React from "react";
import './styles/Card.scss';

const Card = ({ title, index , setActiveCard }) => {

    return (
        <div className='cardWrapper' draggable onDragStart={() => setActiveCard(index)} onDragEnd={()=> setActiveCard(null)}>
            <span className='titleText'>{title}</span>
        </div>
    );
};

export default Card;
