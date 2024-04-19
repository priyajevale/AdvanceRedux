import classes from './CartButton.module.css';
import { useDispatch } from 'react-redux';
import uiSlice, { uiActions } from '../store/ui-slice';
const CartButton = (props) => {
  const dispatch=useDispatch();
  const toggleButtonHandler= () =>{
dispatch(uiActions.toggle());
  }
  return (
    <button className={classes.button} onClick={toggleButtonHandler}>
      <span>My Cart</span>
      <span className={classes.badge}>1</span>
    </button>
  );
};

export default CartButton;