import React from 'react';

const Card = (props) => {

  console.log(props);

  const drag = event => {
    if (event) {
      event.dataTransfer.setData('text/html', event.currentTarget.outerHTML);
      event.dataTransfer.setData('text/plain', event.currentTarget.dataset.id);
    }
  };

  const dragStart = event => {
    if (event) {
      event.currentTarget.classList.add('dragging');
    }

  };

  const dragEnd = event => {
    if (event) {
      event.currentTarget.classList.remove('dragging');
    }

  };

  return (
    <article className="card" draggable="true"onDragStart={(event)=>{
      drag(event);
      dragStart(event);
      }}  onDragEnd={dragEnd(event, props.index)} data-id={props.index} >
            <h3>Todo #{props.index}</h3>
    </article>
  );
};

export default Card;