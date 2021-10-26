import React from 'react';
import ReactDOM from 'react-dom'
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
      todo: this.state.todo.filter(item => !item.todo)
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
handleToggleItem = (item) => {
  this.setState({
  ...this.state,
  todo: this.state.todo.map(todo => {
    if (todo.id === item.id) {
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
      <div>
        <h2>Welcome to your Todo App!</h2>
        <ListForm handleAddItem={this.handleAddItem}/>
      </div>
      <TodoList handleToggleItem={this.handleToggleIem} 
      todo={this.state.todo}/>
      <button onClick={this.handleClear}
      className="clear-btn">Clear Completed</button>
    );
  }
  }


export default App;
