import { MetadataRoute } from 'next';

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'OVO Pizza',
    short_name: 'OVO Pizza',
    description: 'أفضل بيتزا في كفر الشيخ — IN CRUST WE TRUST 🍕💚',
    start_url: '/',
    display: 'standalone',
    background_color: '#0D1A0B',
    theme_color: '#1A3E16',
    icons: [
      {
        src: '/ovo_logo.png',
        sizes: '192x192',
        type: 'image/png',
        purpose: 'maskable',
      },
      {
        src: '/ovo_logo.png',
        sizes: '512x512',
        type: 'image/png',
        purpose: 'maskable',
      },
    ],
  };
}
