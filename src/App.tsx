import React, { useState } from 'react'
import "./App.css"
import InputField from './InputField';
import TodosCard from './TodosCard';
import { Todos } from './model';
const App:React.FC = () => {

  const [todo,setTodo] = useState<string>("")
  const [todos,setTodos] = useState<Todos[]>([]);
  const handleAddEvent = (e: React.FormEvent) => {
    e.preventDefault();
    if(todo){
      setTodos([...todos, {id: Date.now(), todo:todo, isDone:false}])
      setTodo("");
    }
  }
  console.log(todos);
  return (
    <div className='main-div'>
      <h1 className='title'>Todo App</h1>
        <InputField todo={todo} setTodo={setTodo} handleAddEvent={handleAddEvent} />
        <TodosCard todos={todos} setTodos={setTodos}/>
    </div>
  )
}

export default App;
