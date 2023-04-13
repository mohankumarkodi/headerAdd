import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Profile from "./components/Profile";
// import ChangePassword from "./components/ChangePassword";
// import MagazineForm from "./components/Magazine";
// import Header from "./components/Header";
import Cart from "./components/Cart";
import NotFound from "./components/NotFound";
import Products from "./components/Products";
import LoginPage from "./components/LoginPage";
import Signup from "./components/Signup";
import CartContext from "./context/CartContext";
//import Header from "./components/Header";
import Home from "./components/Home";

function App() {
  const [cartItems, setCartItems] = useState([]);

  // const [userDetails, setUserDetails] = useState("");

  const addItemToCart = (item, quantity) => {
    const existingItem = cartItems.find((cartItem) => cartItem.id === item.id);

    if (existingItem) {
      const updatedCartItems = cartItems.map((cartItem) => {
        if (cartItem.id === item.id) {
          return { ...cartItem, quantity: cartItem.quantity + quantity };
        } else {
          return cartItem;
        }
      });

      setCartItems(updatedCartItems);
    } else {
      const newCartItem = { ...item, quantity };
      setCartItems([...cartItems, newCartItem]);
    }

    console.log(cartItems);
  };

  const removeItemFromCart = (itemId) => {
    setCartItems(cartItems.filter((cartItem) => cartItem.id !== itemId));
  };

  const clearCart = () => {
    setCartItems([]);
  };

  // const setUsername = (name) => {
  //   setUserDetails(name);
  // };

  return (
    <BrowserRouter>
      <CartContext.Provider
        value={{
          cartItems,
          addItemToCart,
          removeItemFromCart,
          clearCart,
          // setUsername,
          // userDetails,
        }}
      >
        <Routes>
          <Route path="/login" exact element={<LoginPage />} />
          <Route path="/signup" exact element={<Signup />} />
          <Route path="/home" exact element={< Home/>} />
          <Route path="/products" exact element={<Products />} />
          <Route path="/cart" exact element={<Cart />} />
          <Route path="/profile" exact element={<Profile />}/>
          <Route path="/notFound" exact element={<NotFound />}/>
          
           
          {/* <SignUp />
      <Header />
      <Profile />
      <ChangePassword />
      <MagazineForm /> */}
        </Routes>
      </CartContext.Provider>
    </BrowserRouter>
  );
}
export default App;
