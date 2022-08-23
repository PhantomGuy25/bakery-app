import { Link } from "react-router-dom";

export default function CartItem({
  id,
  title,
  miniDescription,
  image,
  price,
  quantity,
  incrementQuantity,
  decrementQuantity,
}) {
  return (
    <div className="itemInCart" key={id}>
      <div className="mainCartContent">
        <Link to={`/products/${id}`}>
          <div className="divItemImg">
            <img src={image} className="cartitemImg" alt="Product" />
          </div>
        </Link>
        <div>
          <Link to={`/products/${id}`}>
            <p className="itemTitle">
              <b>{title}</b>
            </p>
            <p className="itemMiniDescription">
              <i>{miniDescription}</i>
            </p>
          </Link>
          <p className="itemPrice">Rs.{price}</p>
        </div>
      </div>
      <div className="quantityAdjustDiv">
        <p className="incrementBtn" onClick={() => incrementQuantity(id)}>
          +
        </p>
        <p className="quantityInCart">{quantity}</p>
        <p className="decrementBtn" onClick={() => decrementQuantity(id)}>
          -
        </p>
      </div>
    </div>
  );
}
