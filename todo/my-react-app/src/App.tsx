
import { useState } from "react";
import Form from "./Form";
import Todo from "./Todo";

 interface Todo{
    id: number
    text: string
    completed: boolean
  }
function App() {
 
    let todosObj:Todo[]=[
    {id: 1,
    text: "Learn TypeScript ",
    completed: false},
    {id: 2,
    text: "Learn React ",
    completed: false},
    {id: 3,
    text: "Build a React App ",
    completed: false}
    ];

  let [todos, setTodos] = useState<Todo[]>(todosObj)

  

        
  function handleDelete(id:number){
   
    const newTodos=todos.filter((todo)=>todo.id !==id);
    setTodos(newTodos);
  }

  function handleEdit(todo:Todo,todoText:string){
    const updatedTodos=todos.map((t)=>t.id===todo.id?
                                     {...t,text:todoText}
                                    :t
                                    );

    setTodos(updatedTodos as Todo[]);

  };

  function handleStats(todo:Todo){
    const updatedTodos=todos.map((t)=>t.id===todo.id?
                                     {...t,completed:!t.completed}
                                    :t
                                    );

    setTodos(updatedTodos as Todo[]);
  };

  function addTodo(text:string){
    const newTodo:Todo={
      id:todos.length+1,
      text:text,
      completed:false,
    };
    setTodos([...todos,newTodo]);
  }

   
  return (
    <div className="bg-[#313647] w-full h-screen flex justify-center items-center gap-10">
      <div className="w-[500px] bg-[#456882] p-5 rounded-lg">
       <Form addTodo={addTodo}  />
      </div>
      <div className="w-[500px] bg-[#456882] p-5 rounded-lg h-[500px] overflow-y-auto">
        {todos.map((todo)=>{
          return(

            todos &&<Todo key={todo.id} todo={todo} handleDelete={handleDelete} handleEdit={handleEdit} handleStats={handleStats}  />
          )
        })}
      </div>
    
    
    </div>
  )
}

export default App
