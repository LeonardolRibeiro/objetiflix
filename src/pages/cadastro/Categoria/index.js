import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import PageDafault from '../../../components/PageDefault';
import FormField from '../../../components/FormField';
import Button from '../../../components/Button';

function CadastroCategoria() {
  const valoresIniciais = {
    nome: '',
    descricao: '',
    cor: '',
  };

  const [categorias, setCategorias] = useState([]);
  const [formValues, setFormValues] = useState(valoresIniciais);

  function setFormValue(chave, valor) {
    setFormValues({
      ...formValues,
      [chave]: valor, // nome: 'valor'
    });
  }

  function handlerOnChange(infosDoEvento) {
    setFormValue(
      infosDoEvento.target.getAttribute('name'),
      infosDoEvento.target.value,
    );
  }
  return (
    <PageDafault>
      <h1>
        Cadastro de categoria:
        {formValues.nome}
      </h1>

      <form
        onSubmit={function handleSubmit(infosDoEvento) {
          infosDoEvento.preventDefault();
          setCategorias([
            ...categorias, formValues,
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
          type="textarea"
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

        <Button>
          Cadastrar
        </Button>
      </form>

      <ul>
        {categorias.map((categoria) => (
          <li key={`${categoria.nome}`}>
            {categoria.nome}
          </li>
        ))}
      </ul>

      <Link to="/">
        Ir para o Home
      </Link>
    </PageDafault>
  );
}

export default CadastroCategoria;
