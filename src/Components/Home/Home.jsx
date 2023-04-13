import React from 'react';

import {Data} from '../Items';

import HomeProduct from './HomeProduct';



export default function Home() {


  return (

    <div className="container ">
   <div className="row">
   {Data.map((data ,i) => (


<div key={i} className="col-md-4">




<div className="product">

<HomeProduct  data={data} />
</div>
</div>
   

   )



)}

   </div>
  </div>

  )
}
