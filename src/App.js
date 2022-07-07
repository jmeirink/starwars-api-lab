import './App.css'
import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar/Navbar'
import AllStarships from './pages/AllStarships/AllStarships'
import StarshipPage from './pages/StarshipPage/StarshipPage'

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<AllStarships />} />
        <Route path="/starships" element={<StarshipPage />} />
      </Routes>
    </>
  )
}

export default App