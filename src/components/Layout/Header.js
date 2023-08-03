import React from "react";
import ImageSushi from '../../assets/sushi img.jpg'
import styles from './Header.module.css'
import HeaderCartButton from "./HeaderCartButton";

const Header = (props) => {
    return <React.Fragment>
        <header className={`${styles.header}`}>
            <h1>Japen Sushi</h1>
            <HeaderCartButton onShowCart={props.onShowCart} onHideCart={props.onHideCart}/>
        </header>
        <div className={styles["main-image"]}>
            <img src={ImageSushi} alt="Japen kitchen"/>
        </div>
    </React.Fragment>
}

export default Header;