import ContactList from './components/ContactsList/ContactsList';
import ContactItem from './components/ContactItem/ContactItem';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css'

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<ContactList />} />
          <Route path='/contact' element={<ContactItem />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
