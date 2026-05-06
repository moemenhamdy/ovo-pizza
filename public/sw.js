self.addEventListener('install', (event) => {
  self.skipWaiting();
});

self.addEventListener('activate', (event) => {
  event.waitUntil(self.clients.claim());
});

self.addEventListener('fetch', (event) => {
  // A dummy fetch handler is required by Chrome to trigger the "Add to Home Screen" install prompt.
  // We fall back to the network for all requests to ensure Next.js functions normally.
  event.respondWith(
    fetch(event.request).catch(() => {
      return new Response("Network error occurred.");
    })
  );
});
