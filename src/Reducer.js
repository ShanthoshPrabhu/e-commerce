 export const initialstate = {
    basket:[],
    user:null
 };

export const basketTotal = (basket) => basket?.reduce((amount,item) => item.price + amount ,0) 
 

const reducer = (state , action) => {

    switch(action.type){
        case'add_to_basket':
          return {
            ...state,
            basket:[...state.basket,action.item]
          };

        case 'empty_basket':
          return{
            ...state,
            basket:[],
          }

        case "Remove_from_basket":
          const index = state.basket.findIndex(
            basketitem => basketitem.id === action.id
          );

          let newbasket = [...state.basket];

          if(index >= 0) {
             newbasket.splice(index,1);
          };
          
          return {
            ...state,
            basket:newbasket
          }

          case 'User':
            return {
              ...state,
              user: action.user
            }

          default:
            return state;
    };
};

export default reducer;