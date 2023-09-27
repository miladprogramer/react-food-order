
import './App.css';
import Header from './components/Header'

import Footer from './components/Footer'
import Cart from './components/Cart';
import { useSelector } from 'react-redux/es/hooks/useSelector';
import Routes from './components/Routers';

function App() {

  const toggleBasket = useSelector((state) => state.cartUi.cartVisible)
  return (
    <>

      <div>
        <Header />

        {toggleBasket && <Cart />}

        <div>
          <Routes />
        </div>
        <Footer />
      </div>
    </>
  );
}

export default App;
