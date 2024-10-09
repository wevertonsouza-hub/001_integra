import { useEffect, useState } from 'react';
// import './App.css';
import Formulario from './Formulario';
import Tabela from './Tabela';


function Api() {

  //Objeto cliente
  const cliente = {
    id : 0,
    nome : "",
    cpf : "",
    email : "",
    telefone : "",
    cep : "",
    logradouro : "",
    numerolocal: "",
    cidade: "",
    uf: "",
    complemento: ""  
  }

  // UseState
  const [btnCadastrar, setBtnCadastrar] = useState(true);
  const [clientes, setCliente] = useState([]);
  const [objCliente, setObjCliente] = useState(cliente);

  //UseEffect
  useEffect(()=>{
    fetch("http://localhost:8090/listar")
    .then(retorno => retorno.json())
    .then(retorno_convertido => setCliente(retorno_convertido))

  }, []);

  //Obtendo os dados do formulário
  const aoDigitar = (e) => {
    setObjCliente({...objCliente, [e.target.name]:e.target.value});
  }

  // Cadastrar cliente
  const cadastrar = () => {
    fetch('http://localhost:8090/cadastrar',{
      method: 'post',
      body:JSON.stringify(objCliente),
      headers:{
        'Content-type':'application/json', 
        'Accept':'application/json'
      }
    })
    .then(retorno => retorno.json())
    .then(retorno_convertido => {

      if(retorno_convertido.mensagem !== undefined){
        alert(retorno_convertido.mensagem);
      }else{
        setCliente([...clientes, retorno_convertido]);
        alert('Cliente cadastrado com sucesso!');
        limparFormulario();
      }
        
      
      

    })
  }

    // Editar cliente
  const editar = () => {
      fetch('http://localhost:8090/editar',{
        method: 'put',
        body:JSON.stringify(objCliente),
        headers:{
          'Content-type':'application/json', 
          'Accept':'application/json'
        }
      })
      .then(retorno => retorno.json())
      .then(retorno_convertido => {
  
        if(retorno_convertido.mensagem !== undefined){
          alert(retorno_convertido.mensagem);
        }else{

          //Mensagem
          alert('Cliente editado com sucesso!');
          
           // Cópia do vetor de produtos
           let vetorTemp = [...clientes]
 
           // Índice
           let indice = vetorTemp.findIndex((p) =>{
           return p.id === objCliente.id;
       });
 
           // Editar cliente do vetorTemp
           vetorTemp[indice] = objCliente;    
          
           // Atualizar o vetor de clientes
           setCliente(vetorTemp);
    
           //Limpar o formulario
           limparFormulario();
          
          }  
        
        
  
      })
  }

   // Remover cliente
  const remover = () => {
    fetch('http://localhost:8090/remover/'+objCliente.id,{
      method: 'delete',     
      headers:{
        'Content-type':'application/json', 
        'Accept':'application/json'
      }
    })
    .then(retorno => retorno.json())
    .then(retorno_convertido => {

    //Mensagem
    alert(retorno_convertido.mensagem);
    
    // Cópia do vetor de clientes
    let vetorTemp = [...clientes];

     //Índice
    let indice = vetorTemp.findIndex((c) =>{
      return c.id === objCliente.id;
    });
      
     //Remover produto do vetor temp
      vetorTemp.splice(indice, 1);
     
     //Atualizar o vetor de produtos
     setCliente(vetorTemp);
     
     // Limpar Formulário
     limparFormulario();



    })
  }

  //Limpar Formulario
  const limparFormulario = () => {
    setObjCliente(cliente);
    setBtnCadastrar(true);
  }

  // Selecionar Cliente
  const selecionarCliente = (indice) => {
    setObjCliente(clientes[indice]);
    setBtnCadastrar(false);

  }

  return (
    <div>                
      <Formulario botao={btnCadastrar} eventoTeclado={aoDigitar} cadastrar={cadastrar} obj={objCliente} cancelar={limparFormulario} remover={remover} editar={editar} />
      <Tabela vetor={clientes} selecionar={selecionarCliente} />
    </div>
  );
}

export default Api;
