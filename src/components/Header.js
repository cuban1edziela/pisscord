import Button from "./Button"

const Header = ({onOpen, showOpt}) => {
    return (
        <div>
           <h1>WYKURWIAJ</h1> 
           <Button buttonSetFunction={onOpen} text={showOpt===true ? 'zamykaj kurwa' : 'otwieraj kurwa'} /> 
            

        </div>
    )
}

export default Header
