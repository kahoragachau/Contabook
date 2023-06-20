import './CreateContact.css'
import axios from 'axios';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';


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
      <h1>Create Contact Works!!</h1>
      <form onSubmit={handleCreate}>
        <label htmlFor="firstname">First Name: </label> 
        <input 
          type="text"
          onChange={(e) => {
            setFormData({...formData, firstname:e.target.value})
          }}
        />
        <br />
        <label htmlFor="lastname">Last Name: </label>
        <input 
          type="text" 
          onChange={(e) => {
            setFormData({...formData, lastname:e.target.value})
          }}
        />
        <br />
        <label htmlFor="email">Email: </label>
        <input 
          type="text" 
          onChange={(e) => {
            setFormData({...formData, email:e.target.value})
          }}
        />
        <br />
        <label htmlFor="phone">Phone: </label>
        <input 
          type="text"  
          onChange={(e) => {
            setFormData({...formData, phone:e.target.value})
          }} 
        />
        <br />
        <button type="submit">Add</button>
      </form>
    </>
  )
}

export default CreateContact;