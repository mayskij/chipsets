import React from 'react'
import styles from "./Chipset.module.css"
import { Checkbox } from 'antd';
import { useDispatch } from "react-redux"
import { chipset } from '../../redux/chipset_reducer';

const Chipset = ({ ...props }) => {

   const dispatch = useDispatch()

   const setChipset = (e) => {
      dispatch(chipset(e));
   }


   return (
      <div className={styles.main_content}>
         <div className={styles.main_block}>
            <img className={styles.main_img} src={props.images} />
            <h1 className={styles.main_name}>
               {props.name}
            </h1>
            <div className={styles.main_price}>
               Цена:
            </div>
            <div className={styles.main_cort}>
               {props.cort}
            </div>
            <div className={styles.main_checkbox}>
               <Checkbox onChange={setChipset}></Checkbox>
            </div>
         </div>
      </div>
   )
}

export default Chipset



// onChange={onChange}
// ReactDOM.render();
