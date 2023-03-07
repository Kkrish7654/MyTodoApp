import React from 'react'
import { Todos } from './model'
import SingleTodo from './SingleTodo'

interface Props{
    todos:Todos[],
    setTodos: React.Dispatch<React.SetStateAction<Todos[]>>,
}

const TodosCard:React.FC<Props> = ({todos,setTodos}) => {
  return (
    <div className='main'>
      {
        todos.map((todo)=>(
            <SingleTodo 
                todo={todo}
                key={todo.id}
                todos={todos}
                setTodos={setTodos}
            />
        ))
      }
    </div>
  )
}

export default TodosCard
