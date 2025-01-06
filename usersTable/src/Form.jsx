import { useState } from 'react'

function Form() {
    const [name, setName] = useState('');
    const [comments, setComments] = useState('')
    return (
    <form>
        <div>
            <label>Username</label>
            <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
            />
        </div>
        <div>
            <label htmlFor="">Comments</label>
            <textarea
                value={comments}
                onChange={(e) => setComments(e.target.value)} 
            />
        </div>
    </form>
  )
}


export default Form
