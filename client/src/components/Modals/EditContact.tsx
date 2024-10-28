/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useState } from 'react';
import { Modal, Button, Form } from 'react-bootstrap';
import axios from 'axios';

interface EditContactProps {
    show: boolean;
    onHide: () => void;
    contact: {
      _id: string;
      name: string;
      email?: string;
      phoneNo: string;
      address: string;
      profileImg: string;
    };
    onSave: (updatedContact: any) => void;
  }


  
const EditContact :  React.FC<EditContactProps> = ({ show, onHide, contact, onSave }) => {

    const [formData, setFormData] = useState({
        name: contact.name,
        email: contact.email || '',
        phoneNo: contact.phoneNo,
        address: contact.address,
        profileImg: contact.profileImg,
      });

      const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
      };

      const handleSave = async () => {
        try {
          const response = await axios.put(`https://contact-library.vercel.app/api/v1/users/${contact._id}`, formData);
          if (response.data.success) {
            onSave(response.data.data);
            onHide();
          } else {
            console.error('Failed to update contact');
          }
        } catch (error) {
          console.error('Error updating contact:', error);
        }
      };
    

  return (
    <Modal show={show} onHide={onHide} centered>
      <Modal.Header closeButton>
        <Modal.Title>Edit Contact</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Form.Group controlId="name">
            <Form.Label>Name</Form.Label>
            <Form.Control
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </Form.Group>
          <Form.Group controlId="email" className="mt-3">
            <Form.Label>Email</Form.Label>
            <Form.Control
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
            />
          </Form.Group>
          <Form.Group controlId="phoneNo" className="mt-3">
            <Form.Label>Phone Number</Form.Label>
            <Form.Control
              type="text"
              name="phoneNo"
              value={formData.phoneNo}
              onChange={handleChange}
              required
            />
          </Form.Group>
          <Form.Group controlId="address" className="mt-3">
            <Form.Label>Address</Form.Label>
            <Form.Control
              type="text"
              name="address"
              value={formData.address}
              onChange={handleChange}
              required
            />
          </Form.Group>
          <Form.Group controlId="profileImg" className="mt-3">
            <Form.Label>Profile Image URL</Form.Label>
            <Form.Control
              type="text"
              name="profileImg"
              value={formData.profileImg}
              onChange={handleChange}
            />
          </Form.Group>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={onHide}>
          Cancel
        </Button>
        <Button variant="primary" onClick={handleSave}>
          Save Changes
        </Button>
      </Modal.Footer>
    </Modal>
  )
}

export default EditContact
