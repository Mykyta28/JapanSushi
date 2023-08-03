import PromoText from './PromoText'
import MealList from './MealList';
import React from 'react';

const Meal = (props) => {
    return (
        <React.Fragment>
            <PromoText/>
            <MealList/>
        </React.Fragment>
    );
}

export default Meal;