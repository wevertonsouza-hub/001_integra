

function Tabela({ vetor, selecionar }) {
    return (
        <table className="table">
            <thead>
                <tr>
                    <th>#</th>
                    <th>Nome</th>
                    <th>CPF</th>
                    <th>Email</th>
                    <th>Telefone</th>
                    <th>CEP</th>
                    <th>Logradouro</th>
                    <th>Numero</th>
                    <th>Cidade</th>
                    <th>UF</th>
                    <th>Complemento</th>
                    <th>Selecionar</th>
                </tr>
            </thead>

            <tbody>
            {
                    vetor.map((obj, indice) => (
                        <tr key={indice}>
                            <td>{indice+1}</td>
                            <td>{obj.nome}</td>
                            <td>{obj.cpf}</td>
                            <td>{obj.email}</td>
                            <td>{obj.telefone}</td>
                            <td>{obj.cep}</td>
                            <td>{obj.logradouro}</td>
                            <td>{obj.numerolocal}</td>
                            <td>{obj.cidade}</td>
                            <td>{obj.uf}</td>
                            <td>{obj.complemento}</td>
                            <td><button onClick={()=> {selecionar(indice)}} className="btn btn-success">Selecionar</button></td>                            
                        </tr>

                    ))
                }
            </tbody>
        </table>
    )
}
export default Tabela;