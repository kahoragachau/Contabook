import './CreateContact.css'
import axios from 'axios';
import { useState } from 'react';
import { Form, useNavigate } from 'react-router-dom';
import { Input, FormControl, FormLabel, FormErrorMessage, FormHelperText, Button } from '@chakra-ui/react';


const CreateContact = () => {
  const [formData, setFormData] = useState({
    firstname: "",
    lastname: "",
    email: "",
    phone: ""
  })


  const navigate = useNavigate();

  const handleCreate = () => {
    axios.post(` http://localhost:3000/contacts`, formData)
    navigate('/')
  }
  return (
    <>
      <h1>Create a new Contact</h1>
      <br />
      <form onSubmit={handleCreate}>
        <FormControl>
          <FormLabel>First Name</FormLabel>
          <Input 
          type="text"
          onChange={(e) => {
            setFormData({...formData, firstname:e.target.value})
          }}
        />
        </FormControl>
        <FormControl>
          <FormLabel>Last Name</FormLabel>
          <Input 
          type="text"
          onChange={(e) => {
            setFormData({...formData, lastname:e.target.value})
          }}
        />
        </FormControl>

        <FormControl>
        <FormLabel>Email</FormLabel>
        <Input 
          type="email"
          onChange={(e) => {
            setFormData({...formData, email:e.target.value})
          }}
        />
        </FormControl>
        <FormControl>
          <FormLabel>Phone</FormLabel>
          <Input 
          type="text"
          onChange={(e) => {
            setFormData({...formData, phone:e.target.value})
          }}
        />
        </FormControl>
        <br />
        <Button colorScheme='teal' w="120px" type="submit">Add Contact</Button>
      </form>
    </>
  )
}

export default CreateContact;