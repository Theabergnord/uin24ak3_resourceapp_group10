import Resources from './Resources.jsx';
import './css/main.css';
//Kilde til Routing: https://www.w3schools.com/react/react_router.asp
import {BrowserRouter, BrowserRouter as Routes, Route} from 'react-router-dom'
import Navbar from './Navbar'
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import { resources } from './assets/ressurser';


function App() {

  //Kilde til routing https://www.w3schools.com/react/react_router.asp
  //Har også sett på forelesningsnotater om routing.
  return (
    <Router>
        <Navbar/>
        <Routes>
          <Route path="/:id" element={<Resources resources={resources}/>}>
          </Route>
        </Routes> 
    </Router>
  )
}

export default App
