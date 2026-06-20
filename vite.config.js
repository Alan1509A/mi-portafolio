import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { VitePWA } from 'vite-plugin-pwa'

export default defineConfig({
  plugins: [
    react(),
    VitePWA({
      registerType: 'autoUpdate',
      devOptions: {
        enabled: true // Esto permite probar la PWA mientras programamos
      },
      manifest: {
        name: 'Portafolio Alan Eduardo',
        short_name: 'EstudianteCS',
        description: 'Portafolio, apuntes y blog de Ciencias de la Informática',
        theme_color: '#030712', // El color oscuro de tu fondo
        background_color: '#030712',
        display: 'standalone', // "standalone" esconde la barra del navegador para que parezca app nativa
        icons: [
          {
            src: '/pwa-192x192.png',
            sizes: '192x192',
            type: 'image/png'
          },
          {
            src: '/pwa-512x512.png',
            sizes: '512x512',
            type: 'image/png'
          }
        ]
      }
    })
  ]
})