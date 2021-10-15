import { GlobalStyle } from "./GlobalStyles";
import { CartProvider } from "./providers/cart";
import Routes from "./routes";

function App() {
    return (
    <>
      <GlobalStyle />      
      <CartProvider>
        <Routes />
      </CartProvider>      
    </>
  );
}

export default App;
