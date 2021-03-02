import React, { useState } from 'react';
import Card from './Card';

const Column = (props) => {

  const [cards, setCards] = useState([{}, {}, {}]);

  const addCard = () => {

  };

  return (
    <div className={props.className} ondrop="drop(event)" ondragover="allowDrop(event)">
        <h2>{props.title}</h2>
        {cards.map((card, i) => {
          return <Card key = {i} />
        })}
    </div>

  );
};

export default Column;