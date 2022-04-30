const Button = ({ text, callback }) => {
    const submit = e => {
        e.preventDefault()
        callback()
    }
    return (
        <button className={'Button'} onClick={submit}>{text}</button>
    )
}

export default Button