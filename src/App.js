import './App.css';
import { BrowserRouter, Routes, Route, Link, Outlet, useNavigate, Navigate, useParams } from 'react-router-dom';
import SignIn from './users/SingIn';
import Add from './users/SingIn';

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

let Error404 = () => {
  return (
    <>
      <h1>Esta pagina no existe</h1>
      <h3>Error404</h3>
      <Link to='/'>Ir al home</Link>
    </>
  )
}

function App() {
  const isAuth = false;
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Hello/>} />

        <Route path='login' element={<SignIn/>} />

        <Route path='/user' element={<UsersOutlet/>}>
          <Route path='add' element={ isAuth ? <Navigate to={'/'}/>:<Add/>} />
          <Route path='edit/:id' element={<UserEdit/>} />
          <Route path='delete/:id' element={<NotImplemented/>} />
        </Route>

        <Route path='/person' element={<NotImplemented/>} />

        <Route path='*' element={<Error404/>} />

      </Routes>
    </BrowserRouter>
  );
}

export default App;
