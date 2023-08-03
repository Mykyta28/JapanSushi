import styles from './MealItem.module.css';
import MealItemForm from './MealItemForm';
import { useContext } from 'react';
import CartContext from '../../../store/cart-context';

const MealItem = (props) => {

    const cartContext = useContext(CartContext);

    const formattedPrice = `$${props.price.toFixed(2)}`;

    const addItemHendler = (amount) => {
        cartContext.addItem({
            id: props.id,
            name: props.name,
            price: props.price,
            amount,
        })
    }

    return (
        <li>
            <div className={styles.meal}>
                <div>
                    <h3>{props.name}</h3>
                    <p className={styles.description}>{props.description}</p>
                    <p className={styles.price}>{formattedPrice}</p>
                </div>
                <div>
                <MealItemForm onAddCartAmount={addItemHendler} id={props.id}/>
                </div>
            </div>
            
        </li>
    );
}

export default MealItem;