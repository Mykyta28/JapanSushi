import styles from './PromoText.module.css'

const PromoText = (props) => {
    return (
        <section className={styles["promo-text"]}>
            <h2>Online Sushi Restaurant - JapanSushi</h2>
            <p>
                JapanSushi - this is online sushi restaurant, where is you can get lovly sushi and sashimi, rolls and another delicious dishes of Japen kitchen. Also you can try nation dishes of Japan from professional chefs.
            </p>
            <p>
                Fast work and high-quality products, as well as the most genuine ingredients, give a good taste to dishes, give pleasure from a meal.
            </p>
        </section>
    );
}

export default PromoText;