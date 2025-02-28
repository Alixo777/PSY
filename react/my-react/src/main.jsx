import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import ExamPage from './ExamPage.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <ExamPage /> */}
    <AppRoutes />
  
  </StrictMode>,
)
