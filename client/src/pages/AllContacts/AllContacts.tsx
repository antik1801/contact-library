import React, { useEffect, useState } from 'react';
import ContactCard from '../../components/Card/ContactCard';
import axios from 'axios';
import { Container, Row, Col } from 'react-bootstrap';
import Loader from '../../components/shared/Loader/Loader';

interface Contact {
  _id: string;
  name: string;
  email?: string;
  phoneNo: string;
  address: string;
  profileImg: string;
}

const AllContacts: React.FC = () => {
  const [contacts, setContacts] = useState<Contact[]>([]);
  const [loading, setLoading] = React.useState<boolean>(false);
  const [showModal, setShowModal] = useState<boolean>(false);
  const [selectedContact, setSelectedContact] = useState<Contact | null>(null);
  // Fetch contacts from API
  useEffect(() => {
    const fetchContacts = async () => {
      try {
        setLoading(true);
        const response = await axios.get('https://contact-library.vercel.app/api/v1/users');
        if (response.data.success) {
          setLoading(false);
          setContacts(response.data.data); // assuming 'data' contains the array of contacts
        } else {
          setLoading(false);
          console.error('Failed to fetch contacts');
        }
      } catch (error) {
        setLoading(false);
        console.error('Error fetching contacts:', error);
      }
    };

    fetchContacts();
  }, []);

  const handleEditClick = (contact: Contact) => {
    setSelectedContact(contact); // Set the selected contact
    setShowModal(true); // Show the modal
  };

  const handleSave = (updatedContact: Contact) => {
    setContacts((prevContacts) =>
      prevContacts.map((contact) =>
        contact._id === updatedContact._id ? updatedContact : contact
      )
    );
  };

  return (
    <div>
      {
        loading ? (<Loader />) : ( <Container>
          <h2 className="text-center my-4">All Contacts</h2>
          <Row className="gy-4">
            {contacts.map((contact, index) => (
              <Col key={index} xs={12} sm={6} md={4} lg={3}>
                <ContactCard
                  name={contact.name}
                  email={contact.email}
                  phoneNo={contact.phoneNo}
                  address={contact.address}
                  profileImg={contact.profileImg}
                  onEdit={() => handleEditClick(contact)}
                />
              </Col>
            ))}
          </Row>
        </Container>)
      }
   
    </div>
  );
};

export default AllContacts;
