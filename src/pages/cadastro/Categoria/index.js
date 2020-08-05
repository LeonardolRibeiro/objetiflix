import React from 'react';
import PageDafault from '../../../components/PageDefault';
import { Link } from 'react-router-dom';

function CadastroCategoria() {
    return (
      <PageDafault>
        <h1>Cadastro de categoria</h1>

        <Link to="/">
          Ir para o Home
        </Link>
      </PageDafault>
    )
  }

  export default CadastroCategoria