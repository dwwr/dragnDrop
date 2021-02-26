import React from 'react';

const Column = (props) => {

  return (
    <div class={props.class} ondrop="drop(event)" ondragover="allowDrop(event)">
        <h2>Column</h2>
        <article class="card" draggable="true" ondragstart="drag(event)" data-id="1">
            <h3>Todo #1</h3>
        </article>
        <article class="card" draggable="true" ondragstart="drag(event)" data-id="2">
            <h3>Todo #2</h3>
        </article>
        <article class="card" draggable="true" ondragstart="drag(event)" data-id="3">
            <h3>Todo #3</h3>
        </article>
    </div>

  );
};

export default Column;