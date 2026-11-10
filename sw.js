self.addEventListener('install', (event) => {
  self.skipWaiting();
});

self.addEventListener('activate', (event) => {
  event.waitUntil(self.clients.claim());
});

self.addEventListener('fetch', (event) => {
  // Nem tárolunk semmit a memóriában, mindent élőben a hálózatról kérünk le
  event.respondWith(fetch(event.request));
});
