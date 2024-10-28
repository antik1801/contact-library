import React from 'react';
import { Card, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

interface ContactCardProps {
  name: string;
  email?: string;
  phoneNo: string;
  address: string;
  profileImg: string;
}

const ContactCard: React.FC<ContactCardProps> = ({ name, email, phoneNo, address, profileImg }) => {
  return (
    <Card className="shadow-sm d-flex flex-column" style={{ minWidth: '250px', margin: '10px', height: '100%' }}>
      <Card.Img
        variant="top"
        src={profileImg}
        alt={`${name}'s profile`}
        style={{ height: '200px', objectFit: 'cover' }}
      />
      <Card.Body className="flex-grow-1 d-flex flex-column justify-content-between">
        <div>
          <Card.Title className="text-center">{name}</Card.Title>
          {email && (
            <Card.Text>
              <strong>Email:</strong> {email}
            </Card.Text>
          )}
          <Card.Text>
            <strong>Phone:</strong> {phoneNo}
          </Card.Text>
          <Card.Text>
            <strong>Address:</strong> {address}
          </Card.Text>
        </div>
      </Card.Body>
      <Card.Footer className="d-flex justify-content-between">
        <Button variant="warning" className="w-50 me-2">
          Edit
        </Button>
        <Button variant="danger" className="w-50">
          Delete
        </Button>
      </Card.Footer>
    </Card>
  );
};

export default ContactCard;