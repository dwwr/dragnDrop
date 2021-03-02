import React from 'react';

const Card = (props) => {

  return (
    <article class="card" draggable="true" ondragstart="drag(event)" data-id="1">
            <h3>Todo #1</h3>
    </article>
  );
};

export default Card;