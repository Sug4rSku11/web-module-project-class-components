import React from 'react';
import ListForm from './components/TodoForm';
import TodoList from './components/TodoList';

import '../src/components/Todo.css';


const todo = [
  {
  name: 'Buy Groceries',
  id: 1,
  completed: false
},
{
  name: 'Buy Dog Food',
  id: 2,
  completed: false
}
];

class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  constructor() {
    super();
    this.state = {
      todo: todo
    }
  }
  //Clear done
  handleClear = () => {
    this.setState({
      ...this.state,
      todo: this.state.todo.filter(item => !item.completed === false)
    });
  }
  //Add Item
  handleAddItem = (item) => {
  const newItem = {
    name: item,
    id: Date.now(),
    completed: false
  };
    this.setState({
      ...this.state,
      todo: [...this.state.todo, newItem]
  });
}
handleToggleItem = (id) => {
  this.setState({
  ...this.state,
  todo: this.state.todo.map(todo => {
    if (todo.id === id) {
      return {
        ...todo,
        completed: !todo.completed 
      }
    }
    return todo;
  })
});
}

  render() {
    return (
      <>
      <div className="app">
        <h2> To-do App!</h2>
        
      </div>
      <TodoList handleToggleItem={this.handleToggleItem} 
                todo={this.state.todo}
                handleClear={this.handleClear}/>
      <ListForm handleAddItem={this.handleAddItem}/>
      <button onClick={this.handleClear}
      className="clear-btn">Clear Completed</button>
      </>
    );
  }
  }


export default App;
