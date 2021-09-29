import React from 'react'
import styles from "./HeaderPage.module.css"
import Chipset from '../Chipset/Chipset'
import { Input } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import { addChipsetToBasket } from '../../redux/basket_reducer'

const HeaderPage = () => {

   const [value, setSearch] = React.useState("")

   const { Search } = Input;

   const { items } = useSelector(({ chipset }) => {
      return {
         items: chipset.items,
      }
   })

   const { totalCount, totalPrice } = useSelector(({ basket }) => {
      return {
         totalPrice: basket.totalPrice,
         totalCount: basket.totalCount,
      }
   })

   const dispatch = useDispatch()

   const onAddChipset = (obj) => {
      dispatch(addChipsetToBasket(obj))
   }

   const nameFiltered = items.filter(items => {
      return items.name.toLowerCase().includes(value.toLowerCase())
   })

   return (
      <div className={styles.headerpage}>
         <h1 className={styles.headerpage_text}>Введите название чипсета:
            <h1>{totalPrice}: Цена {totalCount}: Кол-во</h1>
         </h1>
         <div className={styles.headerpage_chip}>
            {nameFiltered.map(c =>
               <Chipset key={c.id} id={c.id} images={c.images} name={c.name} cort={c.cort} onAddChipset={onAddChipset} value={"Добавить"} />)}
         </div>
         <div className={styles.headerpage_input}>
            <Search type="text" onChange={e => setSearch(e.target.value)} value={value} placeholder="Поиск..." style={{ width: 300 }} />
         </div>
      </div>
   )
}

export default HeaderPage
