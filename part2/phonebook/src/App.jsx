import { useState } from 'react'
import Filter from './components/Filter'
import ContactForm from './components/ContactForm'
import Contacts from './components/Contacts'

const App = () => {
  const [contacts, setContacts] = useState([
    { name: 'Arto Hellas', number: '040-123456', id: 1 },
    { name: 'Ada Lovelace', number: '39-44-5323523', id: 2 },
    { name: 'Dan Abramov', number: '12-43-234345', id: 3 },
    { name: 'Mary Poppendieck', number: '39-23-6423122', id: 4 }
  ]) 
  const [newName, setNewName] = useState('Mario Rossi')
  const [newNumber, setNewNumber] = useState('00000000')
  const [filter, setFilter] = useState('')

  const addContact= (event) => {
    event.preventDefault()

    if(contacts.some(p => p.name === newName)){
      alert(`${newName} is already added to phonebook`)
      return
    }

    const newContact = {
      name: newName,
      number: newNumber,
      id: contacts.length + 1
    }
    
    setContacts(contacts.concat(newContact))
    setNewName('')
    setNewNumber('')
  }

  const handleContactNameChange = (event) => {
    setNewName(event.target.value)
  }
  const handleContactNumberChange = (event) => {
    setNewNumber(event.target.value)
  }
  const handleFilter = (event) => {
    setFilter(event.target.value)
  }

  const filteredContacts = filter.length > 0 ? contacts.filter(contact => contact.name.toLowerCase().includes(filter.toLowerCase())) : contacts
  return (
    <div>
      <h1>Phonebook</h1>
      <Filter filterValue = {filter} onChange = {handleFilter}/>
      <h2>Add a new contact</h2>

      <ContactForm onSubmit={addContact} nameValue={newName} numberValue={newNumber} 
        nameOnChange={handleContactNameChange} numberOnChange={handleContactNumberChange}/>
      
      <h2>Numbers</h2>
      <Contacts contacts={filteredContacts}/>
    </div>
  )
}

export default App