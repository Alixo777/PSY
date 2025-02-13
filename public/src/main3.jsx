import  React  from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Dep from './Dep.jsx'

createRoot(document.getElementById('root')).render(
  <React.Fragment>
    <Dep />
  </React.Fragment>
)