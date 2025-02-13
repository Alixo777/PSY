import  React  from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Panic from './Panic.jsx'

createRoot(document.getElementById('root')).render(
  <React.Fragment>
    <Panic />
  </React.Fragment>
)