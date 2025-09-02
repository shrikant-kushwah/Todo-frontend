import React, { useState } from 'react'
import Navbar from './Navbar'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { addTask } from "../Utils/UserSlice"

const New = () => {

  const [title, setTitle] = useState("")
  const [desc, setDesc] = useState("")
  const nav = useNavigate()
  const dispatch = useDispatch()

  function handleAdd() {
    async function addTaskTodo() {
      if (!title.length || !desc.length) {
        return
      }
      try {
        const res = await axios.post(
          `${import.meta.env.VITE_DOMAIN}/todos`,
          { title, desc, isCompleted: false },
          { withCredentials: true }
        )

        dispatch(addTask(res.data.data))

        if (res.status === 201) {
          nav("/")
        }
      } catch (err) {
        console.error("Error creating todo:", err.response?.data || err.message)
      }
    }
    addTaskTodo()
  }


  return (
    <>
      <Navbar />
      <div className="p-6 mt-16 max-w-md mx-auto bg-white shadow-md rounded-lg space-y-4">
        <h2 className="text-2xl font-bold text-gray-800">Add New Todo</h2>

        <div className="flex flex-col space-y-2">
          <label className="text-gray-600 font-medium">Title</label>
          <input
            value={title}
            onChange={(e) => { setTitle(e.target.value) }}
            type="text"
            placeholder="Enter todo title"
            className="px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
        </div>

        <div className="flex flex-col space-y-2">
          <label className="text-gray-600 font-medium">Description</label>
          <textarea
            value={desc}
            onChange={(e) => { setDesc(e.target.value) }}
            placeholder="Enter todo description"
            className="px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
        </div>

        <button onClick={handleAdd} className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition">
          Add Todo
        </button>
      </div>
    </>
  )
}

export default New
