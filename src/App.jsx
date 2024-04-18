import { useState } from 'react'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'

import './App.css'
import HospitalLayout, {loader as hospitalLayoutLoader} from './components/HospitalLayout'
import Layout from './components/Layout'
import About from './pages/About'
import Home from './pages/Home'
import Dashboard, {loader as dashboardLoader} from './pages/hospitals/Dashboard'
import HospitalScanners, { loader as hospitalScannersLoader } from './pages/hospitals/HospitalScanners'
import Income from './pages/hospitals/Income'
import Reviews from './pages/hospitals/Reviews'
import ScannerDetails, { loader as scannersDetailsLoader } from './pages/ScannerDetails'
import Scanners, { loader as scannersLoader } from './pages/Scanners'
import HospitalScannerDetails, { loader as hospitalScannerDetailsLoader } from './pages/hospitals/HospitalScannerDetails'
import SelectedHospitalScannerDetails from './components/SelectedHospitalScannerDetails'
import SelectedHospitalScannerPricing from './components/SelectedHospitalScannerPricing'
import SelectedHospitalScannerPhotos from './components/SelectedHospitalScannerPhotos'
import NotFound from './pages/NotFound'
import Login, {action as loginAction, loader as loginLoader} from './pages/Login'
import Signup, {action as signupAction, loader as signupLoader} from './pages/Signup'
import NewHospital from './pages/hospitals/NewScanner'


function App() {

  const router = createBrowserRouter(createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route index element={<Home />} />
      <Route path='about' element={<About />} />
      <Route path='scanners' element={<Scanners />} loader={scannersLoader} />
      <Route path='scanners/:id' element={<ScannerDetails />} loader={scannersDetailsLoader} />
      <Route path='hospital' element={<HospitalLayout />} loader={hospitalLayoutLoader}>
        <Route index element={<Dashboard />} loader={dashboardLoader}/>
        <Route path='income' element={<Income />} />
        <Route path='scanners' element={<HospitalScanners />} loader={hospitalScannersLoader} />
        <Route path='scanners/:id' element={<HospitalScannerDetails />} loader={hospitalScannerDetailsLoader}>
          <Route index element={<SelectedHospitalScannerDetails/>}/>
          <Route path='pricing' element={<SelectedHospitalScannerPricing/>}/>
          <Route path='photos' element={<SelectedHospitalScannerPhotos/>}/>
        </Route>
        <Route path='newhospital'  element={<NewHospital/>}/>
        <Route path='reviews' element={<Reviews />} />
      </Route>
      <Route path='/login' element={<Login/>} action={loginAction} loader={loginLoader}/>
      <Route path='/signup' element={<Signup/>} action={loginAction} loader={loginLoader}/>
      <Route path='*' element={<NotFound/>}/>
    </Route>
  ))

  return (
    <RouterProvider router={router} />
  )
}

export default App
