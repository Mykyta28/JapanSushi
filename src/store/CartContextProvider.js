import CartContext from "./cart-context";
import { useReducer } from "react";

const defaultCartItems = {
    items: JSON.parse(localStorage.getItem('cartItem')),
    totalAmount: 0
}

const cartReducer = (state, action) => {
    
    if(action.type === "ADD_ITEM"){

        const cartItemIndex = state.items.findIndex(item => item.id === action.item.id);
        const existingCartItem = state.items[cartItemIndex];

        let updatedItems = [];

        if(existingCartItem){
            
            const updatedItem = {
                ...existingCartItem,
                amount: existingCartItem.amount + action.item.amount,
            }

            updatedItems = [...state.items]; // state.items: banana - 2, orange - 1, potato - 3
            updatedItems[cartItemIndex] = updatedItem;
        }else{
            updatedItems = state.items.concat({
                ...action.item
            });
        }
       
        const updetedItemAmount = state.totalAmount + action.item.price * action.item.amount;// where we get "amount" property and "item"
        return {
            items: updatedItems,
            totalAmount: updetedItemAmount
        } 
    }

    if(action.type === "REMOVE_ITEM"){
        const cartItemIndex = state.items.findIndex(item => item.id === action.id);
        const existingCartItem = state.items[cartItemIndex];

        const updatedTotalAmount = state.totalAmount - existingCartItem.price;

        let updatedItems;
        if(existingCartItem.amount === 1){
            updatedItems = state.items.filter(item => item.id !== action.id);
        }else{
            const updatedItem = {
                ...existingCartItem,
                amount: existingCartItem.amount - 1,
            }
            updatedItems = [...state.items];
            updatedItems[cartItemIndex] = updatedItem;
        }
        return {
            items: updatedItems,
            totalAmount: updatedTotalAmount
        };
    }

    return defaultCartItems;
}

const CartContextProvider = (props) => {

    const [cartState, dispatchCartAction] = useReducer(
        cartReducer,
        defaultCartItems,
    );

    const addItemHendler = item => {
        dispatchCartAction({
            type: "ADD_ITEM",
            item
        })
    }

    const removeItemHendler = id => {
        dispatchCartAction({
            type: "REMOVE_ITEM",
            id
        })
    }

    const cartContext = {
        items: cartState.items, // how do we get "items" array here
        totalAmount: cartState.totalAmount,  // the same
        addItem: addItemHendler,
        removeItem: removeItemHendler,
    };

    return <CartContext.Provider value={cartContext}>{props.children}</CartContext.Provider>
}

export default CartContextProvider;