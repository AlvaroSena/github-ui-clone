import React, { useState } from 'react'
import GlobalStyles from './styles/GlobalStyles'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Header } from './components/Header'
import { Profile } from './pages/Profile'
import {SearchModal} from "./components/SearchModal/index.jsx";
import {Home} from "./pages/Home/index.jsx";

export function App() {
  const [isOpenSearchModal, setIsOpenSearchModal] = useState(false)

  return (
    <>
      <Header 
        openSearchModal={() => setIsOpenSearchModal(true)}
      />
      <GlobalStyles />
      <SearchModal
        isOpen={isOpenSearchModal}
        openModal={() => setIsOpenSearchModal(true)}
        closeModal={() => setIsOpenSearchModal(false)}
      />

      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={<Home />}
          />
          <Route 
            path="/:login" 
            element={<Profile />}
          />
        </Routes>
      </BrowserRouter>
    </>
  )
}
