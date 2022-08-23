import './App.css';
import Data from './data/productsData';
import { useParams } from 'react-router-dom';
import basket from './basket.png'

function ItemFullView({addToBasket}) {
  let popupCaller;
  function showPopUp() {
    document.getElementsByClassName("popupDiv")[0].style.display = 'flex'
    popupCaller = setTimeout(hidePopUp, 2500)
  }

  function hidePopUp() {
    clearInterval(popupCaller)
    document.getElementsByClassName("popupDiv")[0].style.display = 'none'
  }

    const {productId} = useParams()
    const thisProduct = Data[productId]
  return (
    <div className="ItemFullView">
        <div className="item">
        <div className="divItemImg">
        <img src={thisProduct.fields.imageURL} className="itemImg" alt="Product" width="300" height = "300"/>
        </div>
        <div>
        <p className="itemTitle"><b>{thisProduct.fields.title}</b></p>
        <p className="itemDescription"><i>{thisProduct.fields.description}</i></p>
        <p className="itemPrice">Rs.{thisProduct.fields.price}</p>
        <div className='addToBasketDiv'
        onClick={()=> {addToBasket(thisProduct.id);showPopUp()}}>
            <img src={basket} className='addToBasketIcon' alt='Add to basket'
            width="30" height="30"/>
            <p><b>Add to basket</b></p></div>
        </div>
    </div>
    </div>
  );
}

export default ItemFullView;
