import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
// import App from './App.jsx'
// import ClickCounter from './ClickCounter.jsx'
// import StopWatch from './StopWatch.jsx'
// import FocusInput from './FocusInput.jsx'
import ScrollView from './ScrollView.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <App/> */}
    {/* <ClickCounter /> */}
    {/* <StopWatch /> */}
    {/* <FocusInput /> */}
    <ScrollView />
  </StrictMode>
)
