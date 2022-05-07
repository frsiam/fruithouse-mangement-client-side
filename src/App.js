import { Route, Routes } from 'react-router-dom';
import Blogs from './pages/Blogs/Blogs';
import Home from './pages/Home/Home';
import Inventory from './pages/Inventory/Inventory';
import Login from './pages/Login/Login';
import Register from './pages/Login/Register';
import ManageInventory from './pages/ManageInventory/ManageInventory';
import NotFound from './pages/NotFound/NotFound';
import RequireAuth from './pages/RequireAuth/RequireAuth';
import Footer from './pages/Shared/Footer/Footer';
import Header from './pages/Shared/Header/Header';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import AddItem from './pages/AddItem/AddItem';
import MyItems from './pages/MyItems/MyItems';

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="home" element={<Home />} />
        <Route path='inventory/:id' element={
          <RequireAuth>
            <Inventory />
          </RequireAuth>
        } />
        <Route path='/additem' element={
          <RequireAuth>
            <AddItem />
          </RequireAuth>
        } />
        <Route path='/myitems' element={
          <RequireAuth>
            <MyItems />
          </RequireAuth>
        } />
        <Route path='/manageinventory' element={
          <RequireAuth>
            <ManageInventory />
          </RequireAuth>
        } />
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />
        <Route path='/blogs' element={<Blogs />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
      <Footer />
      <ToastContainer />
    </div>
  );
}

export default App;
