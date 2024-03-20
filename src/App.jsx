import './css/main.css';
//Kilde til Routing: https://www.w3schools.com/react/react_router.asp
import {BrowserRouter, BrowserRouter as Routes, Route} from 'react-router-dom'
import Navbar from './Navbar'

function App() {

  return (
    <BrowserRouter>
    <Navbar />
    </BrowserRouter>
  )
}

export default App
