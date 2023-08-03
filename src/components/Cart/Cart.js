import Modal from '../UI/Modal';
import styles from './Cart.module.css';
import { useContext } from 'react';
import CartContext from '../../store/cart-context';
import CartItem from './CartItem';

const Cart = (props) => {

    const cartContext = useContext(CartContext);

    const totalAmount = `$${Math.abs(cartContext.totalAmount).toFixed(2)}`;

    const addItemHendler = (item) => {
        cartContext.addItem({...item, amount: 1})
    }

    const removeItemHendler = (id) => {
        cartContext.removeItem(id);
    }

    const cartItem = (
        <ul className={styles["cart-items"]}>
            {cartContext.items.map(item => <CartItem key={item.id} 
                                                name={item.name}
                                                amount={item.amount}
                                                price={item.price}
                                                onAdd={addItemHendler.bind(null, item)}
                                                onRemove={removeItemHendler.bind(null, item.id)}/>)}
        </ul>
    )

    const hasItem = cartContext.items.length > 0;

    return (
        <Modal onHideCart={props.onHideCart}>
            {cartItem}
            <div className={styles.total}>
                <span>Total</span>
                <span>{totalAmount}</span>
            </div>
            <div className={styles.actions}>
                <button onClick={props.onHideCart} className={styles["button--alt"]}>Close</button>
                {hasItem && <button className={styles.button}>Order</button>}
            </div>
        </Modal>
    );
}

export default Cart;