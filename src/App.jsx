import ContactList from './components/ContactsList/ContactsList';
import ContactItem from './components/ContactItem/ContactItem';
import CreateContact from './components/CreateContact/CreateContact';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css'

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<ContactList />} />
          <Route path='/contacts/:id' element={<ContactItem />} />
          <Route path='/create' element={<CreateContact />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
