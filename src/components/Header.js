import Button from './Button'


const Header = ({name}) => {
    return (
        <header>


            <h1> I am <span>{name}</span></h1>
            <h2> Welcome to My Website</h2>
        </header>
    )
}

export default Header
