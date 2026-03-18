import { BrowserRouter } from 'react-router-dom'
import Home from './pages/Home'

export default function App() {
  return (
    <BrowserRouter>
      {/* Global grain noise overlay for texture */}
      <div className="noise-overlay" aria-hidden="true" />
      <Home />
    </BrowserRouter>
  )
}
