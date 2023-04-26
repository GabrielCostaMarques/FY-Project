import './FormsFy.css'
import TextField from '../TextField';
import DropdownList from '../DropdownList';
import Button from '../Button';
import { useState } from "react";

const FormsFy=()=>{
    const classes=['RadioTV','Enfermagem','Publicidade Propaganda']

    const [name, setName] = useState('')
    const [email, setEmail] = useState('')

    const Save =(event)=>{
        event.preventDefault()
        alert("O form foi submetido")
    }
    return(
       <section className="forms">        
            <form onSubmit={Save}> 
                <h2>Preencha o campo para podermos encaminhar novidades!</h2>
                <TextField 
                label='Nome' 
                placeholder='Digite seu nome'
                campo={name}
                digit={campo=>setName(campo)}
                />

                <TextField 
                    type="email" 
                    label='E-mail' 
                    placeholder='Digite seu E-mail'
                    campo={email}
                    digit={campo=>setEmail(campo)}
                />

                <DropdownList label='Turma' placeholder='Escolha'itens={classes}/>
                <Button text="Aplicar"/>
            </form>
        </section>

    )
}
export default FormsFy