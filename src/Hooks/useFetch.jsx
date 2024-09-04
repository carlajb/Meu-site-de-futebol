import React from 'react';

const useFetch = () => {
  const [data, setData] = React.useState(null);
  const [error, setError] = React.useState(null);
  const [loading, setLoading] = React.useState(false);

  const request = React.useCallback(async (url, options) => {
    let response;
    let json;
    try {
      setError(null);
      setLoading(true);
      setData(null); // Limpa o estado de dados ao iniciar uma nova requisição
      console.log('Fazendo requisição para:', url);
      console.log('Opções da requisição:', options);

      response = await fetch(url, options);

      // Verifica o tipo de conteúdo da resposta
      const contentType = response.headers.get('Content-Type');
      if (contentType && contentType.includes('application/json')) {
        json = await response.json();
      } else {
        throw new Error('Resposta não está em formato JSON');
      }

      if (!response.ok) throw new Error(json.message || 'Erro na requisição');
    } catch (err) {
      json = null;
      console.error('Erro na requisição:', err);
      setError(err.message);
    } finally {
      setData(json);
      setLoading(false);
      console.log('Resposta da requisição:', response);
      console.log('Dados retornados:', json);
      return { response, json };
    }
  }, []);

  return {
    data,
    loading,
    error,
    request,
  };
};

export default useFetch;
