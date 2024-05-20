import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

const UserCard = ({user}) => {
  return (
    <div >
 <Card  className='card'  style={{ width: '18rem'}}>
      <Card.Img variant="top" src="https://st3.depositphotos.com/15648834/17930/v/450/depositphotos_179308454-stock-illustration-unknown-person-silhouette-glasses-profile.jpg" />
      <Card.Body>
        <Card.Title>{user.username}</Card.Title>
        <Card.Text>
        {user.email}
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>

    </div>
  )
}

export default UserCard