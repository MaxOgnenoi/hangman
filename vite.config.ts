// vite.config.js
import react from '@vitejs/plugin-react';

export default {
  plugins: [react()],
  build: {
    outDir: 'build',
    assetsDir: '.', // Set the assets directory to the current directory
    publicDir: '/public/', // Set the public directory to '/public/'
  },
};
