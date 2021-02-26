import React from 'react';
import Column from './Column';

const Board = (props) => {

  return (
    <main class= "board">
      {props.columns.map((column, index)=> {
        return <Column className={column.className} title={column.title} key={index} ondrop="drop(event)" ondragover="allowDrop(event)"/>;
      })}
    </main>
  );
};

export default Board;