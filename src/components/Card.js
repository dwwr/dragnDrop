import React from 'react';

const Card = (props) => {

  const drag = event => {
    event.dataTransfer.setData('text/html', event.currentTarget.outerHTML);
    event.dataTransfer.setData('text/plain', event.currentTarget.dataset.id);
  };

  const dragStart = event => {
    event.currentTarget.classList.add('dragging');
  };

  const dragEnd = event => {
    event.currentTarget.classList.remove('dragging');
  };

  return (
    <article className="card" draggable="true"onDragStart={(event)=>{
      drag(event);
      dragStart(event);
      }}  onDragEnd={dragEnd} data-id="1" >
            <h3>Todo #1</h3>
    </article>
  );
};

export default Card;