// import axios from "axios";
// import { useState } from "react";
// import { useNavigate } from "react-router-dom";

// const AiTodoCreator = () => {
//   const [input, setInput] = useState("");
//   const [generatedTodo, setGeneratedTodo] = useState(null);
//   const nav = useNavigate()

//   const handleAiGenerate = async () => {
//     try {
//       const res = await axios.post(`${import.meta.env.VITE_DOMAIN}/ai/create-todo`, { prompt: input }, { withCredentials: true });
//       setGeneratedTodo(res.data.todo);
//     } catch (err) {
//       console.error(err);
//     }
//   };

//   return (
//     <div className="p-12 mx-12 rounded-xl">
//       <textarea
//         value={input}
//         onChange={(e) => setInput(e.target.value)}
//         placeholder="Type your task in natural language..."
//         className="w-full border p-2 rounded-lg"
//       />
//       <div className="flex justify-between gap-4 px-8">
//         <button
//           onClick={handleAiGenerate}
//           className="mt-2 px-4 py-2 bg-blue-600 text-white rounded-lg"
//         >
//           Generate Todo with AI
//         </button>
//         <button className="mt-2 px-4 py-2 bg-blue-600 text-white rounded-lg" onClick={() => { nav("/") }}>Back to Home</button>
//       </div>


//       {generatedTodo && (
//         <div className="mt-4 p-3 bg-gray-100 rounded-lg">
//           <h3 className="font-bold">AI Suggested Todo:</h3>
//           <p>📌 {generatedTodo.title}</p>
//           <p>📝 {generatedTodo.description}</p>
//           <p>⏰ {generatedTodo.deadline}</p>
//         </div>
//       )}
//     </div>
//   );
// };

// export default AiTodoCreator;
