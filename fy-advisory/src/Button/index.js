import './Button.css'

const Button=(props)=>{
    return(
        <button className='buttonStyle'>
            {props.text}
        </button>
    )
}

export default Button