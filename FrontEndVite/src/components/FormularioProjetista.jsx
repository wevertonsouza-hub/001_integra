
function FormularioProjetista({ botao, eventoTeclado, cadastrar, obj, cancelar, remover, editar}) {
    return (
        <form>
            <input type="text" value={obj.nome} onChange={eventoTeclado} name="nome" placeholder="Nome Completo" className="form-control" />
            <input type="text" value={obj.cnpj} onChange={eventoTeclado} name="cnpj" placeholder="CNPJ" className="form-control" />
            <input type="text" value={obj.email} onChange={eventoTeclado} name="email" placeholder="Email" className="form-control" />
            <input type="text" value={obj.telefone} onChange={eventoTeclado} name="telefone" placeholder="Telefone" className="form-control" />
            <input type="text" value={obj.cep} onChange={eventoTeclado} name="cep" placeholder="CEP" className="form-control" />
            <input type="text" value={obj.logradouro} onChange={eventoTeclado} name="logradouro" placeholder="Logradouro" className="form-control" />
            <input type="text" value={obj.numerolocal} onChange={eventoTeclado} name="numerolocal" placeholder="Numero" className="form-control" />
            <input type="text" value={obj.cidade} onChange={eventoTeclado} name="cidade" placeholder="Cidade" className="form-control" />
            <input type="text" value={obj.uf} onChange={eventoTeclado} name="uf" placeholder="UF" className="form-control" />
            <input type="text" value={obj.complemento} onChange={eventoTeclado} name="complemento" placeholder="Complemento" className="form-control" />

            {
                botao
                    ?
                    <input type="button" value="Cadastrar" onClick={cadastrar} className="btn btn-primary" />
                    :
                    <div>
                        <input type="button" value="Editar" onClick={editar} className="btn btn-warning" />
                        <input type="button" value="Remover" onClick={remover} className="btn btn-danger" />
                        <input type="button" value="Cancelar" onClick={cancelar} className="btn btn-secondary" />
                    </div>
            }





        </form>
    )
}

export default FormularioProjetista;
