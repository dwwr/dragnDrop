import React from 'react';
import Board from './components/Board';
import Column from './components/Column';
// import Card from './components/Card';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      columns : [{class: 'column column-todo'}, {class: 'column column-ip'}, {class: 'column column-done'}],
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