/* todos=[
 * {
  * title:"gym",
  * desc: "go to gym at 7PM"
  * }
 * ]
 */

export function Todos({ todos }) {
  return <div>
    {todos.map(function (todo) {
      return <div>
        <h1>{todo.title}</h1>
        <h2>{todo.description}</h2>
        <button onClick={() => {
          console.log(todo._id)
          fetch("http://localhost:3000/completed", {
            method: "PUT",
            body: JSON.stringify({
              _id: todo._id
            }),
            headers: { "Content-type": "application/json" }
          })
        }}>{todo.completed == true ? "Completed" : "mark as Complete"}</button>
      </div>
    })}
  </div>
}
