import styles from './Modal.module.css';
import React from 'react';
import ReactDOM from 'react-dom';

const Backdrop = (props) => {
    return <div className={styles.backdrop} onClick={props.onHideCart}></div>
}

const ModalWindow = (props) => {
    return <div className={styles.modal}>
        <div className={styles.content}>{props.children}</div>
    </div>
}

const Modal = (props) => {

    const portal = document.getElementById('overlays');

    return (
        <React.Fragment>
           {ReactDOM.createPortal(<Backdrop onHideCart={props.onHideCart}/>, portal)}
           {ReactDOM.createPortal(<ModalWindow>{props.children}</ModalWindow>, portal)}
        </React.Fragment>
    );
}

export default Modal;