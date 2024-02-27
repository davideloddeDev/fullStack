import { createRoot } from 'react-dom/client'
import { App } from './App'
import { StrictMode } from 'react'
import './index.css'

//import { Components } from './Components.jsx'



//createRoot(document.getElementById('root')).render(<Components/>)
//createRoot(document.getElementById('root')).render(<Props/>)
createRoot(document.getElementById('root')).render(
    <StrictMode>
        <App />
    </StrictMode>
)
