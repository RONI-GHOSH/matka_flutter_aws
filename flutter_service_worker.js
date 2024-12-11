'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "0c7ebf86fd342bc17ffc209617a99b3c",
"assets/AssetManifest.bin.json": "6d790e4d90855b77b8c1ac31cc04f3be",
"assets/AssetManifest.json": "6401cda2785b0d2d454a5ba3e0d0b450",
"assets/assets/calender.svg": "13fec82afca94929f95b90501d84ec29",
"assets/assets/chart_icon.png": "c88a5852061a76849c46d85a93b702b5",
"assets/assets/crossing.png": "833dbb9117e6e1bd507d629fc747e0a8",
"assets/assets/download-app.png": "6c05682849ef8413a029e92c80122a6b",
"assets/assets/download-app.svg": "5af2fc847c26cc27ef4347a56f6f3acc",
"assets/assets/drawer_icons/icon_wallet.png": "2683ad9fd4dbb6eb450cc3bd35b288d1",
"assets/assets/drawer_icons/ic_bank.png": "87e1dc5f4269613759e7014b953b7bac",
"assets/assets/drawer_icons/ic_history.png": "d6b4e69673a9ca776e0afea69176d2bc",
"assets/assets/drawer_icons/ic_home.png": "85ec0d5fa8d6e065437ecd60fadd12ae",
"assets/assets/drawer_icons/ic_logout.png": "c9d8ebb95411882fffeacf3575f15ba7",
"assets/assets/drawer_icons/ic_padlock.png": "c4f2f6a6d15626fd53d023505289b30d",
"assets/assets/drawer_icons/ic_payment_method.png": "f5e06ab66d776047a994923f7ed8419e",
"assets/assets/drawer_icons/ic_rating.png": "d3bd1fcb66e78e6c3f3da04ed8d15f08",
"assets/assets/drawer_icons/ic_rupees.png": "89e72c668ae0a2da93db4919a184926f",
"assets/assets/drawer_icons/ic_share.png": "a18a4b75b96da996397e8fb3edb44335",
"assets/assets/drawer_icons/transfer_icon.png": "0bb22f1b5f8fb5a2db796123e9f310de",
"assets/assets/drawer_icons/withdraw_icon.png": "ca76798e36d6a5fc7e36f083691069b3",
"assets/assets/googlepay.png": "b517ce0bbf3a76405bc9d8e7ad004e2b",
"assets/assets/logo/logo.png": "7ad9159914ad1f4d646f1d126ffffd0b",
"assets/assets/paytm.png": "6b07c1259a8675a299d253b7c2090232",
"assets/assets/phonepe.png": "c883d005a9d4d10fa54919f8bdb81081",
"assets/assets/play.png": "cc8d45d7868a34c5a9d6e89cefa43f86",
"assets/assets/qr_code.jpg": "d809052dd3c2a2310d7189e379a980fc",
"assets/assets/upi.png": "ce4be013ceae5dc3ee1d9e28c98496f0",
"assets/assets/wf.png": "1aaa20990b98be1c5edd37dded24da30",
"assets/assets/whatsapp.svg": "0489f8e8d29c22d46303ca23d891ffdc",
"assets/FontManifest.json": "5a32d4310a6f5d9a6b651e75ba0d7372",
"assets/fonts/MaterialIcons-Regular.otf": "374de3ef753b560d40e175e8177dd437",
"assets/NOTICES": "bd6b3938954fda590025387fed311db2",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "e986ebe42ef785b27164c36a9abc7818",
"assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "00a0d5a58ed34a52b40eb372392a8b98",
"assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.ttf": "3ca5dc7621921b901d513cc1ce23788c",
"assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "799069d7f53fdefa33fb78fbe7239f30",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "26eef3024dbc64886b7f48e1b6fb05cf",
"canvaskit/canvaskit.js.symbols": "efc2cd87d1ff6c586b7d4c7083063a40",
"canvaskit/canvaskit.wasm": "e7602c687313cfac5f495c5eac2fb324",
"canvaskit/chromium/canvaskit.js": "b7ba6d908089f706772b2007c37e6da4",
"canvaskit/chromium/canvaskit.js.symbols": "e115ddcfad5f5b98a90e389433606502",
"canvaskit/chromium/canvaskit.wasm": "ea5ab288728f7200f398f60089048b48",
"canvaskit/skwasm.js": "ac0f73826b925320a1e9b0d3fd7da61c",
"canvaskit/skwasm.js.symbols": "96263e00e3c9bd9cd878ead867c04f3c",
"canvaskit/skwasm.wasm": "828c26a0b1cc8eb1adacbdd0c5e8bcfa",
"canvaskit/skwasm.worker.js": "89990e8c92bcb123999aa81f7e203b1c",
"favicon.png": "c2b4478c14ec7a5f98bb9f5038b77b28",
"flutter.js": "4b2350e14c6650ba82871f60906437ea",
"flutter_bootstrap.js": "ce326de4f0c9b209da618080fb3e8bc7",
"icons/icon-192.png": "a940ccc1173008219517648d4b0f98a0",
"icons/icon-512.png": "3e781bba5782dba9ef5652cd6617dbec",
"icons/icon-maskable-192.png": "5060dbb2b34d2b4c9d8db8212a90c64e",
"icons/icon-maskable-512.png": "e22b99e4797a4c9ac8913069c5ed5fcc",
"icons/logo.png": "3e781bba5782dba9ef5652cd6617dbec",
"index.html": "1bdbeb3b31cc556dba74e827b8cb3c87",
"/": "1bdbeb3b31cc556dba74e827b8cb3c87",
"main.dart.js": "1e9aaa870bc434e3d44eda34ee0082bb",
"manifest.json": "5be203325cd21a3c96caa9edf24c06b0",
"version.json": "e51ec9f51ee927b01fe420b78bc7ce4a"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
