import React, {useState} from 'react'
import { connect } from 'react-redux'
import addPerson from '../actions/addPerson';
import deletePerson from '../actions/deletePerson';
import { useDispatch, useSelector}from 'react-redux';

export const Forms = (props) => {

    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const persons =  useSelector(state=> state.persons); //an array of objects
    const dispatch = useDispatch(); //access to dispatch an action creator
    console.log(firstName, lastName);

    const handleOnSubmit = (e) => {
        e.preverntDefault();

        dispatch(addPerson({
            firstName: firstName,
            lastName: lastName
        }))
    }
    return (
        <>
        <form action="">

            First Name: <input value ={firstName} onChange={(e)=>setFirstName(e.target.value)} type="text" /><br/>
            Last Name: <input value={lastName} onChange={(e)=>setLastName(e.target.value)} type="text" /><br/>

            <button type="submit">Submit</button>

        </form>

            <ul>
            {persons.map(person => {
                return <li key={person.firstName}>{person.firstName} {person.lastName} <button onClick={()=>dispatch(deletePerson(person.firstName))}>X</button></li>
            })}
            </ul>
            </>
    )
}



export default Forms
