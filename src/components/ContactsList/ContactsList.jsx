import { useEffect, useState } from "react";
import "./ContactsList.css";

const ContactList = () => {
  const [contacts, setContacts] = useState([])

  const fetchContacts = () => {
    fetch("http://localhost:3000/contacts")
    .then(response => response.json())
    .then(data => setContacts(data))
  }

  const listContacts =
      contacts.map(contact => {
        return (
        <li key={contact.id}>
          {contact.firstname} {contact.lastname} | {contact.email} | { contact.phone }
        </li>
        )
  })

  useEffect(()=>{
    fetchContacts()
  }, [])

  return (
    <>
      <h1>ContactList Works!</h1>
      <ul>
        {listContacts}
      </ul>
    </>
  )
}

export default ContactList;