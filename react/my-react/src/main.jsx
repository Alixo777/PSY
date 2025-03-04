import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import ExamPage from './ExamPage.jsx'
import PatientExamBookingSystem from './PatientExamBookingSystem.jsx'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <ExamPage /> */}
    {/* <AppRoutes /> */}
    <PatientExamBookingSystem />
  
  </StrictMode>,
)
