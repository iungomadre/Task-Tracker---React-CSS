import {useState} from "react";

const NewTaskForm = ({ submit, tasksNumber }) => {
    const [textArea, setTextArea] = useState('')
    const [isFocused, setIsFocused] = useState(false)

    const handleTextChange = e => {
        setTextArea(e.target.value)
    }

    const submitForm = e => {
        e.preventDefault()
        setTextArea('')
        submit(textArea)
    }

    return (
        <div className='NewTaskForm'>
            { isFocused && (tasksNumber > 0) && <hr /> }
            <form onSubmit={submitForm}>
                <input className='textArea' type="text"
                    onChange={handleTextChange}
                    value={textArea}
                    onFocus={() => setIsFocused(true)}
                    onBlur={() => setIsFocused(false)} />
            </form>
        </div>
    )
}

export default NewTaskForm