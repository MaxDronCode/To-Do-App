export default function AsideRight ({ addTodo }) {
  const handleSubmit = (e) => {
    e.preventDefault()
    if (!e.target[0].value) return
    addTodo(e.target[0].value)
    e.target[0].value = ''
  }
  return (
    <div className='aside-right'>
      <form onSubmit={handleSubmit}>
        <p>Add a Todo</p>
        <input placeholder='Walk dog...' />
        <button>Add to list</button>
      </form>
    </div>
  )
}
