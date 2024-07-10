import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './Components/Navbar';
import { About } from './Pages/About';
import Home from './Pages/Home';
import Footer from './Components/Footer';
import Contact from './Pages/Contact';
import Everything from './Pages/Everything';
import Men from './Pages/Men';
import Women from './Components/Women';
import Cart from './Components/Cart';
import Accessories from '../src/Components/Accessories';
import Detail from './Components/Detail';
import { Provider } from "react-redux";
import  store  from './Components/redux/Store';
import SignIn from './Pages/SignIn';
import Login from './Pages/Login';

function App() {
  return (

      <BrowserRouter>
          <Provider store={store}>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/everything' element={<Everything />} />
          <Route path='/men' element={<Men />} />
          <Route path='/women' element={<Women />} />
          <Route path='/cart' element={<Cart />} />
          <Route path='/accessories' element={<Accessories />} />
          <Route path="/product/:productId" element={<Detail />} />
          <Route path='/signin' element={<SignIn />} />
          <Route path='/login' element={<Login />} />

        </Routes>
        <Footer />
        </Provider>

      </BrowserRouter>

  );
}

export default App;
