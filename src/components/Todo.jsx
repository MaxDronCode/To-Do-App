export default function Todo({todoText, index, removeTodo}) {
  return (
    <div className='todo'>
      <li>{todoText}</li>
      <button onClick={() => removeTodo(index)}>X</button>
    </div>
  )
}
