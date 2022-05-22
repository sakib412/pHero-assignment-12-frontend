import { Route, Routes } from 'react-router-dom';
import './App.css';
import Footer from './components/Footer/Footer';
import NavBar from './components/NavBar/NavBar';
import Home from './pages/Home/Home';
import Login from './pages/Login/Login';

function App() {
  return (
    <>
      <header className='sticky top-0 z-50'>
        <NavBar />
      </header>
      <main>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/signin' element={<Login />} />
        </Routes>
      </main>
      <Footer />
    </>
  );
}

export default App;
