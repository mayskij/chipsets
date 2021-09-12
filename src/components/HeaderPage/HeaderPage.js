import React from 'react'
import styles from "./HeaderPage.module.css"
import Chipset from '../Chipset/Chipset'
import { Input } from 'antd';
import { useSelector } from 'react-redux';
import { chipset } from '../../redux/chipset_reducer';

const HeaderPage = () => {

   const [value, setSearch] = React.useState("")

   const { Search } = Input;

   const searchInput = (e) => {
      setSearch(e.currentTarget.value)
   }

   const { items } = useSelector(({ chipset }) => {
      return {
         items: chipset.items,
         name: chipset.name
      }
   })

   let chipElement =
      items.map(c =>
         <Chipset key={c.id} id={c.id} images={c.images} name={c.name} cort={c.cort} checkbox={c.checkbox} />)


   return (<div className={styles.headerpage}>
      <h1 className={styles.headerpage_text}>Введите название чипсета: {value}</h1>
      <div className={styles.headerpage_chip}>
         {chipElement}
      </div>
      <div className={styles.headerpage_input}>
         <Search value={value} onChange={searchInput} placeholder="Поиск..." style={{ width: 300 }} />
      </div>
   </div>
   )
}

export default HeaderPage
