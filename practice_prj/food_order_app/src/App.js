import Header from "./components/Layout/Header";
import Foods from "./components/Food/Foods";
import Cart from "./components/Cart/Cart";
function App() {
  return (
    <>
      <Cart />
      <Header />
      <main>
        <Foods />
      </main>
    </>
  );
}

export default App;
