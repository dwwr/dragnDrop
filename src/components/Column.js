import React, { useState } from 'react';
import Card from './Card';

const Column = (props) => {

  const [cards, setCards] = useState([{}, {}, {}]);

  const addCard = () => {

  };

  const drop = event => {
    document.querySelectorAll('.column').forEach(column => column.classList.remove('drop'));
    document.querySelector(`[data-id="${event.dataTransfer.getData('text/plain')}"]`).remove();

    event.currentTarget.innerHTML = event.currentTarget.innerHTML + event.dataTransfer.getData('text/html');
  };

  const allowDrop = event => {
    event.preventDefault();
  };

  const dragEnter = event => {
    event.currentTarget.classList.add('drop');
  };

  const dragLeave = event => {
    event.currentTarget.classList.remove('drop');
  };

  return (
    <div className={props.className} onDrop={drop} onDragOver={allowDrop} onDragEnter={dragEnter} onDragLeave={dragLeave}>
        <h2>{props.title}</h2>
        {cards.map((card, i) => {
          return <Card key = {i} />
        })}
    </div>

  );
};

// column.addEventListener('dragenter', dragEnter);
// column.addEventListener('dragleave', dragLeave);

export default Column;