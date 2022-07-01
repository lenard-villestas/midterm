import React, { Component } from 'react'
import { Card,Button } from 'react-bootstrap';
class Students extends Component {
    cardInfo = [
        {
          image:
            "s1.png",
          name: "Mike",
          gpa: 3.8
        },
        {
          image:
            "s2.png",
            name: "Manal",
            gpa: 3.6
        },
        {
          image:
            "s3.png",
            name: "Moe",
            gpa: 3.2
        },
        {
          image:
            "s4.png",
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