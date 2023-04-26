import './FormsFy.css'
import TextField from '../TextField';
import DropdownList from '../DropdownList';
import Button from '../Button';


const classes=['RadioTV','Enfermagem','Publicidade Propaganda']

const FormsFy=()=>{
    return(
       <section className="forms">        
            <form> 
                <h2>Preencha o campo para podermos encaminhar novidades!</h2>
                <TextField label='Nome' placeholder='Digite seu nome'/>
                <TextField label='E-mail' placeholder='Digite seu E-mail'/>
                <DropdownList label='Turma' placeholder='Escolha'itens={classes}/>
                <Button text="Aplicar"/>
            </form>
        </section>

    )
}
export default FormsFy