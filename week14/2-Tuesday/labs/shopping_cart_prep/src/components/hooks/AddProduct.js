import React, { Component } from 'react'
import {addProduct} from '../actions/cartActions';
import { useDispatch } from 'react-redux';
import {v1 as uuidv1} from 'uuid';

const AddProduct = () => {
    const dispatch = useDispatch();
    const handleSubmit = (e) =>{
        e.preventDefault();

        
    }
    return <>
        
    
    </>
}

export default AddProduct
