import "./App.css";
import { useState } from "react";
import bakeryData from "./assets/bakery-data.json";
import BakerItem from "./components/BakeryItem";
import Cart from "./components/Cart";

/* ####### DO NOT TOUCH -- this makes the image URLs work ####### */
bakeryData.forEach((item) => {
  item.image = process.env.PUBLIC_URL + "/" + item.image;
});
/* ############################################################## */

function App() {
  // TODO: use useState to create a state variable to hold the state of the cart
  /* add your cart state code here */
  const [cart, setCart] = useState({});
  // const [cartKeys, setCartKeys] = useState([])
  const [totalPrice, setTotalPrice] = useState(0);
  const incrementTotalPrice = (addition) => {
    // let newTotal = totalPrice + addition
    setTotalPrice(totalPrice + addition);
  }
  const updateCart = (newItem, cost) => { 
    let newCart = {...cart};
    // Increment if the item is already in the cart
    if (newItem in newCart) {
      newCart[newItem] += 1;
    // Otherwise add item to cart at quantity 1
    } else {
      newCart[newItem] = 1;
    }
    console.log("Item: " + newItem + " Quant: " + newCart[newItem]);
    setCart(newCart);
    // Update keys to trigger react
    // setCartKeys(Object.keys(newCart));
    // Add the cost of the new item to the total cost
    incrementTotalPrice(cost);
  }

  const [test, setTest] = useState([1,2,3]);

  return (
    <div className="App">

      {test.map((val, i) => {
        <p key={i}>{val}</p>
      })}

      <h1>Spenny D's Bakery</h1> {/* TODO: personalize your bakery (if you want) */}
      <div className="MenuWrapper">
        {bakeryData.map((item, index) => ( // TODO: map bakeryData to BakeryItem components
          <BakerItem i={item} addToCart={updateCart}/>
        ))}
      </div>
      {/* <Cart k={cartKeys} c={cart} p={totalPrice}/> */}
      <ul>
        {Object.keys(cart).map((k, i) => {
          console.log("mapping");
          <li key={i}>{cart[k]}x {k}</li>
        })}
      </ul>
      <p>Total Price: ${totalPrice}</p>
    </div>
  );
}

export default App;