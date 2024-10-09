import { useEffect, useState } from 'react';
// import './App.css';
import FormularioProjetista from './FormularioProjetista';
import TabelaProjetista from './TabelaProjetista';


function ApiProjetista() {

  //Objeto Projetista
  const projetista = {
    idPro : 0,
    nome : "",
    cnpj : "",
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
  const [projetistas, setProjetista] = useState([]);
  const [objProjetista, setObjProjetista] = useState(projetista);

  //UseEffect
  useEffect(()=>{
    fetch("http://localhost:8090/listarproj")
    .then(retorno => retorno.json())
    .then(retorno_convertido => setProjetista(retorno_convertido))

  }, []);

  //Obtendo os dados do formulário
  const aoDigitar = (e) => {
    setObjProjetista({...objProjetista, [e.target.name]:e.target.value});
  }

  // Cadastrar projetista
  const cadastrar = () => {
    fetch('http://localhost:8090/cadastrarproj',{
      method: 'post',
      body:JSON.stringify(objProjetista),
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
        setProjetista([...projetistas, retorno_convertido]);
        alert('Projetista cadastrado com sucesso!');
        limparFormulario();
      }
        
      
      

    })
  }

    // Editar Projetista
  const editar = () => {
      fetch('http://localhost:8090/editarproj',{
        method: 'put',
        body:JSON.stringify(objProjetista),
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
          alert('Projetista editado com sucesso!');
          
           // Cópia do vetor de projetistas
           let vetorTemp = [...projetistas]
 
           // Índice
           let indice = vetorTemp.findIndex((p) =>{
           return p.id === objProjetista.id;
       });
 
           // Editar projetista do vetorTemp
           vetorTemp[indice] = objProjetista;    
          
           // Atualizar o vetor de projetistas
           setProjetista(vetorTemp);
    
           //Limpar o formulario
           limparFormulario();
          
          }  
        
        
  
      })
  }

   // Remover projetista
  const remover = () => {
    fetch('http://localhost:8090/removerproj/'+objProjetista.idPro,{
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
    let vetorTemp = [...projetistas];

     //Índice
    let indice = vetorTemp.findIndex((p) =>{
      return p.idPro === objProjetista.idPro;
    });
      
     //Remover projetista do vetor temp
      vetorTemp.splice(indice, 1);
     
     //Atualizar o vetor de projetistas
     setProjetista(vetorTemp);
     
     // Limpar Formulário
     limparFormulario();



    })
  }

  //Limpar Formulario
  const limparFormulario = () => {
    setObjProjetista(projetista);
    setBtnCadastrar(true);
  }

  // Selecionar Projetista
  const selecionarProjetista = (indice) => {
    setObjProjetista(projetistas[indice]);
    setBtnCadastrar(false);

  }

  return (
    <div>                 
      <FormularioProjetista botao={btnCadastrar} eventoTeclado={aoDigitar} cadastrar={cadastrar} obj={objProjetista} cancelar={limparFormulario} remover={remover} editar={editar} />
      <TabelaProjetista vetor={projetistas} selecionar={selecionarProjetista} />
    </div>
  );
}

export default ApiProjetista;
