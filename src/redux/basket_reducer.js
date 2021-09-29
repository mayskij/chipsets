const ADD_CHIPSET = "ADD_CHIPSET"

const initialState = {
   items: {},
   totalPrice: 0,
   totalCount: 0,
}

const basketReducer = (state = initialState, action) => {
   switch (action.type) {
      case ADD_CHIPSET:
         const newState = {
            ...state.items,
            [action.payload.id]:
               !state.items[action.payload.id]
                  ? [action.payload]
                  : [...state.items[action.payload.id], action.payload]
         }

         const allChipset = [].concat.apply([], Object.values(newState))
         const totalPrice = allChipset.reduce((sum, obj) => obj.cort + sum, 0)

         return {
            ...state,
            items: newState,
            totalCount: allChipset.length,
            totalPrice,
         }
   }


   return state;

}



export let addChipsetToBasket = (chipsetObj) => ({ type: ADD_CHIPSET, payload: chipsetObj })

export default basketReducer;