let state = {
    fName: "Matt",
    lName: "Phillips",
    city: "Athens"
}
console.log(state );

let newState = {
    ...state,
    fName: "Justin"
}
console.log(newState);