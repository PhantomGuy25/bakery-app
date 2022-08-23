import logo from "./logo.jpg";
import basket from "./basket.png";
import loginIcon from "./login-icon.png";
import { Link } from "react-router-dom";

export default function Header({ basketItems }) {
  let basketItemCount = 0;
  for (const [, quantity] of basketItems.entries()) {
    basketItemCount += quantity;
  }
  return (
    <header>
      <Link to="/" className="bakeryIconLink">
        <img src={logo} className="bakeryIcon" alt="Main Logo" />
      </Link>
      <div className="loginBasketDiv">
        <Link to="/login">
          <img src={loginIcon} className="loginIcon" alt="Login" />
        </Link>
        <Link to="/cart" className="cartLink">
          <img src={basket} className="mainBasketIcon" alt="Cart" />
          <p className="countBadge">{basketItemCount}</p>
        </Link>
      </div>
    </header>
  );
}
