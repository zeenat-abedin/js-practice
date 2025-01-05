import { useState } from 'react'

function Form() {
    const [name, setName] = useState('');
    return (
      <form>
          <label>Username</label>
          <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
    </form>
  )
}

export default Form
