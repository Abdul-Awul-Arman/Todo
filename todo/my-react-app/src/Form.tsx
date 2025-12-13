
import { useState,useEffect } from "react";

 interface Todo{
    id: number
    text: string
    completed: boolean
  }
interface FormProps{
    addTodo:(text:string)=>void
    isEdit?:boolean
     currentTodo:Todo 
     handleUpdateTodo:(todo:Todo,todoText:string)=>void
     handleCancel:()=>void
}
export default  function Form({addTodo,isEdit, currentTodo,handleUpdateTodo,handleCancel}:FormProps){
    
    // console.log("Current Todo in Form:", currentTodo);
    let [todoText,setTodoText]=useState<string>("");
    function handleInput(){
        if(todoText.trim()!==""){

          addTodo(todoText);
            setTodoText("");
        }
        
    }   

    function handleUpdate(){
        handleUpdateTodo(currentTodo,todoText);
        setTodoText("");
    }

    function handleInputRefreash(){
        handleCancel();
        setTodoText("");
    }


    useEffect(()=>{
        if(isEdit){
            setTodoText(currentTodo?.text ||"");
        }

    },[currentTodo])

    const buttons=<div className="flex justify-end gap-2">
        <button onClick={handleUpdate}  className="w-full cursor-pointer bg-green-600 p-2 rounded-md text-white">Save</button>
        <button onClick={handleInputRefreash}  className="w-full cursor-pointer bg-green-600 p-2 rounded-md text-white">Cancel</button>
    </div>
    return(
        <div>
            <input onChange={(e)=>{setTodoText(e.target.value)}} value={todoText} type="text" placeholder="Enter todo" className="w-full bg-white p-2 rounded-md mb-4"/>
            {
                isEdit ?buttons: <button onClick={handleInput} className="w-full cursor-pointer bg-green-600 p-2 rounded-md text-white">Add Todo</button>
            }
            {/* <p>{currentTodo}</p> */}
        </div>
    )
}