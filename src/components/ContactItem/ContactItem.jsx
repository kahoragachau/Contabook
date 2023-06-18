import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const ContactItem = () => {
  const [updateContact, setUpdateContact] = useState("")
  const {id} = useParams()

  const getContact = () => {
    axios.get(`http://localhost:3000/contacts/${id}`)
    .then(resp => setUpdateContact(resp.data))
  }

  useEffect(() => {
    getContact()
  }, [id])


  return (
    <>
      <h1>Contact Item Works</h1>
      <p>Your id is {updateContact.id}</p>
      <p>Your name is {updateContact.firstname} {updateContact.lastname}</p>
      <p>Your Email is {updateContact.email}</p>
      <p>Your Phone is {updateContact.phone}</p>
    </>
  )
}

export default ContactItem;