import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

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
    // navigate("/")
  }

  return (
    <>
      <h1>Contact Item Works</h1>
      <form onSubmit={handleUpdate}>
        <label htmlFor="firstname">First Name: </label> 
        <input 
          type="text" 
          value={updateContact.firstname} 
          onChange={(e) => setUpdateContact({...updateContact, firstname:e.target.value})}
        />
        <br />
        <label htmlFor="lastname">Last Name: </label>
        <input 
          type="text" 
          value={updateContact.lastname}
          onChange={(e) => setUpdateContact({...updateContact, lastname:e.target.value})} 
        />
        <br />
        <label htmlFor="email">Email: </label>
        <input 
          type="text" 
          value={updateContact.email} 
          onChange={(e) => setUpdateContact({...updateContact, email:e.target.value})}
        />
        <br />
        <label htmlFor="phone">Phone: </label>
        <input 
          type="text"   
          value={updateContact.phone}
          onChange={(e) => setUpdateContact({...updateContact, phone:e.target.value})}
        />
        <br />
        <button type="submit">Update</button>
      </form>
    </>
  )
}

export default ContactItem;