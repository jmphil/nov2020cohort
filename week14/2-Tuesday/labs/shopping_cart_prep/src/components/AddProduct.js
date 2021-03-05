import React, { Component } from 'react'
import {addProduct} from '../actions/cartActions';
import {connect} from 'react-redux';
import {v1 as uuidv1} from 'uuid';

export class AddProduct extends Component {

    handleSubmit = (e) =>{

        e.preventDefault();

        //collect our data from the form
        let product = {
            id: uuidv1(),
            productName: this.refs.name.value,
            price: this.refs.price.value

        }
        //call the prop that dispatches the aciton
        this.props.onAddProduct(product)

        e.target.name.value = "";
        e.target.price.value = "";
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>


                <input ref="name" type="text" placeholder="Product Name" /><br/>
                <input ref="price" type="text" placeholder="Product Price" /><br/>

                <button type="submit">Submit</button>

            </form>
                
                
            
        )
    }
}
const mapDispatchToProps = (dispatch) => {

    return {
        onAddProduct: (product)=> dispatch(addProduct(product))
    }
}


export default connect(null, mapDispatchToProps)(AddProduct);