import Input from '../../UI/Input';
import styles from './MealItemForm.module.css';
import { useRef, useState } from 'react';

const MealItemForm = (props) => {

    const [isAmountValide, setIsAmountValide] = useState(true);
    const amountImputRef = useRef();

    const submitForm = (e) => {
        e.preventDefault()

        const inputAmount = amountImputRef.current.value;
        if(inputAmount.trim().length === 0 || +inputAmount < 1){
            setIsAmountValide(false);
            return;
        }

        props.onAddCartAmount(+inputAmount);
    }

    return (
        <form className={styles.form} onSubmit={submitForm}>
            <Input ref={amountImputRef} label="Amount" input={{
                id:props.id,
                type: "number",
                step: "1",
                min: "1",
                defaultValue: "1"
            }}/>
            <button>Add</button>
            {!isAmountValide && <p style={{fontSize: "11px"}}>amount can't be 0</p>}
        </form>
    );
}

export default MealItemForm;