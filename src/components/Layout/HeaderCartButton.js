import styles from './HeaderCartButton.module.css'
import CartIcon from '../Cart/CartIcon';
import { useContext, useEffect, useState } from 'react';
import CartContext from '../../store/cart-context';

const HeaderCartButton = (props) => {

    const [isButtonAnimated, setIsButtonAmimated] = useState(false);
    const cartContext = useContext(CartContext);
    
    const cartItemsNumber = cartContext.items.reduce((currentValue, item) => {
        return currentValue + item.amount;
    }, 0)
    

    useEffect(() => {
        localStorage.setItem('cartItem', JSON.stringify(cartContext.items));
    }, [cartContext.items])

    const buttonClasses = `${styles.button} ${isButtonAnimated ? styles.bump : ''}`;

    useEffect(() => {
        if(cartContext.items.length === 0){
            return;
        }
        setIsButtonAmimated(true)
        
        const timer = setTimeout(() =>{ setIsButtonAmimated(false) }, 300);

        return () => {
            clearTimeout(timer)
        }
    }, [cartContext.items])

    return (
        <button onClick={props.onShowCart} className={buttonClasses}>
            <span className={styles.icon}>
                <CartIcon/>
            </span>
            <span>Cart</span>
            <span className={styles.badge}>{cartItemsNumber}</span>
        </button>
    );
}

export default HeaderCartButton;