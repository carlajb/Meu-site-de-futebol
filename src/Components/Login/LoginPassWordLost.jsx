import React from 'react';
import Input from '../forms/Input';
import Button from '../forms/Button';
import useForm from '../../Hooks/useForm';
import useFetch from '../../Hooks/useFetch';
import { PASSWORD_LOST } from '../../api';
import Error from '../Helper/Error';
import Head from '../Helper/Head';

const LoginPasswordLost = () => {
  const login = useForm();
  const { data, loading, error, request } = useFetch();

  async function handleSubmit(event) {
    event.preventDefault();
    if (login.validate()) {
      try {
        const { url, options } = PASSWORD_LOST({
          login: login.value,
          url: window.location.href.replace('perdeu', 'resetar'),
        });

        const { json } = await request(url, options);

        // Verifica se a resposta contém a chave de resetar
        console.log('RESPOSTA DA REQUISICAO JSON!!:', json);

        if (json.key) {
          // Lógica para o caso de sucesso, exibindo mensagem ou redirecionando
        } else {
          // Lógica para lidar com falha ao receber a chave
        }
      } catch (error) {
        console.error('Erro ao processar requisição:', error.message);
      }
    }
  }

  return (
    <section className="animeLeft">
      <Head title="Perdeu a senha" />
      <h1 className="title">Perdeu a senha?</h1>
      {data ? (
        <p style={{ color: '#4c1' }}>{data}</p>
      ) : (
        <form onSubmit={handleSubmit}>
          <Input label="Email / Usuário" type="text" name="login" {...login} />
          {loading ? (
            <Button disabled>Enviando...</Button>
          ) : (
            <Button>Enviar Email</Button>
          )}
        </form>
      )}

      <Error error={error} />
    </section>
  );
};

export default LoginPasswordLost;
