import React, {useState} from 'react';
import Header from './components/Layout/Header';
import Meal from './components/Meal/Meal';
import Cart from './components/Cart/Cart';
import CartContextProvider from './store/CartContextProvider';

function App() {

  const [cartIsVisible, setCartIsVisible] = useState(false);

  const showCartHendler = () => {
    setCartIsVisible(true)
  }

  const hideCartHendler = () => {
    setCartIsVisible(false);
  }

  return (
    <CartContextProvider>
      {cartIsVisible && <Cart onHideCart={hideCartHendler}/>}
      <Header onShowCart={showCartHendler} />
      <main>
        <Meal/>
      </main>
    </CartContextProvider>
  );
}

export default App;
