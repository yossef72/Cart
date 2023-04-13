import React from 'react'
import CartProduct from './CartProduct';
import {useShopCart} from '../../Context/ShareContext';
import {Data} from '../Items';


export default function Cart() {

  let {  getTotal }= useShopCart();

  let totalAmount= getTotal();


let Tax=Number(14/100) ;
let Total = (totalAmount*Tax + totalAmount ).toFixed(2);

  return (

<>
<div>

  <p className='text-center mt-5'><b>Your Cart Items</b></p>
</div>


<div className="container">
  <div className="row g-5">


  {Data.map((data ,i) => 
(    
  <div key={i} className="col-md-12  d-flex justify-content-center align-item-center">


  <div className="product">
    
<CartProduct data={data} />



  </div>
</div>

)




)}


  <div>
   {totalAmount>0?
  <>

<p> <b>SubTotal : ${totalAmount}</b> </p>
<p> <b>Tax : 14%</b></p>
<hr />
<p>  <b>Total : ${Total}</b> </p>

  </>:
  <div className='mb-5 text-center'>  <p> <b>Your Cart Is Empty </b></p> </div>
  }
  </div>




  </div>
</div>
 



</>

  
  )
}


