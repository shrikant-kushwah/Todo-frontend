import axios from 'axios'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Navigate, Outlet, useNavigate } from 'react-router-dom'
import { addUserData } from '../Utils/UserSlice'
import Loader from './Loader'

const ProtectedRoutes = () => {
  const userSliceData = useSelector(store => store.user)
  const dispatch = useDispatch()
  const nav = useNavigate()

  useEffect(() => {
    if (!userSliceData) {
      async function getData() {
        try {
          const res = await axios.get(`${import.meta.env.VITE_DOMAIN}/user/get-user-data`, { withCredentials: true })

          dispatch(addUserData(res.data.data))

        } catch (error) {
          nav("/login")
        }
      }
      getData()
    }
  }, [userSliceData, nav, dispatch])

  if (!userSliceData) {
    return <Loader />
  }

  return userSliceData ? <Outlet /> : <Navigate to={"/login"} />
}

export default ProtectedRoutes
