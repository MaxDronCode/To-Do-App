import Todo from "./Todo";

export default function MainBody({ todos, removeTodo }) {
  return (
    <div className="main-body">
      {todos.map((todo, index) => (
        <Todo key={index} todoText={todo} index={index} removeTodo={removeTodo}/>
      ))}
    </div>
  );
}
