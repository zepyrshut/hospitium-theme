import { resolve } from 'path';
import handlebars from 'vite-plugin-handlebars';

export default {
  server: {
    open: "index.html",
  },
  root: "src",
  build: {
    outDir: "../dist",
  },
  resolve: {
    alias: {"/src": resolve(__dirname, "src")},
  },
  plugins: [handlebars({
    partialDirectory: resolve(__dirname, 'src/partials'),
  })],
};