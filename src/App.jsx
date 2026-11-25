import { BrowserRouter } from 'react-router-dom'
import { ThemeProvider } from './context/ThemeContext'
import { LanguageProvider } from './context/LanguageContext'
import Home from './pages/Home'

export default function App() {
  return (
    <ThemeProvider>
      <LanguageProvider>
        <BrowserRouter>
          {/* Global grain noise overlay for texture */}
          <div className="noise-overlay" aria-hidden="true" />
          <Home />
        </BrowserRouter>
      </LanguageProvider>
    </ThemeProvider>
  )
}
