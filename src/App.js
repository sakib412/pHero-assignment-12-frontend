import { Route, Routes } from 'react-router-dom';
import './App.css';
import Footer from './components/Footer/Footer';
import NavBar from './components/NavBar/NavBar';
import RequireAuth from './components/RequireAuth/RequireAuth';
import Dashboard from './pages/Dashboard/Dashboard';
import Home from './pages/Home/Home';
import Login from './pages/Login/Login';
import NotFound from './pages/NotFound/NotFound';
import SignUp from './pages/SignUp/SignUp';

function App() {
  return (
    <>
      <header className='sticky top-0 z-50'>
        <NavBar />
      </header>
      <main>
        <Routes>
          <Route index element={<Home />} />
          <Route path='/signin' element={<Login />} />
          <Route path='/signup' element={<SignUp />} />
          <Route path='dashboard'
            element={<RequireAuth>
              <Dashboard />
            </RequireAuth>} >
            <Route index element={<div>My Dashboard</div>} />
            <Route path='profile' element={<div>My profile</div>} />
          </Route>
          <Route path='*' element={<NotFound />} />
        </Routes>
      </main>
      <Footer />
    </>
  );
}

export default App;
