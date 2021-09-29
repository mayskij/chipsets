const SET_ISFECHING = "SET_ISFECHING"

const initialState = {
   items: [
      { id: 1, images: "https://webznam.ru/_bl/15/61623892.jpg", name: "ROG ZENITH 2", cort: 1200, },
      { id: 2, images: "https://st.overclockers.ru/legacy/blog/370098/179457_O.png", name: "Ryzen B550 Adrus", cort: 1200, },
      { id: 3, images: "https://avard.am/wp-content/uploads/2021/02/71Ihkth84gL._AC_SL1000_.jpg", name: "ASUS ROG STRIX B450-F", cort: 1200, },
      { id: 4, images: "https://www.gigabyte.ru/products/upload/products/8055/3dbf4bbd_5.png", name: "GIGABYTE TRX40 AORUS XTREME", cort: 1200, },
      { id: 5, images: "https://www.asrock.com/mb/photo/TRX40%20Creator(M1).png", name: "ASRock TRX40 Creator", cort: "1200руб", },
   ],
}




const chipsetReducer = (state = initialState, action) => {
   switch (action.type) {
      case SET_ISFECHING: {
         return {
            ...state,
            items: action.payload
         }
      }
   }
   return state;
}

export let chipset = (payload) => ({ type: SET_ISFECHING, payload })

export default chipsetReducer;