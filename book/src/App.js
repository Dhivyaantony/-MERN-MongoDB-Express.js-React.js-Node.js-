import './App.css';
import { BrowserRouter,Routes, Route } from 'react-router-dom';
import Login from './Pages/Login/Login';
import Home from './Pages/home';
import CourtUserViewPage from './Pages/courtUserViewPage';
import 'react-toastify/dist/ReactToastify.css';
import AddCourtForm from './Components/Common/AddCourtForm';
function App() {
  return (
    <>
    
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/home" element={<Home/>} />
          <Route path="/AddFormCourt" element={<AddCourtForm/>} />
          <Route path="/courtUserViewPage/:id" element={<CourtUserViewPage/>} />
        </Routes>
      </BrowserRouter>
      
    </>
  
  );
}


export default App;
