import { useEffect, useState } from "react";
import axios from "axios";
import "./ContactsList.css";

const ContactList = () => {
  const baseUrl = "http://localhost:3000/contacts"

  const [contacts, setContacts] = useState([])

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
              <td><button>Edit</button></td>
              <td><button>Delete</button></td>
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