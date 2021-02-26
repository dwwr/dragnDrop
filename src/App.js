import React from 'react';
import Board from './components/Board';
import Column from './components/Column';
// import Card from './components/Card';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      columns : [{className: 'column column-todo', title: 'To-Do'}, {className: 'column column-ip', title: 'In Progress'}, {className: 'column column-done', title: 'Done'}],
      cards: []
    };
  };

  render () {
    return (
      <Board
        columns={this.state.columns}
        cards={this.state.cards}
        />
    );
  }
};
export default App;