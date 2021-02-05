import React, { Component } from 'react'; //importing just the Component part of react library
import Contacts from './components/Contacts';
import classList from './data/contacts';
import DropDown from './components/DropDown';
import Button from './components/button'


class App extends Component { //class


  render(){ //method. could also be a constructor 
    // let name="Matt Phillips"
    //can place more logic here
  //   let contact = [

  //   {firstName:"Matt",
  //    lastName:"Phillips" ,
  //    phoneNumber:"555-555", 
  //    email:"help@me.com" , 
  //   },

  //   {firstName:"Peter",
  //    lastName:"Pan" ,
  //    phoneNumber:"911-555", 
  //    email: "neverland@sme.com", 
  //   },

  //   {firstName:"Doc",
  //    lastName: "Holliday",
  //    phoneNumber:"001-9999", 
  //    email: "huckleberry@me.com", 
  //   }
  // ]
   
     

    return ( //return JSX

     
      <>
      <Button color="primary" text="Info"/>
      <Button color="warning" text="Error"/>
      <Button color="success" text="Yes!"/>
    
      <DropDown />
      {/* <Contacts firstName={contact[0].firstName} lastName={contact[0].lastName} email={contact[0].phoneNumber} phoneNumber={contact[0].email}/>

      <Contacts firstName={contact[1].firstName} lastName={contact[1].lastName} email={contact[1].phoneNumber} phoneNumber={contact[1].email}/>

      <Contacts firstName={contact[2].firstName} lastName={contact[2].lastName} email={contact[2].phoneNumber} phoneNumber={contact[2].email}/> */}
      
      {/* First Name: Matt <br />
      Last Name: Phillips <br />

      First Name: Bailey <br />
      Last Name: Phillips  <br />

      First Name: Doc <br />
      Last Name: Holliday <br />
      <br /> */}

    

      </>
    );
  }
}
export default App;
