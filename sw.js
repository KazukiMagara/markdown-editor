self.addEventListener('ServiceWorker install:', (event) => {
    console.log('ServiceWorker install:', event)
})

self.addEventListener('activate', (event) => {
    console.log('ServiceWorker activate:', event)
})