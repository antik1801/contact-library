import React from "react";

import { useForm } from "react-hook-form";
import { Button, Form, Alert } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css"; 
import "./Form.css"; 
import axios from "axios"; 
import Loader from "../shared/Loader/Loader";

interface ContactFormData {
  name: string;
  email?: string;
  phoneNo: string;
  address: string;
  profileImg: string;
}

const ContactForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<ContactFormData>();
  const [submitSuccess, setSubmitSuccess] = React.useState<boolean | null>(
    null
  );
  const [loading, setLoading] = React.useState<boolean>(false);

  const onSubmit = async (data: ContactFormData) => {
    try {
      setLoading(true);
      const response = await axios.post(
        "https://contact-library.vercel.app/api/v1/users/create-user",
        data
      );
      if (response.data.success) {
        setSubmitSuccess(true);
        console.log(response.data); 
        reset();
        setLoading(false);
      } else {
        setSubmitSuccess(false);
      }
    } catch (err) {
      console.error("Error creating user:", err);
      setSubmitSuccess(false);
    }
  };

  
  return (
    <div>
      {
        loading? (<Loader />) : (<div
          className="contact-form-container"
          style={{ maxWidth: "500px", margin: "auto" }}
        >
          <h2>Contact Form</h2>
          {submitSuccess === true && (
            <Alert
              variant="success"
              onClose={() => setSubmitSuccess(null)}
              dismissible
            >
              User created successfully!
            </Alert>
          )}
          {submitSuccess === false && (
            <Alert
              variant="danger"
              onClose={() => setSubmitSuccess(null)}
              dismissible
            >
              Failed to create user. Please try again.
            </Alert>
          )}
          <Form onSubmit={handleSubmit(onSubmit)}>
            <Form.Group controlId="formName">
              <Form.Label>Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter your name"
                {...register("name", { required: "Name is required" })}
                isInvalid={!!errors.name}
              />
              <Form.Control.Feedback type="invalid">
                {errors.name?.message}
              </Form.Control.Feedback>
            </Form.Group>
    
            <Form.Group controlId="formEmail">
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="email"
                placeholder="Enter your email"
                {...register("email")}
                isInvalid={!!errors.email}
              />
            </Form.Group>
    
            <Form.Group controlId="formPhoneNo">
              <Form.Label>Phone Number</Form.Label>
              <Form.Control
                type="tel"
                placeholder="Enter your phone number"
                {...register("phoneNo", { required: "Phone number is required" })}
                isInvalid={!!errors.phoneNo}
              />
              <Form.Control.Feedback type="invalid">
                {errors.phoneNo?.message}
              </Form.Control.Feedback>
            </Form.Group>
    
            <Form.Group controlId="formAddress">
              <Form.Label>Address</Form.Label>
              <Form.Control
                as="textarea"
                rows={3}
                placeholder="Enter your address"
                {...register("address", { required: "Address is required" })}
                isInvalid={!!errors.address}
              />
              <Form.Control.Feedback type="invalid">
                {errors.address?.message}
              </Form.Control.Feedback>
            </Form.Group>
    
            <Form.Group controlId="formProfileImg">
              <Form.Label>Profile Image URL</Form.Label>
              <Form.Control
                type="url"
                placeholder="Enter profile image URL"
                {...register("profileImg", {
                  required: "Profile image URL is required",
                })}
                isInvalid={!!errors.profileImg}
              />
              <Form.Control.Feedback type="invalid">
                {errors.profileImg?.message}
              </Form.Control.Feedback>
            </Form.Group>
    
            <Button variant="primary" type="submit" className="mt-2">
              Submit
            </Button>
          </Form>
        </div>) 
      }
    
    </div>
  );
};

export default ContactForm;
