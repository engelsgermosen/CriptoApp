import { createRoot } from 'react-dom/client'
import './index.css'
import App from './components/App.jsx'
import { BrowserRouter, Route, Routes } from 'react-router'
import NotFound from './components/NotFound.jsx'
import Cuadricula from './components/Cuadricula.jsx'
import Home from './components/Home.jsx'
import CryptoPage from './components/CryptoPage.jsx'

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <Routes>
      <Route path='/' element={<App />}>
        <Route index element={<Home />} />
      </Route>
      <Route path='/criptomonedas' element={<App />}>
        <Route index element={<Cuadricula />} />
        <Route path=':id' element={<CryptoPage />} />
      </Route>
      <Route path='*' element={<NotFound />} />
    </Routes>
  </BrowserRouter>
)
