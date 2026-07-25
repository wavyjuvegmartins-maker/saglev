import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import { Nav } from './components'
import AboutPage from './pages/AboutPage'
import ContactPage from './pages/ContactPage'
import FaqPage from './pages/FaqPage'
import HomePage from './pages/HomePage'
import ModelsPage from './pages/ModelsPage'
import NewsPage from './pages/NewsPage'

export default function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-[#0f161d] text-white">
        <Nav />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/models" element={<ModelsPage />} />
          <Route path="/news" element={<NewsPage />} />
          <Route path="/faqs" element={<FaqPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </div>
    </BrowserRouter>
  )
}
