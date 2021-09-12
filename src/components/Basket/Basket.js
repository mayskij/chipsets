import React from 'react'
import styles from "./Basket.module.css"
import { Button, } from 'antd';
import basket from "../../img/basket.png"
import { NavLink } from 'react-router-dom';

const Basket = () => {

   return (
      <div className={styles.header}>
         <h3 className={styles.header_basket}>Корзина</h3>
         <Button className={styles.header_close} type="link" danger>Закрыть</Button>
         <img className={styles.header_basketimg} src={basket} alt="Корзина" />
         <h3 className={styles.header_imgtext}>
            Корзина пустая
         </h3>
         <div className={styles.header_imgcontent}>
            Добавьте хотя бы один чипсет, чтобы сделать заказ.
         </div>
         <Button className={styles.basket__btn} type="primary"><NavLink to="/header">Вернуться назад</NavLink></Button>
      </div >
   )
}

export default Basket
