import React from 'react';

const Column = (props) => {

  return (
    <div className={props.className} ondrop="drop(event)" ondragover="allowDrop(event)">
        <h2>{props.title}</h2>
    </div>

  );
};

export default Column;