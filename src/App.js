import React from "react";
import "./App.css";
import { ShoppingCartPage } from "./features/shoppingCart/components/pages/ShoppingCartPage/ShoppingCartPage";

function App() {
  return (
    <div className="App" data-testid="App">
      <ShoppingCartPage />
    </div>
  );
}

export default App;
