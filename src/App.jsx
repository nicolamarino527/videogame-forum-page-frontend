import { useState } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { GlobalProvider } from './context/GlobalContext';

import '@fontsource/roboto';
import '@fontsource/rajdhani';

import '@fortawesome/fontawesome-free/css/all.min.css';

import Home from './pages/home';
import './App.css'
import Layout from './layouts/Layout';
import GamesPage from './pages/GamesPage';
import GameDetailPage from './pages/GameDetailPage';
import Info from './pages/Info';
import BecameMemberPage from './pages/BecameMemberPage';

function App() {

  const [count, setCount] = useState(0)

  return (
    <>
      <GlobalProvider>
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<Layout />}>
              <Route index element={<Home />} />
              <Route path='/games' element={<GamesPage />} />
              <Route path='/games/:id' element={<GameDetailPage />} />
              <Route path='/info' element={< Info />} />
              <Route path='/becameMember' element={< BecameMemberPage />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </GlobalProvider>
    </>
  )
}

export default App
