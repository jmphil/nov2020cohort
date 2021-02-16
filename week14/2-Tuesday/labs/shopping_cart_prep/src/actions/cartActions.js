
//product: id, name, price
export const addProduct = (product) => {
    return {
        type: "ADD_PRODUCT",
        data: product
        
    }
}
// in a real setting, product should be unique id
export const removeProduct = (product) => {
    return {
        type: "DELETE_PRODUCT",
        data: product
    }
}
