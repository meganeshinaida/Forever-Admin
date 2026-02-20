import React, { useEffect, useState } from 'react'
import Navbar from './components/Navbar'
import Sidebar from './components/Sidebar'
import { Route, Routes } from 'react-router-dom'
import Login from './components/Login'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import Dashboard from './pages/Dashboard'

export const backendUrl = import.meta.env.VITE_BACKEND_URL

const App = () => {
  const [token, setToken] = useState(localStorage.getItem('token') ? localStorage.getItem('token') : '')
  const [sidebarOpen, setSidebarOpen] = useState(false)

  useEffect(() => {
    localStorage.setItem('token', token)
  }, [token])

  return (
    <div className='bg-gray-50 min-h-screen'>
      <ToastContainer />
      {token === "" ?
        <Login setToken={setToken} />
        :
        <>
          {/* Main Layout Container */}
          <div className='flex h-screen flex-col md:flex-row'>
            {/* Sidebar */}
            <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />

            {/* Main Content Area */}
            <div className='flex-1 flex flex-col overflow-hidden md:ml-0'>
              {/* Navbar */}
              <Navbar setToken={setToken} />

              {/* Page Content */}
              <main className='flex-1 overflow-y-auto pt-6 md:pt-8 px-4 md:px-8 pb-6'>
                <Routes>
                  <Route path='/dashboard' element={<Dashboard />} />
                  {/* Add more routes here as needed */}
                  {/* <Route path='/users' element={<Users />} />
                  <Route path='/analytics' element={<Analytics />} />
                  <Route path='/reports' element={<Reports />} />
                  <Route path='/notifications' element={<Notifications />} />
                  <Route path='/settings' element={<Settings />} /> */}
                </Routes>
              </main>
            </div>
          </div>
        </>
      }
    </div>
  )
}

export default App
