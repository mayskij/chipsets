const FALSE_CHECKBOX = "FALSE_CHECKBOX"
const SEARCH_TEXT = "SEARCH_TEXT"

const initialState = {
   items: [
      { id: 1, images: "https://webznam.ru/_bl/15/61623892.jpg", name: "Rog Zenith 2 Extreme Alpha", cort: "1200руб", checkbox: false },
      { id: 2, images: "https://st.overclockers.ru/legacy/blog/370098/179457_O.png", name: "Ryzen B550 Adrus", cort: "1200руб", checkbox: false },
      { id: 3, images: "https://avard.am/wp-content/uploads/2021/02/71Ihkth84gL._AC_SL1000_.jpg", name: "ASUS ROG STRIX B450-F", cort: "1200руб", checkbox: false },
      { id: 4, images: "https://www.gigabyte.ru/products/upload/products/8055/3dbf4bbd_5.png", name: "GIGABYTE TRX40 AORUS XTREME", cort: "1200руб", checkbox: false },
      { id: 5, images: "https://www.asrock.com/mb/photo/TRX40%20Creator(M1).png", name: "ASRock TRX40 Creator", cort: "1200руб", checkbox: false },
   ]
}




const chipsetReducer = (state = initialState, action) => {
   switch (action.type) {
      case FALSE_CHECKBOX: {
         return {
            ...state,
            checkbox: true
         }
      }
      case SEARCH_TEXT: {
         return {
            ...state,
            name: action.name
         }
      }
   }
   return state;
}

export let chipset = (payload) => ({ type: FALSE_CHECKBOX, payload })
export let searchtext = (name) => ({ type: SEARCH_TEXT, name })

export default chipsetReducer;