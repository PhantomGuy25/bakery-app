import Data from "./data/productsData";
import CartItem from "./CartItem";
import { Link } from "react-router-dom";

export default function Cart({
  basketItems,
  incrementQuantity,
  decrementQuantity,
}) {
  var rows = [];
  var totalQuantity = 0;
  var totalPrice = 0;
  var noItems = <h2 className="noItems">Cart is empty</h2>;

  if (basketItems.size === 0 || basketItems.size === undefined) {
    rows = noItems;
  } else {
    for (const [ID, quantity] of basketItems.entries()) {
      totalQuantity += quantity;
      totalPrice += parseInt(quantity) * parseInt(Data[ID].fields.price);
      rows.push(
        <CartItem
          id={Data[ID].id}
          title={Data[ID].fields.title}
          miniDescription={Data[ID].fields.miniDescription}
          image={Data[ID].fields.imageURL}
          quantity={basketItems.get(Data[ID].id)}
          price={Data[ID].fields.price}
          incrementQuantity={incrementQuantity}
          decrementQuantity={decrementQuantity}
        />
      );
    }
    rows.push(
      <div>
        <div className="totalContents">
          <p className="totalQuantity">Total quantity - {totalQuantity}</p>
          <p className="totalPrice">Total price - Rs.{totalPrice}</p>
        </div>
        <div className="checkoutBtnDiv">
          <Link to="/checkout" className="checkoutBtnLink" state={{ total: totalPrice }}>
            <p className="checkoutBtn">&#9989; Checkout</p>
          </Link>
        </div>
      </div>
    );
  }

  return rows;
}
