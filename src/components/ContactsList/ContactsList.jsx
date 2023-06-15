import { useEffect, useState } from "react";
import "./ContactsList.css";

const ContactList = () => {
  const [contacts, setContacts] = useState([])

  const fetchContacts = () => {
    fetch("http://localhost:3000/contacts")
    .then(response => response.json())
    .then(data => setContacts(data))
  }

  const tabulateContacts =
      contacts.map(contact => {
        return (
          <>
            <tr>
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
    fetchContacts()
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