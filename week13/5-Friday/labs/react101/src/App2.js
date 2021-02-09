import React , { Component } from 'react'
import {Container, Row, Col} from 'react-bootstrap'
import CardList from './components/CardList';
import './assets/styles/global.css';
import Card from './components/cards/Card';
import data from './data/cardContacts';
import contacts from './data/cardContacts';

class App2 extends Component {

    
    render() {

        let contactArr = data.map(contact => {

            return <Card name= {contacts.name} img= {contacts.imgURL} 
            tel={contacts.phone} email= {contacts.email}/>
        })

        return <>
            <div>
                <h1 className="heading">My Contacts</h1>
                {contactArr}
            </div>
        {/* <div className="bg-purple">
            Hello World
        </div>

        <div style={styles.purpleStyle}>
            Lorem Ipsum
        </div>
        <Container fluid>

            <Row>
                
                    <CardList />
                
            </Row>

        </Container> */}

       
        </>;

    }
}

const styles={

    purpleStyle: {
        color: 'orange',
        fontSize: '40px',
        textAlign: 'center',

    }

}

export default App2;