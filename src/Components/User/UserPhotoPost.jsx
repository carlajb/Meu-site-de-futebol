import React from 'react';
import styles from './UserPhotoPost.module.css';
import useForm from '../../Hooks/useForm';
import useFetch from '../../Hooks/useFetch';
import Input from '../Forms/Input';
import Button from '../Forms/Button';
import Error from '../Helper/Error';
import { PHOTO_POST } from '../../api';
import { useNavigate } from 'react-router-dom';
import Head from '../Helper/Head';

const UserPhotoPost = () => {
  const nome_time = useForm();
  const bairro = useForm();

  const [img, setImg] = React.useState({});
  const { data, error, loading, request } = useFetch();
  const navigate = useNavigate();

  React.useEffect(() => {
    if (data) navigate('/conta');
  }, [data, navigate]);

  function handleSubmit(event) {
    event.preventDefault();

    if (!img.raw || !nome_time.value || !bairro.value) {
      console.error('Todos os campos devem ser preenchidos.');

      return;
    }

    const formData = new FormData();
    formData.append('img', img.raw);
    formData.append('nome_time', nome_time.value);
    formData.append('bairro', bairro.value);

    // Log para verificação dos dados no FormData
    for (let pair of formData.entries()) {
      console.log(pair[0] + ': ' + pair[1]);
    }

    const token = window.localStorage.getItem('token');
    const { url, options } = PHOTO_POST(formData, token);
    console.log('TOKEN', { token });
    console.log('URL:', url);
    console.log('Options:', options);
    request(url, options);
  }

  function handleImgChange({ target }) {
    setImg({
      preview: URL.createObjectURL(target.files[0]),
      raw: target.files[0],
    });
  }

  return (
    <section className={`${styles.photoPost} animeLeft`}>
      <Head title="Poste sua foto" />
      <form onSubmit={handleSubmit}>
        <Input label="Nome" type="text" name="nome" {...nome_time} />
        <Input label="Bairro" type="text" name="bairro" {...bairro} />

        <input
          className={styles.file}
          type="file"
          name="img"
          id="img"
          onChange={handleImgChange}
        />
        {loading ? (
          <Button disabled>Enviando...</Button>
        ) : (
          <Button>Enviar</Button>
        )}
        <Error error={error} />
      </form>
      <div>
        {img.preview && (
          <div
            className={styles.preview}
            style={{ backgroundImage: `url('${img.preview}')` }}
          ></div>
        )}
      </div>
    </section>
  );
};

export default UserPhotoPost;
