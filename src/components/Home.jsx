import React from "react";
import Navbar from "./Navbar";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { delTask } from "../Utils/UserSlice";
import { useNavigate } from "react-router-dom";

const Home = () => {

  const userData = useSelector((store) => store.user);
  // console.log(userData);

  const dispatch = useDispatch()
  const nav = useNavigate()

  function handleDelete(id) {
    async function del() {
      const res = await axios.delete(`${import.meta.env.VITE_DOMAIN}api/todos/${id}`, { withCredentials: true })
      dispatch(delTask(id))
      console.log(res)
    }
    del()
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />

      <div className="max-w-5xl mx-auto px-4 py-6">
        <h1 className="text-2xl font-bold mb-6 text-gray-800">My Todos</h1>

        {userData?.todos?.length > 0 ? (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {userData.todos.map((item) => (
              <div
                key={item._id}
                className="bg-white p-5 rounded-2xl shadow hover:shadow-lg transition-shadow border border-gray-100"
              >
                {/* Title */}
                <h2 className="text-xl font-semibold text-gray-800 mb-2">
                  {item.title}
                </h2>

                {/* Description */}
                <p className="text-gray-600 mb-3">{item.desc}</p>

                {/* Dates */}
                <div className="text-sm text-gray-500 space-y-1 mb-4">
                  <p>
                    <span className="font-medium">Date:</span> {item.date}
                  </p>
                  <p>
                    <span className="font-medium">Updated:</span>{" "}
                    {item.updatedOn}
                  </p>
                </div>

                {/* Status + Author */}
                <div className="flex items-center justify-between">
                  <span
                    className={`px-3 py-1 rounded-full text-xs font-medium ${item.isCompleted
                      ? "bg-green-100 text-green-700"
                      : "bg-red-100 text-red-700"
                      }`}
                  >
                    {item.isCompleted ? "Completed" : "Pending"}
                  </span>
                  <span>
                    <button onClick={() => {
                      nav("/edit/" + item._id)
                    }} className="bg-blue-500 text-white text-sm rounded py-1 px-3 mx-2">Edit</button>
                    <button onClick={() => { handleDelete(item._id) }} className="bg-red-500 text-white text-sm rounded py-1 px-3">Delete</button>
                  </span>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center text-gray-500 mt-10">
            <p>No todos available. Start adding one 🚀</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Home;
