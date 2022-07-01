import React, { Component } from 'react'
import { Card,Button } from 'react-bootstrap';
import s1 from './s1.png'
import s2 from './s2.png'
import s3 from './s3.png'
import s4 from './s4.png'

class Students extends Component {
    cardInfo = [
        {
          image:
            s1,
          name: "Mike",
          gpa: 3.8
        },
        {
          image:
            s2,
            name: "Manal",
            gpa: 3.6
        },
        {
          image:
            s3,
            name: "Moe",
            gpa: 3.2
        },
        {
          image:
            s4,
            name: "Mary",
            gpa: 2.6
        }
      ];
  render() {
    
    
    return (
      <div className='cardlist'>
        {this.cardInfo.map(card => 
        <Card className='card'>
            <Card.Img variant='top' src={card.image}/>
            <Card.Body>
                
                <Card.Title>Name: {card.name}</Card.Title>
                <Card.Subtitle>GPA: {card.gpa}</Card.Subtitle>
                <Card.Text>{card.name} is a student of SAIT. Taking the Information Technology Program.</Card.Text>
                <Button variant='primary'>Update Grade</Button>
            </Card.Body>
        </Card>
            )}
      </div>
    )
  }
}

export default Students