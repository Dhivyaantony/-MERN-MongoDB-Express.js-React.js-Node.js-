import './App.css';
import { BrowserRouter,Routes, Route } from 'react-router-dom';
import Login from './Pages/Login/Login';
import Home from './Pages/home';

import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <>
    
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/home" element={<Home/>} />
        </Routes>
      </BrowserRouter>
      
    </>
  
  );
}


export default App;
