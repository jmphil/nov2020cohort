const deletePerson = (firstName) => {
    
    return {
        
        type: "DeletePerson",
        data: firstName

    }
}

export default deletePerson