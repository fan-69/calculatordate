'use strict';
importScripts('sw-toolbox.js');
toolbox.precache(['index.html','may.css']);
toolbox.router.get('/js/images/*', toolbox.cacheFirst);
toolbox.router.get('/*', toolbox.networkFirst, {
networkTimeoutSeconds: 5});