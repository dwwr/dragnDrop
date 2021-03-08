import React from 'react';

const Card = (props) => {

  const drag = event => {
    event.dataTransfer.setData('text/html', event.currentTarget.outerHTML);
    event.dataTransfer.setData('text/plain', event.currentTarget.dataset.id);
  };

  return (
    <article className="card" draggable="true" onDragStart={drag} data-id="1">
            <h3>Todo #1</h3>
    </article>
  );
};

export default Card;