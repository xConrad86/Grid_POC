import React, { useState } from 'react';
import { useNavigate } from 'react-router';
import { IData } from '../interface/Interface';

const ProductsView = ({product} : IData | any): JSX.Element => {          
   let navigate = useNavigate();

   const moveBack = () => {
       navigate("/", {replace : true})
   }

   return (
       <div className="products">           
            {Object.keys(product).map((key: string | any) => 
                {
                   return (
                   <div className="product-data" key={key}>
                        <div className="product-data-col"> {key} </div>
                        <div className="product-data-val"> {product[key].toString()} </div>
                   </div>
                   )
                }
            )}     
        <button onClick={() => moveBack()}>
            Return
        </button>
       </div>
   );
};

export default ProductsView;