import './style.css'
import { useParams } from 'react-router-dom'
import { CadastroEstudante } from '../modules/CadastroEstudante';
import { CadastroEmpresa } from '../modules/CadastroEmpresa';

export function Cadastro() {
    const { cargo } = useParams();
    console.log(cargo)
    return (
        <>
        {cargo === "estudante" ? 
            <CadastroEstudante cargo={'estudante'} />
        : cargo === "empresa" ?
            <CadastroEmpresa cargo={'empresa'} />
        :
            <>oi</>
        }
        </>
    )
}