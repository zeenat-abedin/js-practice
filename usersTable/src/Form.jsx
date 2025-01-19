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
            <label htmlFor='name'>Username</label>
            <input
                type="text"
                value={name}
                onChange={handleUserNameChange}
            />
        </div>
        <div>
            <label htmlFor='comments'>Comments</label>
            <textarea
                value={comments}
                onChange={handleCommentsChange} 
            />
            </div>
            <div>
                <label htmlFor="">Topic</label>
                <select name="" id=""></select>
            </div>
    </form>
  )
}


export default Form
