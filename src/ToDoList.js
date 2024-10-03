import React, { useState, useEffect } from 'react';
import './App.css';
import TodoItems from './components/todoItems'
import NewTodoForm from './components/newTodoForm';

const todos = [
  {
    title: 'Todo 1', description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
    eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
    minim veniam, quis nostrud exercitation ullamco laboris nisi ut
    aliquip ex ea commodo consequat. Duis aute irure dolor in
    reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
    pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
    culpa qui officia deserunt mollit anim id est laborum.`, dueDate: '2024-04-03'
  },
  {
    title: 'Todo 2', description: `Sed auctor nunc nec nisi ultrices, in molestie nibh mattis. 
    Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. 
    Suspendisse potenti. Nullam nec nibh nibh. Nullam quis nisl nec nunc congue mollis. 
    Vivamus nec nisi nec nunc mattis molestie. Sed auctor nunc nec nisi ultrices, in molestie nibh mattis.`, dueDate: '2024-04-06'
  },
  {
    title: 'Todo 3', description: `Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. 
    Suspendisse potenti. Nullam nec nibh nibh. Nullam quis nisl nec nunc congue mollis. Vivamus nec nisi nec nunc mattis molestie. 
    Sed auctor nunc nec nisi ultrices, in molestie nibh mattis. Pellentesque habitant morbi tristique 
    senectus et netus et malesuada fames ac turpis egestas.`, dueDate: '2024-04-09'
  },
  {
    title: 'Todo 4', description: `Suspendisse potenti. Nullam nec nibh nibh. Nullam quis nisl nec nunc congue mollis. 
    Vivamus nec nisi nec nunc mattis molestie. Sed auctor nunc nec nisi ultrices, in molestie nibh mattis. 
    Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Suspendisse potenti. 
    Nullam nec nibh nibh. Nullam quis nisl nec nunc congue mollis. `, dueDate: '2024-04-11'
  },
];



function TodoList() {
  const [todosState, setTodosState] = useState(todos);
  useEffect(()=>{},[todos]);

  function handleDateChange(index, newDate) {
    const updatedTodos = [...todosState];
    updatedTodos[index].dueDate = newDate;
    setTodosState(updatedTodos);
    console.log(todos[index].dueDate)
  }

  function handleDescriptionChange(index, newDescription) {
    const updatedTodos = [...todosState];
    updatedTodos[index].description = newDescription;
    setTodosState(updatedTodos);
  }

  const addTodo = (todo)=>{
    setTodosState([...todosState, todo]);
    console.log(todosState)
  }
  return (
    <div>
      <div className='heading'>
        <h2>Assignment 2: ToDo List</h2>
      </div>
      <div className='content'>
        <NewTodoForm addTodo = {addTodo}/>
        <TodoItems className='todo-items' todos = {todosState} handleDateChange = {handleDateChange} handleDescriptionChange = {handleDescriptionChange}/>
      </div>
    </div>
  );
}

export default TodoList;
