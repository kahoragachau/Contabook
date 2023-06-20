import './CreateContact.css'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';


const CreateContact = () => {

  const navigate = useNavigate();

  const handleCreate = () => {
    navigate('/')
  }
  return (
    <>
      <h1>Create Contact Works!!</h1>
      <form onSubmit={handleCreate}>
        <label htmlFor="firstname">First Name: </label> 
        <input 
          type="text"
        />
        <br />
        <label htmlFor="lastname">Last Name: </label>
        <input 
          type="text" 
        />
        <br />
        <label htmlFor="email">Email: </label>
        <input 
          type="text" 
        />
        <br />
        <label htmlFor="phone">Phone: </label>
        <input 
          type="text"   
        />
        <br />
        <button type="submit">Add</button>
      </form>
    </>
  )
}

export default CreateContact;