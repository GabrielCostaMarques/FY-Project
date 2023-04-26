import "./TextField.css"


const TextField =(props)=>{
    return(
        <div className="textfield">
            <label>{props.label}</label>
            <input placeholder={props.placeholder}></input>
        </div>
    )
}
export default TextField