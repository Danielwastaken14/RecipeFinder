import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import RecipeDetailed from './RecipeDetailed.jsx';
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
  <Router>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/recipe/:id" element={<RecipeDetailed />} />
      </Routes>
    </Router>
  </StrictMode>,
)
