import React from 'react'
import styles from "./Basket.module.css"
import { Button } from 'antd';
import basket from "../../img/basket.png"
import { useHistory } from "react-router-dom"
import { useSelector } from "react-redux"
import Chipset from './../Chipset/Chipset';

const Basket = () => {

   const { totalPrice, totalCount, items } = useSelector(({ basket }) => basket)

   const basketAddChipset = Object.keys(items).map(key => {
      return items[key][0]
   })

   const history = useHistory()

   const backClick = () => {
      history.goBack()
   }

   return (
      <>
         {basketAddChipset.length
            ? <div>
               <div>
                  <h1 style={{ fontSize: "20px" }}> Итого: {totalPrice}руб </h1>
                  <h1 style={{ fontSize: "20px" }}> {totalCount}: Кол-во </h1>
               </div>
               <div className={styles.headerpage_chip}>
                  {basketAddChipset.map(c => (
                     <Chipset id={c.id} images={c.images} name={c.name} cort={c.cort} value={""} />
                  ))}
               </div>
               <Button type="primary" ghost>Оформить заказ!</Button>
            </div>
            : <div className={styles.header}>
               <h3 className={styles.header_basket}>Корзина</h3>
               <Button onClick={backClick} className={styles.header_close} type="link" danger>Закрыть</Button>
               <img className={styles.header_basketimg} src={basket} alt="Корзина" />
               <h3 className={styles.header_imgtext}>
                  Корзина пустая
               </h3>
               <div className={styles.header_imgcontent}>
                  Добавьте хотя бы один чипсет, чтобы сделать заказ.
               </div>
               <Button onClick={backClick} className={styles.basket__btn} type="primary">Вернуться назад</Button>
            </div >
         }
      </>
   )
}

export default Basket
