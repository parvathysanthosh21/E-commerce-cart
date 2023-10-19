import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './Pages/Home';
import Cart from './Pages/Cart';
import Wishlish from './Pages/Wishlist'
import Header from './components/Header';
import Footer from './components/Footer';
function App() {
  return (
    <>
     <Header/>
<Routes>
 
  <Route path='/' element={<Home/>}/>
  <Route path='/cart' element={<Cart/>}/>
  <Route path='/wishlist' element={<Wishlish/>}/>
</Routes>
<hr/>
<Footer/>
    </>
  );
}

export default App;
