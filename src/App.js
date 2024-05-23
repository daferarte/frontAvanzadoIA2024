import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';

let Hello = () => {
  return <h1>Hola estudiantes</h1>
}

let NotImplemented = () => {
  return (
    <div>
      <h1>Esta pagina aun no esta lista</h1>
    </div>
  )
}

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Hello/>} />

      
        <Route path='/user' element={<NotImplemented/>} />
        <Route path='/user/add' element={<NotImplemented/>} />
        <Route path='/user/edit/:id' element={<NotImplemented/>} />
        <Route path='/user/delete/:id' element={<NotImplemented/>} />

      </Routes>
    </BrowserRouter>
  );
}

export default App;
