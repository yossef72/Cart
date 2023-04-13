import React from 'react'

import {useShopCart} from '../../Context/ShareContext';



export default function HomeProduct(props) {

let {id ,name,price,description}=props.data;


let {getItemQuantity ,  icreaseCardQuantity  }= useShopCart();
  

let quantity = getItemQuantity(id);







  return (




<div>


<p>
          <b> Name: {name}</b>
        </p>

<p>

    <b> Description : {description} </b>
</p>

        <p> <b>Price: ${price}</b> </p>

        <button className="btn  btn-outline-dark" onClick={() => icreaseCardQuantity(id,price)}>
        Add To Cart   { quantity>0 &&  <>  ({quantity}) </>   }
      </button>

</div>





  )
}
