import { createRoot } from 'react-dom/client'
import './index.css'
import App from './components/App.jsx'
import { BrowserRouter, Route, Routes } from 'react-router'
import _404 from './components/_404.jsx'
import Cuadricula from './components/Cuadricula.jsx'
import Home from './components/Home.jsx'
import CryptoPage from './components/CryptoPage.jsx'
import Login from './components/Login.jsx'

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
      <Route path='/login' element={<Login />} />
      <Route path='*' element={<_404 />} />
    </Routes>
  </BrowserRouter>
)