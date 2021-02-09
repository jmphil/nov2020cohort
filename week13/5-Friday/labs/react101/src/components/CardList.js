//import data
//make list of cards
//pass list of cards back to parent
import React, { Component } from 'react'
import data from '../data/libraries';
import CardDetail from './CardDetail';
import { Col } from 'react-bootstrap';


class CardList extends Component {
    render() {
        //array of CarDeatil ocomponents
        let cardsArr = data.map(cardObj =>{
            return <Col md={3} >
                        <CardDetail
                            title={cardObj.title}
                            text={cardObj.text}
                            buttonText={cardObj.buttonText} />
                    </Col>
        })
        return (
            <>
                {cardsArr}
            </>
        )
    }
}

export default CardList
