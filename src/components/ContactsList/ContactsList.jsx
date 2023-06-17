import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "./ContactsList.css";

const ContactList = () => {
  const baseUrl = `http://localhost:3000/contacts`
  const [contacts, setContacts] = useState([]);

  const navigate = useNavigate();

  const handleEdit = () => {
    navigate('/contact')
  }

  const getContacts = () => {
    axios.get(baseUrl).then((response) => {
      setContacts(response.data)
    })
  }


  const tabulateContacts =
      contacts.map(contact => {
        return (
          <>
            <tr key={contact.id}>
              <td><input type="checkbox" name="" id="" /></td>
              <td>{contact.firstname}</td>
              <td>{contact.lastname}</td>
              <td>{contact.email} </td>
              <td>{contact.phone} </td>
              {/* Handle Edit */}
              <td><button onClick={handleEdit}>Edit</button></td>
              {/* handle Delete  */}
              <td><button onClick={() => {
                axios.delete(`${baseUrl}/${contact.id}`)
              }}>Delete</button></td>
            </tr>
          </>
        )
  })

  useEffect(()=>{
    getContacts()
  }, [])

  return (
    <>
      <h1>ContactList Works!</h1>
      <table>
        <tr>
          <th> </th>
          <th>First Name</th>
          <th>Last Name</th>
          <th>Email</th>
          <th>Phone</th>
          <th> </th>
          <th> </th>
        </tr>
        {tabulateContacts}
      </table>
    </>
  )
}

export default ContactList;