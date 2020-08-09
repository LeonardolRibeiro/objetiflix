import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import PageDafault from '../../../components/PageDefault';
import FormField from '../../../components/FormField';
import useForm from '../../../hooks/useForm';
import Button from '../../../components/Button';

function CadastroVideo() {
  const history = useHistory();
  const { handlerOnChange, formValues } = useForm({

  });

  return (
    <PageDafault>
      <h1>Cadastro de video</h1>

      <form onSubmit={(event) => {
        event.preventDefault();
        console.log('CLIQUEI MALANDRO');
        alert('Video cadastrado com sucesso!!!1!');

        history.push('/');
      }}
      >
        <FormField
          label="Título do Vídeo"
          name="titulo"
          value={formValues.titulo}
          onChange={handlerOnChange}
        />

      </form>

      <Button>
        Cadastrar
      </Button>

      <Link to="/cadastro/categoria">
        Cadastrar categoria
      </Link>
    </PageDafault>
  );
}

export default CadastroVideo;
