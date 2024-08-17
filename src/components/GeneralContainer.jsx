import MainBody from "./MainBody"
import TopHeader from "./header/TopHeader"
import AsideRight from "./aside/AsideRight"
import { useState } from 'react'
import  {INITIAL_TODOS}  from "../const"

export default function GeneralContainer() {
  const [todos, setTodos] = useState(INITIAL_TODOS)
  const removeTodo = (index) => {
    const newTodos = [...todos]
    newTodos.splice(index, 1)
    setTodos(newTodos)
  }
  const addTodo = (todo) => {
    const newTodos = [...todos]
    newTodos.push(todo)
    setTodos(newTodos)
  }
  return (
    <div className="general-container">
      <TopHeader todos={todos}/>
      <div className='main-and-aside'>
        <MainBody todos={todos} removeTodo={removeTodo}/>
        <AsideRight addTodo={addTodo}/>
      </div>
    </div>
  )
}
