import React, { Component } from 'react'
import DeleteProduct from './DeleteProduct';
import AddProduct from './AddProduct';
//bring in redux to be able to see the global state(provide)
import { connect }  from 'react-redux';

class Cart extends Component {
  //display all items in the cart
  // render add component and delete component
  //
  render() {
    return (
      <>
        <h1 className="text-center">Shopping Cart</h1>

        <div className="row">
          <div className="col-6 offset-3">
            <AddProduct />
            Total Cost: ${this.props.totalCost.toFixed(2)}
            <br />
            <ul>
              {this.props.products.map((p) => {
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

     
      
      </>
    )
  }
}
const mapStateToProps = (state) => {
  return{
    totalCost: state.totalCost,
    products: state.cart
  }

}
export default connect(mapStateToProps, null)(Cart)

