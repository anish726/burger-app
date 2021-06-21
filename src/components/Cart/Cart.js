import React, { useContext } from 'react'
import classes from './Cart.module.css'
import Modal from '../UI/Modal'
import CartContext from '../../store/cart-context'
import CartItem from './CartItem'

const Cart = (props)=> {

   const cartData = useContext(CartContext);
   


  

  const totalAmount = `$${cartData.totalAmount.toFixed(2)}`;
  const hasItems = cartData.items.length > 0 ;
   
  const removeCartHandler = (id) =>{
    cartData.removeItem(id);
};

  const addCartHandler = (item) =>{
    cartData.addItem({...item,amount:1})
  }
 
    const cartItems = (

        <ul className={classes.cartitem}>

       {cartData.items.length && cartData.items.map((item) => 
          (
      <CartItem key={item.id} name={item.name} 
      amount={item.amount} price={item.price}
      onRemove={removeCartHandler.bind(null,item.id)}
      onAdd={addCartHandler.bind(null, item)} />)
      )
            
}
   
        </ul> )  
        return (
      <Modal onClose={props.onClose}>
           { cartItems}
            <div className={classes.total}>
        <span>totalAmount</span>
        <span>{totalAmount}</span>
            </div>
            <div className={classes.actions}>
                <button className={classes['button--alt']} onClick={props.onClose}>Close </button>
                 {hasItems &&    <button className={classes.button}>Order</button>}
            </div>
            </Modal>
    )
}

export default Cart
