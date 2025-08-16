import { useState } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import { GlobalProvider } from './context/GlobalContext';

import Home from './pages/home';
import './App.css'
import Layout from './layouts/Layout';
import GamesPage from './pages/GamesPage';
import GameDetailPage from './pages/GameDetailPage';

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
            </Route>
          </Routes>
        </BrowserRouter>
      </GlobalProvider>
    </>
  )
}

export default App
