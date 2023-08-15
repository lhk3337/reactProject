import Header from "./components/Layout/Header";
import Foods from "./components/Food/Foods";
import Cart from "./components/Cart/Cart";
import { useState } from "react";
function App() {
  const [cartIsShown, setCartIsShown] = useState(false);

  const showCartHandler = () => {
    setCartIsShown(true);
  };
  const hideCartHandler = () => {
    setCartIsShown(false);
  };
  return (
    <>
      {cartIsShown && <Cart onClose={hideCartHandler} />}
      <Header onShowCart={showCartHandler} />
      <main>
        <Foods />
      </main>
    </>
  );
}

export default App;
