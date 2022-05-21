import { Route, Routes } from 'react-router-dom';
import './App.css';
import NavBar from './components/NavBar/NavBar';
import Home from './pages/Home/Home';

function App() {
  return (
    <>
      <header>
        <NavBar />
      </header>
      <main className=''>
        <Routes>
          <Route path='/' element={<Home />} />
        </Routes>
      </main>
    </>
  );
}

export default App;
