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
        const { response, json } = await request(url, options);
        console.log('Response:', response);
        console.log('REQUEST JSON:', json);
        if (response && response.ok) {
          if (json && Array.isArray(json)) {
            if (json.length < total) {
              setInfinite(false);
            }
          } else {
            console.error('Resposta não é um array ou é null:', json);
            setInfinite(false);
          }
        } else {
          console.error('Erro na resposta do servidor:', response);
        }
      } catch (error) {
        console.error('Erro ao buscar fotos:', error);
        setInfinite(false); // Desativar infinite scroll em caso de erro
      }
    }
    fetchPhotos();
  }, [request, user, page, setInfinite]);

  if (error) return <Error error={error} />;
  if (loading) return <Loading />;
  if (data && Array.isArray(data) && data.length > 0)
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
  else return null; // Retorna null caso não haja dados ou data não seja um array
};

export default FeedPhotos;
