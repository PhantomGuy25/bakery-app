import {Link} from "react-router-dom";

export default function Item({id, title, miniDescription, image, price, viewInDetail}) {
    return (
      <Link to={`/products/${id}`}>
    <div className="item" onClick={() => viewInDetail(id)}>
        <div className="divItemImg">
        <img src={image} className="itemImg" alt="Product"/>
        </div>
        <div>
        <p className="itemTitle"><b>{title}</b></p>
        <p className="itemMiniDescription"><i>{miniDescription}</i></p>
        <p className="itemPrice">Rs.{price}</p>
        </div>
    </div>
    </Link>
  );
}