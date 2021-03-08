import React, { useState } from 'react';
import Card from './Card';

const Column = (props) => {

  const [cards, setCards] = useState([{}, {}, {}]);

  const addCard = () => {

  };

  const drop = (event, id) => {
    if (event) {
      console.log(id);
      document.querySelectorAll('.column').forEach(column => column.classList.remove('drop'));
      document.querySelector(`[data-id="${id}"]`).remove();

      event.currentTarget.innerHTML = event.currentTarget.innerHTML + event.dataTransfer.getData('text/html');
    }

  };

  const allowDrop = event => {
    if (event) {
      event.preventDefault();
    }
  };

  const dragEnter = event => {
    if (event) {
      event.currentTarget.classList.add('drop');
    }
  };

  const dragLeave = event => {
    if (event) {
      event.currentTarget.classList.remove('drop');
    }
  };

  return (
    <div className={props.className} onDrop={drop}
    onDragOver={allowDrop} onDragEnter={dragEnter} onDragLeave={dragLeave}>
        <h2>{props.title}</h2>
        {cards.map((card, i) => {
          console.log(i)
          return <Card key={i} index={i} />
        })}
    </div>

  );
};

// column.addEventListener('dragenter', dragEnter);
// column.addEventListener('dragleave', dragLeave);

export default Column;