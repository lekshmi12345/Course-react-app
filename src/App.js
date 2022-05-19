import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'
import Courseentry from './components/Courseentry';
import Courseview from './components/Courseview';
import Navbar from './components/Navbar';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path='/'exact element={<Courseentry/>}/>
      
      <Route path='/view'exact element={<Courseview/>}/>
    </Routes>
    </BrowserRouter>
    
    
    </>
  );
}

export default App;
