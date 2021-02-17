import React from "react";
import { useSelector } from 'react-redux';
import AddProduct from './AddProduct';
import DeleteProduct from './DeleteProduct'

const Cart = () => {

    const products = useSelector(state => state.cart);
    const totalCost = useSelector(state => state.totalCost);

  return <>
  
        <h1 className="text-center">Shopping Cart</h1>

        <div className="row">
            <div className="col-6 offset-3">
                <AddProduct />
                Total Cost: ${Cart.totalCost}
                <br />
            <ul>
            {Cart.products.map((p) => {
                return (
                <li key={p.id}>
                    {p.productName} ${p.price}

                    <DeleteProduct product={p}/>
                </li>
                );
            })}
            </ul>

            </div>
        </div>

  </>;
};

export default Cart;