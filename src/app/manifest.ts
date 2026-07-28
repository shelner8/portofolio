import { MetadataRoute } from 'next'

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Shelnerio Portfolio',
    short_name: 'SHLNR',
    description: 'Data Center & Enterprise Network Engineer',
    start_url: '/',
    display: 'standalone',
    background_color: '#0B1220',
    theme_color: '#0B1220',
    icons: [
      {
        src: '/icon',
        sizes: '32x32',
        type: 'image/png',
      },
      {
        src: '/apple-icon',
        sizes: '180x180',
        type: 'image/png',
      }
    ],
  }
}
