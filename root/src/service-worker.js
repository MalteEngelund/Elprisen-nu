const dynamicCacheName = 'dynamic-cache-v1';
const assetsToCache = [
	'/',
	'./manifest.webmanifest', // vite konverterer til dette filnavn når man builder

	// Add more assets as needed
];


self.addEventListener('install', event => {
	console.log('Service Worker has been installed');
})


self.addEventListener('activate', event => {
	event.waitUntil(
		Promise.all([
			// Pre-cache core assets
			caches.open(dynamicCacheName).then(cache => cache.addAll(assetsToCache)),
			// Delete old caches
			caches.keys().then(keys => {
				return Promise.all(
					keys.filter(key => key !== dynamicCacheName).map(key => caches.delete(key))
				);
			})
		])
	);
	self.clients.claim();
});



self.addEventListener('fetch', event => {
	// Kontroller svar på request
	event.respondWith(
		// Kig efter file match i cache 
		caches.match(event.request).then(cacheRes => {
			// Returner match fra cache - ellers hent fil på server
			return cacheRes || fetch(event.request).then(fetchRes => {
				// Tilføjer nye sider til cachen
				return caches.open(dynamicCacheName).then(cache => {
					// Bruger put til at tilføje sider til vores cache
					// Læg mærke til metoden clone
					cache.put(event.request.url, fetchRes.clone())
					// Returnerer fetch request
					return fetchRes
				})
			})
		})
	)
})