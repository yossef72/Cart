import React, { createContext, useContext, useState } from 'react';






let ShopCartContext = createContext({});

export let ShareCardProvider = ({ children }) => {

  let [cartItems, setCartItems] = useState([]);


  const icreaseCardQuantity = ( id,price) => {

    setCartItems((cartItems) => {
      if (cartItems.find((item) => item.id === id) == null) {
    
        return [...cartItems, { id, quantity: 1,myPrice:price }];

      }
      else {
        return cartItems.map((item) => {
          if (item.id === id) {

            return { ...item, quantity: item.quantity + 1  ,myPrice:price}     ;
          }
          else {
            return item;
          }
        }
        )
      }
    }
    )
  }

  const decreaseCardQuantity = (id) => {

    setCartItems((cartItems) => {
      if (cartItems.find((item) => item.id === id) == null) {


        return cartItems.filter((item) => item.id != id);

      }
      else {
        return cartItems.map((item) => {
          if (item.id === id) {

            return { ...item, quantity: item.quantity - 1 };
          }
          else {
            return item;
          }
        }
        )
      }
    }
    )
  }

  const getItemQuantity = (id) => {

    return cartItems.find((item) => item.id === id)?.quantity || 0;
  };

const getTotal=()=>{

let total=0;

cartItems.map((item)=>{
  
total+= item.myPrice*item.quantity ;

})


return total;
}

  const removeItem = (id) => {
    setCartItems((cartItems) => cartItems.filter((item) => item.id != id))
  }
  return (
    <ShopCartContext.Provider value={{
      getTotal,
      cartItems,
      getItemQuantity,
      icreaseCardQuantity,
      decreaseCardQuantity,
      removeItem
    }}
    >

      {children}

    </ShopCartContext.Provider>
  )


}





export const useShopCart = () => {
  return useContext(ShopCartContext)
}


