import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route, Link, Outlet, redirect, useNavigate, Navigate, useParams } from 'react-router-dom';

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
  let navigate = useNavigate();
  let redirect=()=>{
    navigate('/');
  }
  return (
    <>
      <p>Hola desde Usuarios</p>
      <button onClick={redirect}>Ir al home</button>
      <Outlet/>
    </>
  )
}

let UserEdit = () => {
  let {id} = useParams(); //capturo parametro
  let params = useParams();
  console.log(params);
  return (
    <>
      <h1>{id}</h1>
    </>
  )
}

function App() {
  const isAuth = false;
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Hello/>} />

      
        <Route path='/user' element={<UsersOutlet/>}>
          <Route path='add' element={ isAuth ? <Navigate to={'/'}/>:<NotImplemented/>} />
          <Route path='edit/:id' element={<UserEdit/>} />
          <Route path='delete/:id' element={<NotImplemented/>} />
        </Route>

        <Route path='/person' element={<NotImplemented/>} />

      </Routes>
    </BrowserRouter>
  );
}

export default App;
