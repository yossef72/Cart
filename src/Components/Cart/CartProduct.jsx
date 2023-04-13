import React from 'react'

import {useShopCart} from '../../Context/ShareContext';


export default function CartProduct(props) {

    let {id ,name,price,description}=props.data;
    let {getItemQuantity ,  icreaseCardQuantity,  decreaseCardQuantity ,  removeItem }= useShopCart();
 
let quantity=getItemQuantity(id)

  return (

<>   
 <div>
{quantity!==0? 
<>
<p>
          <b> Name: {name}</b>
        </p>

        <p>

<b> Description : {description} </b>
</p>
        <p>  <b>   Price: ${price} </b>  </p>


< div  className='countHandle text-center'>
<button className='btn btn-outline-primary' onClick={()=> decreaseCardQuantity(id) }>-</button>
< span className='ms-3 me-3'> {quantity}</span>
<button className='btn btn-outline-primary'  onClick={()=>icreaseCardQuantity(id,price)}>+</button>
</div>

<div className='text-center mt-3'>
    <button className='btn btn-outline-danger    ' onClick={()=>removeItem(id)}   >
        Remove
    </button>
</div>


</>:""

}





    </div>









  </>
 


  )
}