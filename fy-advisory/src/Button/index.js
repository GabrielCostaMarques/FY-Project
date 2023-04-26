import './Button.css'

const Button=(props)=>{
    return(
        <button className='buttonStyle'>
            <span>{props.text}</span>
        </button>
    )
}
export default Button