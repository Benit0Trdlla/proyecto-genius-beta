// self.addEventListener('install', function (event) {
//     event.waitUntil(
//         caches.open('datos-google-sheets').then(function (cache) {
//             return cache.addAll([
//                 // Agrega las URLs de las solicitudes que se desea almacenar en caché
//                 'https://docs.google.com/spreadsheets/d/e/2PACX-1vSuLH4t-YFmRI5phxbxvBEo9uRQaRP-P70Kpoa3PT7ZwRPWmiJdEwduLz5bKkSBWxGQV2ynDHHWIpYJ/pub?output=csv',
//                 'https://docs.google.com/spreadsheets/d/e/2PACX-1vRv0ynO2c7TTuc-UWoCZqg0RqEht5Ep660w8JwTDL9WZLT9mCKpdCE_ihgKhNsEqD8mRRHMX8sO1vVr/pub?output=csv',
//                 // '/icons/',
//                 // '/icons/locked.png',
//                 // '/icons/unlocked.webp',
//                 // '/icons/wifi-off.svg',
//                 // '/Images/',
//                 // '/Images/Matemática.png',
//                 // '/Images/Lengua.png',
//                 // '/Images/Sociales.png',
//                 // '/Images/Naturales.png',
//                 // '/Images/Ingles.png',
//                 // '/Images/Home.png',
//                 // '/Images/Preguntas.png',
//                 // '/Images/Donanaciones.png',
//                 // '/Images/Login.png',
//                 // '/Images/Logo/',
//                 // '/Images/Logo/Nav.png',
//                 // '/Images/Logo/Footer.png',
//                 // '/Images/Logo/Pestaña.png',
//             ]);
//         })
//     );
// });

// // self.addEventListener('activate', function (event) {
// //     event.waitUntil(
// //         caches.keys().then(function (cacheNames) {
// //             return Promise.all(
// //                 cacheNames.filter(function (cacheName) {
// //                     return cacheName !== 'datos-google-sheets';
// //                 }).map(function (cacheName) {
// //                     return caches.delete(cacheName);
// //                 })
// //             );
// //         })
// //     );
// // });

// self.addEventListener('fetch', function (event) {
//     // event.respondWith(
//     //     caches.match(event.request).then(function (response) {
//     //         if (response) {
//     //             return response;
//     //         } else {
//     //             return fetchAndCache(event);
//     //         }
//     //     })
//     // );
//     console.log('URL solicitada:', event.request.url); // Imprime la URL solicitada
//     event.respondWith(
//         caches.match(event.request).then(function(response) {
//             if (response) {
//                 return response;
//             } else {
//                 return fetchAndCache(event);
//             }
//         })
//     );
// });

// // Obtiene la respuesta de la red y almacena en caché la respuesta más reciente
// function fetchAndCache(event) {
//     return fetch(event.request)
//         .then(function (response) {
//             // Almacena la respuesta en caché
//             return caches.open('datos-google-sheets').then(function (cache) {
//                 cache.put(event.request, response.clone());
//                 return response;
//             });
//         })
//         .catch(function (error) {
//             // Si hay un error al obtener la respuesta de la red, devuelve la respuesta en caché si está disponible
//             return caches.match(event.request).then(function (response) {
//                 if (response) {
//                     return response;
//                 } else {
//                     throw error;
//                 }
//             });
//         });
// }


// En tu archivo de service worker, puedes configurar los eventos install, activate y fetch de la siguiente manera:
// Evento install: se dispara cuando se instala el service worker
self.addEventListener('install', function (event) {
    console.log('Service Worker instalado');
    event.waitUntil(
        caches.open('static-v1').then(function (cache) {
            return cache.addAll([
                '/Images/Logo/Pestaña.png',
                '/Images/Logo/Nav.png',
                '/Images/Logo/Footer.png',
                '/Images/Home.png',
                '/Images/Donaciones.png',
                // Añade aquí más archivos estáticos que desees precargar
            ]);
        })
    );
});

// Evento activate: se dispara cuando el service worker toma el control
self.addEventListener('activate', function (event) {
    console.log('Service Worker activado');
});

// Evento fetch: se dispara cada vez que una solicitud de red es realizada
self.addEventListener('fetch', function (event) {
    console.log('Se ha realizado una solicitud de red');
});
