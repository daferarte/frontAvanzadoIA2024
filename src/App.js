import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route, Link, Outlet } from 'react-router-dom';

let Hello = () => {
  return <h1>Hola estudiantes</h1>
}

let NotImplemented = () => {
  return (
    <div>
      <h1>Esta pagina aun no esta lista</h1>
      <Link to='/'>Ir al home</Link>
    </div>
  )
}

let UsersOutlet = () => {
  return (
    <>
      <p>Hola desde Usuarios</p>
      <Outlet/>
    </>
  )
}

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Hello/>} />

      
        <Route path='/user' element={<UsersOutlet/>}>
          <Route path='add' element={<NotImplemented/>} />
          <Route path='edit/:id' element={<NotImplemented/>} />
          <Route path='delete/:id' element={<NotImplemented/>} />
        </Route>

        <Route path='/person' element={<NotImplemented/>} />

      </Routes>
    </BrowserRouter>
  );
}

export default App;
