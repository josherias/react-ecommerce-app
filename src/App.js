import React from "react";
import "./App.css";
import NotFound from "./pages/NotFound";
import Home from "./pages/Home";
import Products from "./pages/Products";
import DetailsPage from "./pages/DetailsPage";

import { Route, Switch } from "react-router-dom";
import Navbar from "./components/Navbar";

import Cart from "./pages/Cart";
import Footer from "./components/Footer";
import CategoriesPage from "./pages/CategoriesPage";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/products" component={Products} />
        <Route exact path="/details/:slug" component={DetailsPage} />
        <Route exact path="/categories/:category" component={CategoriesPage} />
        <Route exact path="/cart" component={Cart} />
        <Route component={NotFound} />
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
