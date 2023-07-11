import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import languages from './languages.json'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    {
      name: 'update-netlify-cms-code-block',
      transform(src, id) {
        if (
          /\.vite\/deps\/netlify-cms-app\.js/.test(id)||
          /netlify-cms-app\/dist\/netlify-cms-app\.js/.test(id)
        ) {
          return {
            code: src.replace(/\=\s*\[\s*{\s*label:\s*"AGS Script"/, `=${JSON.stringify(languages)}, _sdsd=[{label:"AGS Script"`),
            map: null,
          }
        }
      },
    }
  ],
  server: {
    port: 1234
  }
})
