import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import FirstContextProvider from './component/Context/FIrstContext.jsx'



createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter> 
      <FirstContextProvider>
        {/* <ProductContextProvider> */}
         <App/>
        {/* </ProductContextProvider> */}
      </FirstContextProvider>
    </BrowserRouter> 
    
  </StrictMode>,
)
