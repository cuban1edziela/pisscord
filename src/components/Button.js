const Button = ({text, buttonSetFunction}) => {
    return (

        <button onClick = {buttonSetFunction}> 
            {text}
        </button> 
    )
}

export default Button
