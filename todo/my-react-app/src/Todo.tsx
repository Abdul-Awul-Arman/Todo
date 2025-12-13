import { useState } from "react";



export default function Todo({todo,handleStats,handleDelete,handleEdit}:any){

 interface Todo{
    id: number
    text: string
    name: string
    age: number
    address:string
    completed: boolean
  }

      const [isDone,setIsDone]=useState<boolean>(false);
     
      
      // console.log(todo);

    return(
        <div className="bg-[#1D546C] p-2 mb-2   rounded-lg ">
          <span className="text-white text-2xl">Todo:</span> <p className={`text-white text-xl inline-block ${isDone?"line-through":null} `}>{todo.text}</p><br />
         <span className="text-white text-2xl">Name:</span> <p className={`text-white text-xl inline-block `}>{todo.name}</p><br/>
         <span className="text-white text-2xl">Age:</span> <p className={`text-white text-xl inline-block `}>{todo.age}</p><br/>
        <span className="text-white text-2xl">Address:</span>  <p className={`text-white text-xl inline-block `}>{todo.address}</p>
          <div className="flex mt-2 gap-10 justify-center">
          <button onClick={()=>{handleStats(todo);setIsDone(!isDone)}} className={`p-1 text-white rounded-md ml-5 cursor-pointer ${isDone?"bg-green-500":"bg-red-500"}`}>{isDone?"Done":"Undone"}</button>
          <button onClick={()=>handleDelete(todo.id)} className="cursor-pointer bg-fuchsia-900 p-1 rounded-md text-white">Delete</button>
          <button onClick={()=>{ handleEdit(todo) }} className="cursor-pointer bg-blue-950 p-1 rounded-md text-white">Edit</button>
          {/* <EditForm todo={todo} setOpen={setOpen } isOpen={isOpen} handlerFunction={handlerFunction} /> */}
          </div>
          
        </div>
    )
}