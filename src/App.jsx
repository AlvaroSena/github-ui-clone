import React, { useState } from 'react'
import GlobalStyles from './styles/GlobalStyles'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Header } from './components/Header'
import { Profile } from './pages/Profile'

export function App() {
  const [isOpenSearchModal, setIsOpenSearchModal] = useState(false)

  return (
    <>
      <Header 
        openSearchModal={() => setIsOpenSearchModal(true)}
      />
      <GlobalStyles />

      <BrowserRouter>
        <Routes>
          <Route 
            path="/:login" 
            element={<Profile isOpenSearchModal={isOpenSearchModal} openSearchModal={() => setIsOpenSearchModal(true)} closeSearchModal={() => setIsOpenSearchModal(false)} />} 
          />
        </Routes>
      </BrowserRouter>
    </>
  )
}
