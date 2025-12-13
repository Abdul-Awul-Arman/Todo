
import { useState } from "react";
import Form from "./Form";
import Todo from "./Todo";

 interface Todo{
    id: number
    text: string
    name: string
    age: string
    address:string
    completed: boolean
  }
function App() {
 
    let todosObj:Todo[]=[
    {id: 1,
    text: "Learn TypeScript ",
    name: "arman",
    age: "25",
    address:"Sylhet, bd",
    completed: false},
    {id: 2,
    text: "Learn React ",
    name: "arafat",
    age: "25",
    address:"Dhaka, bd",
    completed: false},
    {id: 3,
    text: "Learn node js ",
    name: "nur",
    age: "25",
    address:"chittagong, bd",
    completed: false},

    ];

        const [todos, setTodos] = useState<Todo[]>(todosObj)
        const [isEdit,setIsEdit]=useState<boolean>(false );
        const [currentTodo,setCurrentTodo]=useState<Todo>({id:0,text:"",name:"",age:"",address:"",completed:false});

        
  function handleDelete(id:number){
   
    const newTodos=todos.filter((todo)=>todo.id !==id);
    setTodos(newTodos);
  }

  function handleEdit(todo:Todo){
    console.log("Editing todo:", todo);
    setCurrentTodo(todo);
    setIsEdit(true);
  };

  function handleUpdateTodo(todo:Todo,todoText:string,name:string,age:string,address:string){
    console.log("Updating todo:", todo);
        const updatedTodos=todos.map((t)=>t.id===todo.id?
                                     {...t,text:todoText, name:name, age:age,address:address}
                                    :t
                                    );

    setTodos(updatedTodos as Todo[]);
    setIsEdit(false);
    setCurrentTodo({id:0,text:"",name:"",age:"",address:"",completed:false});
  }

  // function handleCancelEdit(){
  //   setIsEdit(false);
  //   setCurrentTodo({id:0,text:"",completed:false});
  // }

  function handleStats(todo:Todo){
    const updatedTodos=todos.map((t)=>t.id===todo.id?
                                     {...t,completed:!t.completed}
                                    :t
                                    );

    setTodos(updatedTodos as Todo[]);
  };

  function addTodo(text:string,name:string,age:string,address:string){
    const newTodo:Todo={
      id:todos.length+1,
      text:text,
      name:name,
      age:age,
      address:address,
      completed:false,
    };
    setTodos([...todos,newTodo]);
  }

  
    function handleCancel(){
      setIsEdit(false);
      setCurrentTodo({id:0,text:"",name:"",age:"",address:"",completed:false});
    }


  //  console.log(currentTodo);
  return (
    <div className="bg-[#313647] w-full h-screen flex justify-center items-center gap-10">
      <div className="w-[500px] bg-[#456882] p-5 rounded-lg">
       <Form addTodo={addTodo} isEdit={isEdit} currentTodo={currentTodo} handleCancel={handleCancel} handleUpdateTodo={handleUpdateTodo}   />
      </div>
      <div className="w-[500px] bg-[#456882] p-5 rounded-lg h-[500px] overflow-y-auto">
        { todos.length?   todos.map((todo)=>{
          return(

           <Todo key={todo.id} todo={todo} handleDelete={handleDelete} handleEdit={handleEdit} handleStats={handleStats} currentTodo={ setCurrentTodo}  />
          )
        }
        ):<p className="text-white text-center">No todos available. Please add some todos.</p>}
      </div>
    
    
    </div>
  )
}

export default App
