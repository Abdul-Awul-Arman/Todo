import { useState } from "react";
interface FormProps{
    addTodo:(text:string)=>void
}
export default  function Form({addTodo}:FormProps){
    let [todoText,setTodoText]=useState<string>("");
    function handleInput(){
        if(todoText.trim()!==""){

          addTodo(todoText);
            setTodoText("");
        }
        
    }
    return(
        <div>
            <input onChange={(e)=>{setTodoText(e.target.value)}} value={todoText} type="text" placeholder="Enter todo" className="w-full bg-white p-2 rounded-md mb-4"/>
            <button onClick={handleInput} className="w-full cursor-pointer bg-green-600 p-2 rounded-md text-white">Add Todo</button>
        </div>
    )
}