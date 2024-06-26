// import React from 'react';

// const PhotoPost = () => {
//   const [token, setToken] = React.useState('');
//   const [nome_time, setNome_time] = React.useState('');
//   const [bairro, setBairro] = React.useState('');
//   const [img, setImg] = React.useState('');

//   function handleSubmit(event) {
//     event.preventDefault();

//     const formData = new FormData();
//     formData.append('img', img);
//     formData.append('nome_time', nome_time);
//     formData.append('bairro', bairro);
//     fetch('http://localhost:10010/json/api/photo', {
//       method: 'POST',
//       headers: {
//         Authorization: 'Bearer ' + token,
//       },
//       body: formData,
//     })
//       .then((response) => {
//         console.log(response);
//         return response.json();
//       })
//       .then((json) => {
//         console.log(json);
//         return json;
//       });
//   }

//   return (
//     <form onSubmit={handleSubmit}>
//       <input
//         type="text"
//         placeholder="token"
//         value={token}
//         onChange={({ target }) => setToken(target.value)}
//       />

//       <input
//         type="text"
//         placeholder="username"
//         value={nome_time}
//         onChange={({ target }) => setNome_time(target.value)}
//       />

//       <input
//         type="text"
//         placeholder="bairro"
//         value={bairro}
//         onChange={({ target }) => setBairro(target.value)}
//       />

//       <input type="file" onChange={({ target }) => setImg(target.files[0])} />

//       <button>Enviar</button>
//     </form>
//   );
// };

// export default PhotoPost;
