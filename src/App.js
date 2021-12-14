import React, { Component } from 'react';
import './App.css';
import ToDoList from './components/ToDoList';

class App extends Component {
  state = {
    todos: [
      {
        id: 'id-1',
        text: 'Todo 1',
        complited: false,
      },
      {
        id: 'id-2',
        text: 'Todo 2',
        complited: false,
      },
      {
        id: 'id-3',
        text: 'Todo 3',
        complited: false,
      },
    ],
  };

  deleteTodo = todoId => {
    this.setState(prevState => ({ todos: prevState.todos.filter(todo => todo.id !== todoId) }));
  };

  render() {
    const { todos } = this.state;
    const completedTodos = todos.reduce((acc, todo) => (todo.complited ? acc + 1 : acc), 0);
    return (
      <div>
        <p>Загальна кількість:{todos.length}</p>
        <p>Виконані: {completedTodos}</p>
        <ToDoList todos={todos} onDeleteTodo={this.deleteTodo} />
      </div>
    );
  }
}

export default App;
