import "./TextField.css"
const TextField =(props)=>{
    
    const digit=(event)=>{
        props.Altered(event.target.value)
    }
    return(
        <div className="textfield">
            <label>{props.label}</label>
            <input value={props.campo} onChange={digit} placeholder={props.placeholder}></input>
        </div>
    )
}
export default TextField