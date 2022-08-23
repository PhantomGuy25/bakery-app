import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import ItemFullView from "./ItemFullView";
import Items from "./items";
import Cart from "./Cart";
import { Component } from "react";
import Checkout from "./Checkout";
import Login from "./Login";
import Register from "./Register";

export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      basketItems: new Map(),
      cartTotal: 0,
    };

    this.clearBasket = this.clearBasket.bind(this);
    this.addToBasket = this.addToBasket.bind(this);
    this.incrementQuantity = this.incrementQuantity.bind(this);
    this.decrementQuantity = this.decrementQuantity.bind(this);

    this.setCartTotal = this.setCartTotal.bind(this);

    //Just to check cart HashMap
    this.printCart = this.printCart.bind(this);
  }

  printCart() {
    console.log("Cart items as follows");
    console.log(this.state.basketItems);
  }

  setCartTotal(givenCartTotal) {
    this.setState({ cartTotal: givenCartTotal });
  }

  clearBasket() {
    this.setState({ basketItems: this.state.basketItems.clear() });
  }

  addToBasket(newItemID) {
    if (this.state.basketItems.has(newItemID)) {
      this.incrementQuantity(newItemID);
    } else {
      this.setState({ basketItems: this.state.basketItems.set(newItemID, 1) });
    }
    this.printCart();
  }

  incrementQuantity(newItemID) {
    this.setState({
      basketItems: this.state.basketItems.set(
        newItemID,
        this.state.basketItems.get(newItemID) + 1
      ),
    });
    this.printCart();
  }

  decrementQuantity(newItemID) {
    if (this.state.basketItems.get(newItemID) === 1) {
      let items = this.state.basketItems;
      items.delete(newItemID);
      this.setState({ basketItems: items });
    } else {
      this.setState({
        basketItems: this.state.basketItems.set(
          newItemID,
          this.state.basketItems.get(newItemID) - 1
        ),
      });
    }
    this.printCart();
  }

  render() {
    return (
      <Router>
        <div className="App">
          <Header basketItems={this.state.basketItems} />
          <Routes>
            <Route
              exact
              path="/"
              element={
                <div className="itemsDiv">
                  <Items />
                </div>
              }
            />
            <Route exact path="/checkout" element={<Checkout />} />
            <Route exact path="/login" element={<Login />} />
            <Route exact path="/register" element={<Register />} />
            <Route
              path="/products/:productId"
              element={<ItemFullView addToBasket={this.addToBasket} />}
            />
            <Route
              path="/cart"
              element={
                <Cart
                  basketItems={this.state.basketItems}
                  incrementQuantity={this.incrementQuantity}
                  decrementQuantity={this.decrementQuantity}
                />
              }
            />
            <Route
              exact
              path="/checkout"
              element={<Checkout clearBasket={this.clearBasket} />}
            />
          </Routes>
          <Footer />
        </div>
      </Router>
    );
  }
}
