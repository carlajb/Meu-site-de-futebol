//---------------------------------------------------
// import { defineConfig } from 'vite';
// import react from '@vitejs/plugin-react';
// import eslintPlugin from 'vite-plugin-eslint';
// import svgr from 'vite-plugin-svgr';

// export default defineConfig({
//   plugins: [
//     react(),
//     eslintPlugin({
//       cache: false,
//       include: ['./src/**/*.js', './src/**/*.jsx'],
//     }),
//     svgr(),
//   ],
//   server: {
//     port: 3000, // Porta fixa
//     host: 'goldesalto', // Nome fixo
//   },
// });

//-----------------------------------------------------
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import eslintPlugin from 'vite-plugin-eslint';
import svgr from 'vite-plugin-svgr';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    eslintPlugin({
      cache: false,
      include: ['./src/**/*.js', './src/**/*.jsx'],
    }),
    svgr(),
  ],
});
