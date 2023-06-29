import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Component/Home";
import Cart from "./Component/Cart";
import Header from "./Component/Header";
import { Provider } from "react-redux";
import store from "./Store/store";

const App = () => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" Component={Home} />
          <Route path="/cart" Component={Cart} />
        </Routes>
      </BrowserRouter>
    </Provider>
  );
};

export default App;
