import { useDispatch } from 'react-redux';
import { cartActions } from '../store/cart-slice';
import classes from './CartItem.module.css';

const CartItem = (props) => {
  const dispatch =useDispatch();
  const { title, quantity, total, price,id } = props.item;
const removeItemHandler = () =>{
dispatch(cartActions.removeItemFromCart(id))
}
const addItemHandler = () =>{
dispatch(cartActions.addToCart({id,title,price}))
}
  return (
    <li className={classes.item}>
      <header>
        <h3>{title}</h3>
        <div className={classes.price}>
          ${total.toFixed(2)}{' '}
          <span className={classes.itemprice}>(${price.toFixed(2)}/item)</span>
        </div>
      </header>
      <div className={classes.details}>
        <div className={classes.quantity}>
          X <span>{quantity}</span>
        </div>
        <div className={classes.actions}>
          <button onClick={removeItemHandler}>-</button>
          <button onClick={addItemHandler}>+</button>
        </div>
      </div>
    </li>
  );
};

export default CartItem;
// import classes from './CartItem.module.css';

// const CartItem = (props) => {
//   const { title, quantity, total, price } = props.item;

//   // Check if total and price are defined before calling toFixed()
//   const formattedTotal = total ? total.toFixed(2) : '0.00';
//   const formattedPrice = price ? price.toFixed(2) : '0.00';

//   return (
//     <li className={classes.item}>
//       <header>
//         <h3>{title}</h3>
//         <div className={classes.price}>
//           ${formattedTotal}{' '}
//           <span className={classes.itemprice}>(${formattedPrice}/item)</span>
//         </div>
//       </header>
//       <div className={classes.details}>
//         <div className={classes.quantity}>
//           X <span>{quantity}</span>
//         </div>
//         <div className={classes.actions}>
//           <button>-</button>
//           <button>+</button>
//         </div>
//       </div>
//     </li>
//   );
// };

// export default CartItem;