import Card from '../UI/Card';
import styles from './MealList.module.css'
import MealItem from './MealItem/MealItem';

const DUMMY_MEALS = [
    {
      id: "m1",
      name: '"Naomi" Roll',
      description:
        "Philadelphia cream cheese, chicken fillet, masago, tomato, cucumber, sesame seeds.",
      price: 11.99,
    },
    {
      id: "m2",
      name: "Spice in salmon",
      description: "Rice, salmon, spice sauce",
      price: 3.99,
    },
    {
      id: "m3",
      name: "Eel sushi",
      description: "Smoked eel, unagi sauce, sesame",
      price: 4.99,
    },
    {
      id: "m4",
      name: 'Salmon "Poke Salad"',
      description:
        "Rice, salmon, cucumber, chuka seaweed, nori, bonito flakes, nutty sauce.",
      price: 7.99,
    },
  ];

const MealList = (props) => {

    const mealList = DUMMY_MEALS.map(meal => <MealItem
                                      key={meal.id}
                                      id={meal.id}
                                      name={meal.name}
                                      description={meal.description}
                                      price={meal.price}
                                    />);

    return (
        <section className={styles.meals}>
            <Card>
                <ul>{mealList}</ul>
            </Card>
        </section>
    );
}

export default MealList;