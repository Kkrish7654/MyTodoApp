import React from 'react'

interface Props{
    todo: string,
    setTodo:React.Dispatch<React.SetStateAction<string>>,
    handleAddEvent:(e:React.FormEvent) => void,
}

const InputField = ({todo,setTodo, handleAddEvent}:Props) => {


  return <form className='input' onSubmit={handleAddEvent}>
    <input
    value={todo}
    onChange={(e)=>setTodo(e.target.value)}
    className='input_text' type="text" placeholder='Enter your todo'  />
    <button className='input_submit' type='submit'>Go</button>
  </form>
}

export default InputField;
