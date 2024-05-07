import React, { Fragment }          from 'react';
import Card from "./Card.js";
import DropingArea from "./DropingArea.js";
import AddNewCard from "./AddNewCard.js";

import './styles/DataColoumn.scss';

function DataColoumn (props){
    const { title, cardList , setActiveCard , cardSection , setCardList , onDrop} = props;

    return(
        <div className='dataColoumnWrapper'>
            <h2 className='dataColoumnHeading'>
                {title}
            </h2>
            <DropingArea onDrop = {() =>onDrop(cardSection , 0)}/>
            {cardList.map((item, index) =>
               item.cardSection === cardSection &&  (
                    <Fragment key={index}>
                        <Card
                            key={index}
                            title={item.cardTitle}
                            index={index}
                            setActiveCard = {setActiveCard}
                        />
                        <DropingArea onDrop = {() =>onDrop(cardSection , index+1)}/>
                    </Fragment>
                )
            )}
            <AddNewCard cardSection = {cardSection} title= {title} cardList = {cardList} setCardList = {setCardList}/>
        </div>
    )
}

export default DataColoumn;