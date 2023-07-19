import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Button, Input, FormControl, FormLabel, FormErrorMessage, FormHelperText } from "@chakra-ui/react";

const ContactItem = () => {
  const [updateContact, setUpdateContact] = useState({
    formData: {
      firstname: "",
      lastname: "",
      email: "",
      phone: ""
    }
  })

  const {id} = useParams()
  const navigate = useNavigate()

  const getContacts = () => {
    axios.get(`http://localhost:3000/contacts/${id}`)
    .then(resp => setUpdateContact(resp.data))
  }

  useEffect(() => {
    getContacts()
  }, [id])

  const handleUpdate = (event) => {
    event.preventDefault();
    axios.put(`http://localhost:3000/contacts/${id}`, updateContact)
    navigate("/")
  }

  return (
    <>
      <h1>Edit Contact</h1>
      <form onSubmit={handleUpdate}>
        <FormControl>
          <FormLabel>First Name</FormLabel>
          <Input type="text" value={updateContact.firstname} 
          onChange={(e) => setUpdateContact({...updateContact, firstname:e.target.value})}/>
        </FormControl>
        <FormControl>
          <FormLabel htmlFor="lastname">Last Name: </FormLabel>
          <Input 
            type="text" 
            value={updateContact.lastname}
            onChange={(e) => setUpdateContact({...updateContact, lastname:e.target.value})} 
          />
        </FormControl>
        <FormControl>
          <FormLabel htmlFor="email">Email: </FormLabel>
          <Input 
            type="text" 
            value={updateContact.email} 
            onChange={(e) => setUpdateContact({...updateContact, email:e.target.value})}
          />
        </FormControl>

        <FormControl>
          <FormLabel htmlFor="phone">Phone: </FormLabel>
          <Input 
            type="text"   
            value={updateContact.phone}
            onChange={(e) => setUpdateContact({...updateContact, phone:e.target.value})}
          />
        </FormControl>
        <br />
        <Button colorScheme="orange" type="submit">Update</Button>
      </form>
    </>
  )
}

export default ContactItem;