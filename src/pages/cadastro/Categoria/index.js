import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import PageDafault from '../../../components/PageDefault';
import FormField from '../../../components/FormField';
import Button from '../../../components/Button';
import useForm from '../../../hooks/useForm';

function CadastroCategoria() {
  const valoresIniciais = {
    nome: '',
    descricao: '',
    cor: '',
  };

  const { handlerOnChange, formValues, clearForm } = useForm(valoresIniciais);

  const [categorias, setCategorias] = useState([]);

  useEffect(() => {
    const URL = window.location.hostname.includes('localhost')
      ? 'http://localhost:8080/categorias'
      : 'https://objetiflix.herokuapp.com/categorias';

    fetch(URL)
      .then(async (respostaDoServidor) => {
        const resposta = await respostaDoServidor.json();
        setCategorias([
          ...resposta,
        ]);
      });
  }, []);

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

          clearForm();
        }}
      >
        <FormField
          label="Nome da Categoria"
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

      {categorias.length === 0 && (
        <div>
          Carregando...
        </div>
      )}

      <ul>
        {categorias.map((categoria) => (
          <li key={`${categoria.titulo}`}>
            {categoria.titulo}
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
