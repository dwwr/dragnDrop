import React from 'react';
import Column from './Column';

const Board = (props) => {

  return (
    <main className= "board">
      {props.columns.map((column, index)=> {
        return <Column className={column.className} title={column.title} key={index}/>;
      })}
    </main>
  );
};

export default Board;