// https://jsonplaceholder.typicode.com/users
// Display users {name, username, email, phone, company_name}

import { useEffect, useState } from 'react'
import './App.css'

function App() {
  const [users, setUsers] = useState([])

  const getUsersData = async() => {
    const res = await fetch('https://jsonplaceholder.typicode.com/users')
    const data = await res.json()
    return data
  }

  useEffect(() => {
    getUsersData().then((res) => setUsers(res))
  }, [])
  
  return (
    <>
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
            {users.map((user) => (
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
      Hi
    </>
  )
}

export default App
