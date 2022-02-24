const button = ({buttonText, link}) => {
    const onClick = ({link}) => {
        console.log("hello")
    }

    return (
        <button onClick ={onClick} className ='button'>{buttonText}</button>
    )
}

export default button

button.defaultProps = {
    buttonText: 'Default',
}