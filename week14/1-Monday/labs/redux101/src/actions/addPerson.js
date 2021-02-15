//adding personObj to global state

const addPerson = (personObj) => {
    
    return {
        
        type: "AddPerson",
        data: personObj

    }
}

export default addPerson