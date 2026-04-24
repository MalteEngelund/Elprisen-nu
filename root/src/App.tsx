import { BrowserRouter, Route, Routes } from 'react-router'
import './App.css'
import { MainLayout } from './layouts/MainLayout'
import { LigeNuPage } from './pages/LigeNuPage'
import { OversigtPage } from './pages/OversigtPage'
import { HistorikPage } from './pages/HistorikPage'
import { SettingsPage } from './pages/SettingsPage'
import { SettingsProvider } from './context/SettingsContext'
import { DesktopPage } from './pages/DesktopPage'
import { useEffect } from 'react'
import { useNavigate} from 'react-router-dom'
import { DesktopLayout } from './layouts/DesktopLayout'

function App() {

  if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
      navigator.serviceWorker.register('/sw.js')
        .then(registration => {
          console.log('Service Worker registered:', registration);
        })
        .catch(error => {
          console.error('Service Worker registration failed:', error);
        });
    });
  }

  function DesktopRedirect() {
  const navigate = useNavigate();

  useEffect(() => {
    if (window.innerWidth >= 1024) { // You can adjust the width as needed
      navigate("/desktop");
    }
  }, [navigate]);

  return null;
}

  // settingssiden i enten context eller mainLayout

  return (
    <>
      <SettingsProvider >
        <BrowserRouter>
          <DesktopRedirect />
          <Routes>
            <Route element={<MainLayout />} >
              <Route path='/' element={<LigeNuPage />} />
              <Route path='/oversigt' element={<OversigtPage />} />
              <Route path='/historik' element={<HistorikPage />} />
              <Route path='/settings' element={<SettingsPage />} />
            </Route>
            <Route element={<DesktopLayout />} >
              <Route path='/desktop' element={<DesktopPage />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </SettingsProvider>
    </>

  )
}

export default App
