import React from 'react'
import { useSelector } from 'react-redux';
import Chipset from '../Chipset/Chipset'
import styles from "./Account.module.css"

const Account = () => {

   const { items } = useSelector(({ account }) => {
      return {
         items: account.items
      }
   })

   let chipElement =
      items.map(c =>
         <Chipset key={c.id} id={c.id} images={c.images} name={c.name} cort={c.cort} value={""} />)


   return (
      <div className={styles.header_account}>
         <h3 className={styles.header_account_text}>Мои Заказы</h3>
         <div className={styles.header_account_chip}>
            {chipElement}
         </div>
      </div>
   )
}

export default Account

