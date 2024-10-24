// https://jsonplaceholder.typicode.com/users
// Display users {name, username, email, phone, company_name}
// Search text based on name and username

import { useEffect, useState } from 'react'
import './App.css'

function App() {
  const [users, setUsers] = useState([])
  const [search, setSearch] = useState('')

  const getUsersData = async () => {
    const res = await fetch('https://jsonplaceholder.typicode.com/users')
    const data = await res.json()
    return data
  }

  useEffect(() => {
    getUsersData().then((res) => setUsers(res))
  }, [])

  const handleSearchChange = (e) => {
      setSearch(e.target.value)
  }
const filterUsersData = () => {
  if (search.trim()) {
    return users.filter((user) =>
      user.name.toLowerCase().includes(search.toLowerCase()) || user.username.toLowerCase().includes(search.toLowerCase())
    )
  }
  return users
}
  
  return (
    <>
      <input value={search} onChange={handleSearchChange} placeholder='Search...'/>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Username</th>
            <th>Email</th>
            <th>Phone</th>
            <th>Company Name</th>
          </tr>        
        </thead>
        <tbody>         
            {filterUsersData().map((user) => (
              <tr key={user.id}>
                <td>{user.name}</td>
                <td>{user.username}</td>
                <td>{user.email}</td>
                <td>{user.phone}</td>
                <td>{user.company.name}</td>
              </tr>
            ))}
        </tbody>
      </table>
    </>
  )
}

export default App
