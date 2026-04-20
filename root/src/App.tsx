import { BrowserRouter, Route, Routes } from 'react-router'
import './App.css'
import { MainLayout } from './layouts/MainLayout'
import { LigeNuPage } from './pages/LigeNuPage'
import { OversigtPage } from './pages/OversigtPage'
import { HistorikPage } from './pages/HistorikPage'

function App() {

  // settingssiden i enten context eller mainLayout

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route element={<MainLayout />} >
            <Route path='/' element={<LigeNuPage />} />
            <Route path='/oversigt' element={<OversigtPage />} />
            <Route path='/historik' element={<HistorikPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
