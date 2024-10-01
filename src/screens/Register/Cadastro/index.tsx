import './style.css'
import { useParams } from 'react-router-dom'
import { CadastroEstudante } from '../modules/CadastroEstudante';
import { CadastroEmpresa } from '../modules/CadastroEmpresa';

export function Cadastro() {
    const { cargo } = useParams();
    return (
        <>
        {cargo == "estudante" ? 
            <CadastroEstudante cargo={cargo == 'estudante' ? 'estudante' : undefined} />
        : cargo == "empresa" ?
            <CadastroEmpresa cargo={cargo == 'empresa' ? 'empresa' : undefined} />
        :
            <CadastroEmpresa cargo={cargo == 'empresa' ? 'empresa' : undefined} />
        }
        </>
    )
}