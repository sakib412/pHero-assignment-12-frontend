import { Route, Routes } from 'react-router-dom';
import './App.css';
import Footer from './components/Footer/Footer';
import NavBar from './components/NavBar/NavBar';
import RequireAuth from './components/RequireAuth/RequireAuth';
import AddProduct from './pages/Dashboard/AddProduct/AddProduct';
import AddReview from './pages/Dashboard/AddReview/AddReview';
import Dashboard from './pages/Dashboard/Dashboard';
import Profile from './pages/Dashboard/Profile/Profile';
import Home from './pages/Home/Home';
import Login from './pages/Login/Login';
import NotFound from './pages/NotFound/NotFound';
import Purchage from './pages/Purchage/Purchage';
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
          {/* Dashboard start */}
          <Route path='dashboard'
            element={
              <RequireAuth>
                <Dashboard />
              </RequireAuth>} >
            <Route index element={<Profile />} />
            <Route path='profile' element={<Profile />} />
            <Route path='add-review' element={<AddReview />} />
            <Route path='add-product' element={<AddProduct />} />
          </Route>
          {/* Dashboard end */}
          <Route path='/purchage/:id' element={
            <RequireAuth>
              <Purchage />
            </RequireAuth>} />
          <Route path='*' element={<NotFound />} />
        </Routes>
      </main>
      <Footer />
    </>
  );
}

export default App;
