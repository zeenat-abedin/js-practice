import { useState } from 'react'

function Form() {
    const [name, setName] = useState('');
    const [comments, setComments] = useState('')

    function handleUserNameChange(e) {
        setName(e.target.value)
    }
    function handleCommentsChange(e) {
        setComments(e.target.value)
    }

    return (
    <form>
        <div>
            <label>Username</label>
            <input
                type="text"
                value={name}
                onChange={handleUserNameChange}
            />
        </div>
        <div>
            <label htmlFor="">Comments</label>
            <textarea
                value={comments}
                onChange={handleCommentsChange} 
            />
        </div>
    </form>
  )
}


export default Form
