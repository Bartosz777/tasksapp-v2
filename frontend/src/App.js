import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import Signup from './pages/Singup'
import Login from './pages/Login'
import useAuthContext from './hooks/useAuthContext'


function App() {
  const { user } = useAuthContext()

  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={user ? <Home /> : <Navigate to='/login'/>}/>
          <Route path='/login' element={!user ? <Login /> : <Navigate to='/'/>}/>
          <Route path='/signup' element={!user ? <Signup /> : <Navigate to='/'/>}/>
        </Routes>
      </BrowserRouter>
      <Footer />
    </div>
  );
}

export default App;
