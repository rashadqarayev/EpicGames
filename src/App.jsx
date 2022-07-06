import React, { Suspense, useState,useEffect } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
// import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Faq from "./pages/FAQ";
import Help from "./pages/Help";
// import Footer from "./components/Footer";
import News from "./components/News";
import Discover from "./components/Discover";
import BrowseGames from "./components/BrowseGames";
import GameDetails from "./pages/GameDetails";
import NewsDetails from "./pages/NewsDetails";
import Cart from "./components/Cart";
import { CartProvider } from "react-use-cart";
import WishList from "./components/WishList";
import Signin2 from "./pages/Signin2";
import EpicSignIn from './pages/EpicSignIn'
// import SignIn from './pages/SignIn';
import EpicRegister from "./pages/EpicRegister";

const App = () => {

  // const match = useRouteMatch("/signin")
  // const islocalstorage = JSON.parse(localStorage.getItem("product"))  || [] ;
  const islocalstorage = localStorage.product ? JSON.parse(localStorage.product) : [];
  const [cartItems, setcartItems] = useState(islocalstorage);


  useEffect(() => {
    localStorage.product = JSON.stringify(cartItems)
  
  }, [cartItems])
  

  const handleAddProduct = (product) => {

    const ProductExist = cartItems.find((item) => item.id === product.id);
    if (ProductExist) {
      setcartItems(
        cartItems.map((item) =>
          item.id === product.id
            ? { ...ProductExist, quantity: ProductExist.quantity + 1 }
            : item
        )
      );
    } else {
      setcartItems([...cartItems, { ...product, quantity: 1 }]);
    }
  };

  const handleRemoveProduct = (product) => {
    const ProductExist = cartItems.find((item) => item.id === product.id);
    if (ProductExist.quantity === 1) {
      setcartItems(cartItems.filter((item) => item.id !== product.id));
    } else {
      setcartItems(
        cartItems.map((item) =>
          item.id === product.id
            ? { ...ProductExist, quantity: ProductExist.quantity - 1 }
            : item
        )
      );
    }
  };

  return (
    <div className="App">
      <Suspense fallback={<div></div>}>
        <CartProvider>
          <BrowserRouter basename="/"> 
          
            {/* <Navbar/> */}
  

            <Switch>
              <Route exact path="/"  component={Home} />
              <Route path="/faq" component={Faq} />
              <Route path="/help" component={Help} />
              <Route path="/news" component={News} />
              <Route exact path="/" component={Discover} />
              <Route path="/browsegames" component={BrowseGames} />
              <Route path="/signin" component={Signin2} />
              <Route path="/epic-sign-in" component={EpicSignIn} />
              <Route path="/epic-register" component={EpicRegister} />
              <Route path="/games/:gameId">

                <GameDetails
                  cartItems={cartItems}
                  handleAddProduct={handleAddProduct}
                ></GameDetails>
              </Route>
              <Route path="/epicnews/:newsId" component={NewsDetails} />
              <Route path="/cart" component={Cart} />
              <Route path="/wishlist">
                <WishList handleRemoveProduct={handleRemoveProduct} cartItems={cartItems}></WishList>
              </Route>
            </Switch>
          </BrowserRouter>
        </CartProvider>
      </Suspense>
    </div>
  );
};

export default App;
