import React from 'react';
import FeedPhotosItem from './FeedPhotosItem';
import useFetch from '../../Hooks/useFetch';
import { PHOTOS_GET } from '../../api';
import Error from '../Helper/Error';
import Loading from '../Helper/Loading';
import styles from './FeedPhotos.module.css';

const FeedPhotos = ({ page, user, setModalPhoto, setInfinite }) => {
  const { data, loading, error, request } = useFetch();

  React.useEffect(() => {
    async function fetchPhotos() {
      const total = 6;
      const { url, options } = PHOTOS_GET({ page, total, user });
      try {
        const response = await fetch(url, options);
        const json = await response.json();
        if (!response.ok) {
          throw new Error('Failed to fetch data'); // Melhorar a mensagem de erro com base na resposta do servidor
        }
        if (json.length < total) {
          setInfinite(false);
        }
        console.log('Response:', response); // Considere remover ou comentar na produção
        console.log('REQUEST JSON:', json); // Considere remover ou comentar na produção
      } catch (error) {
        console.error('Erro ao buscar fotos:', error);
        setInfinite(false);
        setError(error); // Configura o estado de erro para mostrar a mensagem no componente de erro
      }
    }

    fetchPhotos();
  }, [page, user, request, setInfinite, setError]);

  if (error) return <Error error={error} />;
  if (loading) return <Loading />;
  if (data && Array.isArray(data) && data.length > 0) {
    return (
      <ul className={`${styles.feed} animeLeft`}>
        {data.map((photo) => (
          <FeedPhotosItem
            key={photo.id}
            photo={photo}
            setModalPhoto={setModalPhoto}
          />
        ))}
      </ul>
    );
  } else {
    return null; // Retorna null se não houver dados ou se data não for um array
  }
};

export default FeedPhotos;
