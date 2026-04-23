import { BrowserRouter, Route, Routes } from 'react-router'
import './App.css'
import { MainLayout } from './layouts/MainLayout'
import { LigeNuPage } from './pages/LigeNuPage'
import { OversigtPage } from './pages/OversigtPage'
import { HistorikPage } from './pages/HistorikPage'
import { SettingsPage } from './pages/SettingsPage'
import { SettingsProvider } from './context/SettingsContext'

function App() {

  // settingssiden i enten context eller mainLayout

  return (
    <>
      <SettingsProvider >
        <BrowserRouter>
          <Routes>
            <Route element={<MainLayout />} >
              <Route path='/' element={<LigeNuPage />} />
              <Route path='/oversigt' element={<OversigtPage />} />
              <Route path='/historik' element={<HistorikPage />} />
              <Route path='/settings' element={<SettingsPage />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </SettingsProvider>
    </>

  )
}

export default App
