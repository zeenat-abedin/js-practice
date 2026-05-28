import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)

{/*
1. diffing algorithm
2. react fibre architecture
3. concurrent mode
4. Time slicing
5. Virtual list & infinite scrolling
6. Streaming SSR HTML
7. How hydration work?
8. Island architecture
9. Incremental static regeneration 
10. Web Vitals & Core Metrics
*/}

