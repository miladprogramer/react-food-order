
import './App.css';
import Header from './components/Header'
import Home from './components/Home'
import Footer from './components/Footer'
import Cart from './components/Cart';
import {  useSelector } from 'react-redux/es/hooks/useSelector';


function App() {

  const toggleBasket=useSelector((state) => state.cartUi.cartVisible)
  return (
<>
<Header />
{
  toggleBasket && <Cart />
}

<Home />
<Footer />
</>
  );
}

export default App;
