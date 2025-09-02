import React, { useState } from 'react'
import Navbar from './Navbar'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate, useParams } from 'react-router-dom'
import axios from 'axios'
import { editTask } from '../Utils/UserSlice'

const Edit = () => {

  const userData = useSelector(store => store.user)
  // console.log(userData)

  const { id } = useParams()
  const itemToBeEdited = userData.todos.find((item) => {
    return item._id === id
  })

  const [title, setTitle] = useState(itemToBeEdited.title)
  const [desc, setDesc] = useState(itemToBeEdited.desc)
  const [isCompleted, setIsCompleted] = useState(itemToBeEdited.isCompleted)
  const nav = useNavigate()

  const dispatch = useDispatch()

  function handleEdit() {
    async function editTaskTodo() {
      const res = await axios.patch(`${import.meta.env.VITE_DOMAIN}/todos/edit/${id}`, { title, desc, isCompleted }, { withCredentials: true })
      // console.log(res)
      dispatch(editTask(res.data.data))
      nav("/")
    }
    editTaskTodo()
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <div className="max-w-md mx-auto mt-10 bg-white shadow-md rounded-lg p-6">
        <h2 className="text-2xl font-bold mb-6 text-center">Edit Todo</h2>

        {/* Title */}
        <div className="mb-4">
          <label htmlFor="title" className="block text-gray-700 font-medium mb-1">
            Title
          </label>
          <input
            value={title}
            onChange={(e) => { setTitle(e.target.value) }}
            type="text"
            id="title"
            placeholder="Enter todo title"
            className="w-full border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
        </div>

        {/* Description */}
        <div className="mb-4">
          <label htmlFor="desc" className="block text-gray-700 font-medium mb-1">
            Description
          </label>
          <textarea
            value={desc}
            onChange={(e) => { setDesc(e.target.value) }}
            id="desc"
            placeholder="Enter todo description"
            rows="4"
            className="w-full border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
          ></textarea>
        </div>

        {/* Completed Checkbox */}
        <div className="mb-4 flex items-center">
          <input
            checked={isCompleted}
            onChange={(e) => { setIsCompleted(e.target.checked) }}
            type="checkbox"
            id="isCompleted"
            className="mr-2 h-4 w-4"
          />
          <label htmlFor="isCompleted" className="text-gray-700">
            Mark as Completed
          </label>
        </div>

        {/* Button */}
        <button onClick={handleEdit} className="w-full bg-blue-500 text-white font-semibold py-2 px-4 rounded-lg hover:bg-blue-600 transition">
          Update Todo
        </button>
      </div>
    </div>
  )
}

export default Edit
