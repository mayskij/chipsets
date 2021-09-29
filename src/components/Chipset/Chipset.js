import React from 'react'
import styles from "./Chipset.module.css"
import { Button } from 'antd';

const Chipset = ({ id, name, cort, value, images, onAddChipset }) => {

   const onAddClickChipset = () => {
      const obj = { id, name, cort, images }
      onAddChipset(obj)
   }


   return (
      <div className={styles.main_content}>
         <div className={styles.main_block}>
            <img className={styles.main_img} src={images} />
            <h1 className={styles.main_name}>
               {name}
            </h1>
            <div className={styles.main_price}>
               Цена:
            </div>
            <div className={styles.main_cort}>
               {cort} руб.
            </div>
            <div className={styles.main_checkbox}>
               <Button style={{ borderRadius: "15px" }} type="primary" danger onClick={onAddClickChipset}>{value}</Button>
            </div>
         </div>
      </div>
   )
}

export default Chipset
