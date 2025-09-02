import { useState } from 'react'

import './App.css'
import Router from '../../Routes'
import { ToastContainer } from 'react-toastify'
import { AuthProvider } from './component/Context/AuthContect'


function App() {
  const [count, setCount] = useState(0)

  return (
    
      <div>
          <AuthProvider>     
          <Router/>
          </AuthProvider>
        <ToastContainer
        position="top-right"
        pauseOnHover
        autoClose={3000}
        />
      </div>

  )
}

export default App;
