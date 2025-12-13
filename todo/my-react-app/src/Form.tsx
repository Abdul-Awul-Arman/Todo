
import { useEffect, useState } from "react";

 interface Todo{
    id: number
    text: string
    name: string
    age: string
    address:string
    completed: boolean
  }
interface FormProps{
    addTodo:(text:string,name:string,age:string,address:string)=>void
    isEdit?:boolean
     currentTodo:Todo 
     handleUpdateTodo:(todo:Todo,todoText:string,name:string,age:string,address:string)=>void
     handleCancel:()=>void
}
export default  function Form({addTodo,isEdit, currentTodo,handleUpdateTodo,handleCancel}:FormProps){
    
    // console.log("Current Todo in Form:", currentTodo);
    let [todoText,setTodoText]=useState<string>("");
    let [name,setName]=useState<string>("");
    let [age,setAge]=useState<string>("");
    let [address,setAddress]=useState<string>("");
    function handleInput(){
        if(todoText.trim()!==""){

          addTodo(todoText,name,age,address);
            setTodoText("");
            setName("");
            setAge("");
            setAddress("");
        }
        
    }   

    function handleUpdate(){
        handleUpdateTodo(currentTodo,todoText,name,age,address);
        setTodoText("");
        setName("");
        setAge("");
        setAddress("");
    }

    function handleInputRefresh(){
        handleCancel();
        setTodoText("");
        setName("");
        setAge("");
        setAddress("");
    }


    useEffect(()=>{
        if(isEdit){
            setTodoText(currentTodo?.text ||"");
            setName(currentTodo?.name ||"");    
            setAge(currentTodo?.age ||"");
            setAddress(currentTodo?.address ||"");
        }

    },[currentTodo])

    const buttons=<div className="flex justify-end gap-2">
        <button onClick={handleUpdate}  className="w-full cursor-pointer bg-green-600 p-2 rounded-md text-white">Save</button>
        <button onClick={handleInputRefresh}  className="w-full cursor-pointer bg-green-600 p-2 rounded-md text-white">Cancel</button>
    </div>
    return(
        <div>
            
                {/* <input onChange={(e)=>{setTodoText(e.target.value)}} value={todoText} type="text" placeholder="Enter Todo" className="w-full bg-white p-2 rounded-md mb-4"/>
            <input onChange={(e)=>{setName(e.target.value)}} value={name} type="text" placeholder="Enter Name" className="w-full bg-white p-2 rounded-md mb-4"/>
            <input onChange={(e)=>{setAge(e.target.value.toString())}} value={age} type="number" placeholder="Enter Age" className="w-full bg-white p-2 rounded-md mb-4"/>
            <input onChange={(e)=>{setAddress(e.target.value)}} value={address} type="text" placeholder="Enter Address" className="w-full bg-white p-2 rounded-md mb-4"/>
            {
                isEdit ?buttons: <button onClick={handleInput} className="w-full cursor-pointer bg-green-600 p-2 rounded-md text-white">Add Todo</button>
            }
             */}


               <form onSubmit={(e)=>{ e.preventDefault(); handleInput() }} >
                 <input onChange={(e)=>{setTodoText(e.target.value)}} value={todoText} type="text" placeholder="Enter Todo" className="w-full bg-white p-2 rounded-md mb-4"/>
            <input onChange={(e)=>{setName(e.target.value)}} value={name} type="text" placeholder="Enter Name" className="w-full bg-white p-2 rounded-md mb-4"/>
            <input onChange={(e)=>{setAge(e.target.value.toString())}} value={age} type="text" placeholder="Enter Age" className="w-full bg-white p-2 rounded-md mb-4"/>
            <input onChange={(e)=>{setAddress(e.target.value)}} value={address} type="text" placeholder="Enter Address" className="w-full bg-white p-2 rounded-md mb-4"/>
            {
                isEdit ?buttons: <input type="submit" value="Add todo" className="w-full cursor-pointer bg-green-600 p-2 rounded-md text-white"/>
            }
               </form>
            
            {/* <p>{currentTodo}</p> */}
        </div>
    )
}