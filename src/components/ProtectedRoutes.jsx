import axios from 'axios'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Navigate, Outlet } from 'react-router-dom'
import { addUserData } from '../Utils/UserSlice'
import Loader from './Loader'

const ProtectedRoutes = () => {

  const userSliceData = useSelector(store => store.user)
  const dispatch = useDispatch()

  useEffect(() => {
    if (!userSliceData) {
      async function getData() {
        try {
          const res = await axios.get(`${import.meta.env.VITE_DOMAIN}/user/get-user-data`, { withCredentials: true })
          dispatch(addUserData(res.data.data))
        } catch (error) {
          window.location = "/login"
        }
      }
      getData()
    }
  }, [userSliceData,dispatch])

  if (!userSliceData?.username) {
    return <Loader />
  }

  return userSliceData ? <Outlet /> : <Navigate to={"/login"} />
}

export default ProtectedRoutes
