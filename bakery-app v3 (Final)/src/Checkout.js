import { Link, useLocation } from "react-router-dom";

export default function Checkout({ clearBasket }) {
  const location = useLocation();
  const { total } = location.state;

  if (total === 0 || total === undefined) {
    return <h2>No items were added to cart</h2>;
  } else {
    return (
      <div className="checkoutDiv">
        <div>
          <h2 className="enterDetails">Enter shipping details</h2>
        </div>
        <div>
          <label htmlFor="name" id="nameID" className="inputLabel">
            Name
          </label>
          <input
            type="text"
            name="name"
            id="name"
            className="inputText"
            placeholder="Enter name"
            required
            minLength="2"
            maxLength="25"
          />
        </div>
        <div>
          <label htmlFor="contact" id="contactID" className="inputLabel">
            Contact
          </label>
          <input
            type="number"
            name="contact"
            id="contact"
            className="inputText"
            placeholder="Enter contact"
            required
            minLength="8"
            maxLength="10"
          />
        </div>
        <div>
          <label htmlFor="address" className="inputLabel" id="address">
            Address
          </label>
          <textarea
            name="address"
            id="address"
            className="inputText"
            required
            maxLength="50"
            placeholder="Enter address"
          />
        </div>
        <label htmlFor="gateway" className="inputLabel">
          Choose a payment gateway:{" "}
        </label>

        <select name="gateway" id="gateway" className="inputText">
          <option defaultValue="">Citrus Pay</option>
          <option defaultValue="">CCAvenue</option>
          <option defaultValue="">PayUBiz</option>
          <option defaultValue="">Bill Desk</option>
        </select>

        <h2 className="totalCheckoutAmount">Total amount - {total}</h2>
        <div className="proceedButton">
          <Link to="/" onClick={() => clearBasket()}>
            <button id="submit">Proceed</button>
          </Link>
        </div>
      </div>
    );
  }
}
