import { useState } from 'react'
import axios from "axios"
import { Link } from 'react-router-dom';


function getMaxDOBFor18YearsOld() {
  const today = new Date();
  today.setFullYear(today.getFullYear() - 18);
  const year = today.getFullYear();
  const month = String(today.getMonth() + 1).padStart(2, "0");
  const day = String(today.getDate()).padStart(2, "0");
  return `${year}-${month}-${day}`;
}

const Auth = () => {

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [gender, setGender] = useState("");
  const [number, setNumber] = useState("");
  const [dob, setDob] = useState("");
  

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="bg-white shadow-xl mt-8 rounded-2xl p-8 w-full max-w-3xl">
        <h2 className="text-3xl font-bold text-center mb-8 text-gray-800">Sign Up</h2>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {/* First Name */}
          <div className="bg-gray-50 p-4 rounded-xl shadow-sm">
            <label htmlFor="fn" className="block text-sm font-medium text-gray-700 mb-1">
              First Name
            </label>
            <input
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              type="text"
              id="fn"
              placeholder="Shrikant"
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
            />
          </div>

          {/* Last Name */}
          <div className="bg-gray-50 p-4 rounded-xl shadow-sm">
            <label htmlFor="ln" className="block text-sm font-medium text-gray-700 mb-1">
              Last Name
            </label>
            <input
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              type="text"
              id="ln"
              placeholder="Kushwah"
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
            />
          </div>

          {/* Username */}
          <div className="bg-gray-50 p-4 rounded-xl shadow-sm">
            <label htmlFor="un" className="block text-sm font-medium text-gray-700 mb-1">
              Username
            </label>
            <input
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              type="text"
              id="un"
              placeholder="shrikant123"
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
            />
          </div>

          {/* Password */}
          <div className="bg-gray-50 p-4 rounded-xl shadow-sm">
            <label htmlFor="pass" className="block text-sm font-medium text-gray-700 mb-1">
              Password
            </label>
            <input
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              type="password"
              id="pass"
              placeholder="********"
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
            />
          </div>

          {/* Email */}
          <div className="bg-gray-50 p-4 rounded-xl shadow-sm sm:col-span-2">
            <label htmlFor="em" className="block text-sm font-medium text-gray-700 mb-1">
              Email
            </label>
            <input
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              type="email"
              id="em"
              placeholder="shrikant123@gmail.com"
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
            />
          </div>

          {/* Number */}
          <div className="bg-gray-50 p-4 rounded-xl shadow-sm">
            <label htmlFor="num" className="block text-sm font-medium text-gray-700 mb-1">
              Number
            </label>
            <input
              value={number}
              onChange={(e) => setNumber(e.target.value)}
              type="number"
              id="num"
              placeholder="9929897437"
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
            />
          </div>

          {/* Gender */}
          <div className="bg-gray-50 p-4 rounded-xl shadow-sm">
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Gender
            </label>
            <select
              value={gender}
              onChange={(e) => setGender(e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
            >
              <option value="">Select Gender</option>
              <option value="male">Male</option>
              <option value="female">Female</option>
              <option value="others">Others</option>
            </select>
          </div>

          {/* Date of Birth */}
          <div className="bg-gray-50 p-4 rounded-xl shadow-sm sm:col-span-2">
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Date of Birth
            </label>
            <input
              value={dob}
              onChange={(e) => setDob(e.target.value)}
              max={getMaxDOBFor18YearsOld()}
              type="date"
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
            />
          </div>
        </div>

        {/* Submit Button */}
        <div>
          <button onClick={() => {
            async function registerUser() {
              const res = await axios.post(`${import.meta.env.VITE_DOMAIN}/user/signup`, {
                firstName, lastName, username, email, number, gender, password, dateOfBirth: dob
              })
              console.log(res)
            }
            registerUser()
          }}
            className="mt-8 w-full bg-blue-600 text-white py-3 rounded-xl font-semibold hover:bg-blue-700 transition duration-300 shadow-md">
            Sign Up
          </button>

          {/* Login Link */}
          <p className="text-center text-sm text-gray-600 mt-4">
            Already have an account?{" "}
            <Link
              to="/login"
              className="text-blue-600 font-medium hover:underline"
            >
              Login
            </Link>
          </p>
        </div>
      </div>
    </div>
  )
}

export default Auth
