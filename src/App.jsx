import { useState } from "react";

function App() {

    const [todos, setTodos] = useState([
      {
     text: "Buy benenes",
     favorite: false,
     id:0
   },
   {
     text: "Sell the house",
     favorite: false,
     id:1
   },
   {
     text: "learn jaba",
     favorite: false,
     id:2
   }])

    const deleteTodo = (indexOfRemovingTodo) => {
      const filtered = todos.filter((todo, index) => {
        if(index === indexOfRemovingTodo){
          return false;
        }
        return true
      });
        setTodos(filtered);
    }

    const makeFavorite = (i) => {
       const newTodos = todos.map((item, index) => {
        if(i === index){
          if(item.favorite === true){
          return {
            ...item,
            favorite: false
          };
          }else{
            return {
              ...item,
              favorite:true
            }
          }
        }
        return item
       });
        setTodos(newTodos)
    }

  const newTodos = todos.map((todo, index) => {

    const todoClass = `todo ${todo.favorite ? 'selected' : ' '}`;


    return(
    <div className={todoClass}>
    <div className="favorite">
      <button onClick={() => makeFavorite (index)}>★</button>
    </div>
    <div className="todo-text">{todo.text}</div>
    <div className="actions">
      <button onClick={() => deleteTodo(index)}>❌</button>
    </div>
  </div>
    )
  });

     

  return (
    <div className="app">
      <div className="header">Список дел</div>
      <div className="form">
        <input type="text" />
        <button>
          Добавить
        </button>
      </div>
      <div className="todos">
        {newTodos}
        </div>
        </div>
  );
}

export default App;
