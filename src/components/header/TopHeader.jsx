import CercleButton from './CercleButton'
import TodosCounter from './TodosCounter'

export default function TopHeader ({ todos }) {
  return (
    <div className='top-header'>
      <div className='cercle-buttons-div'>
        <CercleButton color='red' />
        <CercleButton color='yellow' />
        <CercleButton color='green' />
      </div>
      <TodosCounter todos={todos} />
    </div>
  )
}
