import axios from 'axios'
import React from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'

const Navbar = () => {

  const nav = useNavigate()
  const data = useSelector(store => store.user)

  return (
    <nav className="bg-blue-600 text-white px-6 py-3 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo / Title */}
        <h1 className="text-xl font-bold tracking-wide">
          Welcome, {data?.firstName} {data?.lastName}
        </h1>

        {/* Nav Buttons */}
        <div className="flex space-x-4">
          <button onClick={()=>{
            nav("/")
          }} className="px-4 py-1 bg-blue-500 rounded-lg hover:bg-blue-700 transition">
            Home
          </button>
          <button onClick={()=>{
            nav("/new")
          }} className="px-4 py-1 bg-green-500 rounded-lg hover:bg-green-600 transition">
            New
          </button>
          <button onClick={() => {
            async function logout() {
              const res = await axios.post(`${import.meta.env.VITE_DOMAIN}api/user/logout`, {}, { withCredentials: true })
            }
            nav("/login")
            logout()
          }} className="px-4 py-1 bg-red-500 rounded-lg hover:bg-red-700 transition">
            Logout
          </button>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
