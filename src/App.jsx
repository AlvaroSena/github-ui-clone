import React from 'react'
import GlobalStyles from './styles/GlobalStyles'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Header } from './components/Header'
import { Profile } from './pages/Profile'

export class App extends React.Component {
  render() {
    return (
      <>
        <Header />
        <GlobalStyles />

        <BrowserRouter>
          <Routes>
            <Route path="/:login" element={<Profile />} />
          </Routes>
        </BrowserRouter>
      </>
    )
  }
}
