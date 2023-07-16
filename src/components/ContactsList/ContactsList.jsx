import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button, Input ,Table, Thead, Tbody, Tr, Th, Td, TableCaption, TableContainer } from "@chakra-ui/react";
import axios from "axios";
import "./ContactsList.css";

const ContactList = () => {
  const baseUrl = `http://localhost:3000/contacts`
  const [contacts, setContacts] = useState([]);
  const [searchText, setSearchText] = useState("")

  const navigate = useNavigate();

  const getContacts = () => {
    axios.get(baseUrl).then((response) => {
      setContacts(response.data)
    })
  }

  const handleCreate = () => {
    navigate('/create')
  }

  const filterContacts = contacts?.filter(contact => {
    return JSON.stringify(contact).toLowerCase().includes(searchText.toLowerCase())
  })

  const tabulateContacts =
      filterContacts.map(contact => {
        return (
          <>
            <Tr key={contact.id}>
              {/* <Td><input type="checkbox" name="" id="" /></Td> */}
              <Td>{contact.firstname}</Td>
              <Td>{contact.lastname}</Td>
              <Td>{contact.email} </Td>
              <Td>{contact.phone} </Td>
              {/* Handle Edit */}
              {/* <Td><button onClick={() => {
                navigate(`/contacts/${contact.id}`)
              }} >Edit</button></Td> */}
              {/* handle Delete  */}
              {/* <Td><button onClick={() => {
                axios.delete(`${baseUrl}/${contact.id}`)
              }} >Delete</button></Td> */}
            </Tr>
          </>
        )
  })

  useEffect(()=>{
    getContacts()
  }, [])

  return (
    <>
      <Button colorScheme="teal" onClick={handleCreate} mb="6">Create Contact</Button>
      <br />
      <Input type="text" placeholder="Search Contact" onChange={(e) => setSearchText(e.target.value)}/>
      <br />
      <br />
      <TableContainer>
        <Table variant="striped" colorScheme="blue">
          <TableCaption placement="top">Your Contact List</TableCaption>
          <Thead>
            <Tr>
              {/* <Th></Th> */}
              <Th>First Name</Th>
              <Th>Last Name</Th>
              <Th>Email</Th>
              <Th>Phone</Th>
              {/* <Th></Th>
              <Th></Th> */}
            </Tr>
          </Thead>
          <Tbody>
            {tabulateContacts}
          </Tbody>
        </Table>
      </TableContainer>
    </>
  )
}

export default ContactList;