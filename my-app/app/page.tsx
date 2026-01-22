'use client'

import Login from "./login/page"

export default function Home() {
  return (
    <>
      <Login/>
    </>
  )
}




// 'use client'

// import { useEffect, useRef, useState } from "react";

// function Home() {
  
//   const [todos, setTodos] = useState([]);

//   const inputRef = useRef();

//   const handleAddTodo = () => {
//     const text = inputRef.current.value;
//     const newItem = { completed: false, text };
//     setTodos([...todos, newItem]);
//     inputRef.current.value = "";
//   }

//   const handleItemDone = (index) => {
//     const newTodos = [...todos];
//     newTodos[index].completed = !newTodos[index].completed;
//     setTodos(newTodos);
//   }

//   const handleDeletItems = (index) => {
//     const newTodos = [...todos];
//     newTodos.splice(index, 1);
//     setTodos(newTodos);
//   }

//   return (
//     <main className="app bg-green-500 border-2 border-green-500">
//         <h1 className="text-red-800">To Do List </h1>
//         <div className="to-do-container">
//           <ul>
//             {todos.map(({ text , completed}, index) => {
//               return(
//                 <div className="item">
//                   <li className={ completed ? "done" : "" } key="index" onClick={() => handleItemDone(index)}>
//                     {text}
//                   </li>
//                   <span onClick={() => handleDeletItems(index)}>X</span>
//                 </div>
//               )
//               })}
//           </ul>
//           <input type="text" ref={inputRef}  placeholder="Entre item..."/>
//           <button onClick={handleAddTodo}>Add</button>

//         </div>
//     </main>
//   );
// }


// export default Home;