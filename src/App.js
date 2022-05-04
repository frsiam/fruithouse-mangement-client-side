import { Route, Routes } from 'react-router-dom';
import Blogs from './pages/Blogs/Blogs';
import Home from './pages/Home/Home';
import Inventory from './pages/Inventory/Inventory';
import Login from './pages/Login/Login';
import Register from './pages/Login/Register';
import ManageInventory from './pages/ManageInventory/ManageInventory';
import NotFound from './pages/NotFound/NotFound';
import Footer from './pages/Shared/Footer/Footer';
import Header from './pages/Shared/Header/Header';

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="home" element={<Home />} />
        <Route path='inventory/:id' element={<Inventory />} />
        <Route path='/manageinventory' element={<ManageInventory />} />
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />
        <Route path='/blogs' element={<Blogs />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
