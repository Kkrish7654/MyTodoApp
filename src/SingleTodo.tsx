import React from 'react'
import { Todos } from './model'
import {AiFillEdit,AiFillDelete} from "react-icons/ai"
import {MdDone} from "react-icons/md";
type Props = {
    todo:Todos,
    todos:Todos[],
    setTodos:React.Dispatch<React.SetStateAction<Todos[]>>
}

const SingleTodo:React.FC<Props> = ({todo,todos,setTodos}) => {
  return (
    <form action="" className='container'>
        <div>
            <span>
                {todo.todo}
            </span>
        </div>

        <div className='items'>
            <span><AiFillEdit/></span>
            <span><AiFillDelete/></span>
            <span><MdDone/></span>
        </div>
    </form>
  )
}

export default SingleTodo
