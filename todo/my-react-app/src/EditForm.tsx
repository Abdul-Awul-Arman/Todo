import { useState } from "react";

  interface Todo{
    id: number
    text: string
    completed: boolean
  }

interface TodoPopupProps {
  todo: Todo;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>
  handlerFunction:(todo:Todo,todoText:string)=>void
  isOpen:boolean
}

export default function TodoPopup({ todo, setOpen,handlerFunction,isOpen }: TodoPopupProps) {
  const [todoText, setTodoText] = useState<string>(todo.text);
 
  function saveChanges(){
    if(todoText.trim()!==""){
        handlerFunction(todo,todoText);
        setOpen(false);
    }

  }
  
 if(isOpen===false) return;

  

  return (
    <div className="fixed inset-0 bg-black/50 flex justify-center items-center z-50">
      <div className="bg-white p-6 rounded-lg w-[300px] shadow-lg">
        <h2 className="text-lg font-semibold mb-4">Save Todo </h2>
        <input
          type="text"
          placeholder="Enter todo"
          className="w-full p-2 border rounded mb-4"
          value={todoText}
          onChange={(e) => setTodoText(e.target.value)}
        />
        <div className="flex justify-end gap-2">
          <button
            onClick={()=> {if(todoText.trim()!=="") setOpen(false)}}
            className="px-4 py-2 rounded bg-gray-300 hover:bg-gray-400"
          >
            Cancel
          </button>
          <button
            onClick={saveChanges}
            className="px-4 py-2 rounded bg-green-600 text-white hover:bg-green-700"
          >
            Save
          </button>
        </div>
      </div>
    </div>
  );
}
