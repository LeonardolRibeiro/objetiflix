import { useState } from 'react';

function useForm(valoresIniciais) {
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

  function clearForm() {
    setFormValues(valoresIniciais);
  }

  return {
    formValues,
    handlerOnChange,
    clearForm,
  };
}

export default useForm;
