import React, { useState } from 'react';
import PageDafault from '../../../components/PageDefault';
import { Link } from 'react-router-dom';
import FormField from '../../../components/FormField';

function CadastroCategoria() {
  const valoresIniciais = {
    nome: '',
    descricao: '',
    cor: '',
  }

  const [categorias, setCategorias] = useState([]);
  const [formValues, setFormValues] = useState(valoresIniciais);
  
  function setFormValue(chave, valor) {
    setFormValues({
      ...formValues,
      [chave]: valor, // nome: 'valor'
    })
  }

  function handlerOnChange(infosDoEvento){
    setFormValue(
      infosDoEvento.target.getAttribute('name'),
      infosDoEvento.target.value,
    );
  }
    return (
      <PageDafault>
        <h1>Cadastro de categoria: {formValues.nome}</h1>

          <form 
            onSubmit={function handleSubmit(infosDoEvento){
              infosDoEvento.preventDefault();
              setCategorias([
                ...categorias, formValues
              ]);

              setFormValues(valoresIniciais);
            }}
          >
            <FormField
              label="Nome da Categoria" 
              type="text"
              name="nome"
              value={formValues.nome}
              onChange={handlerOnChange}
            />

            <FormField 
              label="Descrição" 
              type="text"
              name="descricao"
              value={formValues.descricao}
              onChange={handlerOnChange}
            />

            <FormField 
              label="Cor" 
              type="color"
              name="cor"
              value={formValues.cor}
              onChange={handlerOnChange}
            />

            {/* <div>
            <label>
                Descrição:
                <textarea 
                  type="text" 
                  name="descricao"
                  value={formValues.descricao}
                  onChange={handlerOnChange}/>
              </label>
            </div>

            <div>
            <label>
                Cor:
                <input 
                  type="color" 
                  name="cor"
                  value={formValues.cor}
                  onChange={handlerOnChange}/>
              </label>
            </div> */}

            <button>Cadastrar</button>
        
          </form>   

          <ul>
            {categorias.map((categoria, indice) => {
              return (
                <li key={`${categoria}${indice}`}>
                  {categoria.nome}
                </li>
              )
            })}
          </ul>

        <Link to="/">
          Ir para o Home
        </Link>
      </PageDafault>
    )
  }

  export default CadastroCategoria;