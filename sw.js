self.addEventListener('install', (event) => {
  console.log('Service Worker instalado!');
});

self.addEventListener('fetch', (event) => {
  // Aqui configuraremos o funcionamento offline no futuro
});