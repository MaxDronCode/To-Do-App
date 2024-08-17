export default function TodosCounter ({ todos }) {
  return (
    <div className='todos-counter'>
      <p>Pending todos: {todos.length}</p>
    </div>
  )
}
