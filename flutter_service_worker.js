'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "80f094cbbdc70fbec42a8fbf5a19173b",
"assets/AssetManifest.bin.json": "b155b453228c63468537c0b23447b53d",
"assets/assets/abandon.mp3": "9c33a04c04163144baf18dc96be1eec9",
"assets/assets/abandon.png": "6c0047477e332fd0360b77228e0964ca",
"assets/assets/abandonment.mp3": "f95693327f6e5f03e56e14066d06a6b5",
"assets/assets/ability.mp3": "5c1a09f2201dcf67882f0a254b0e3932",
"assets/assets/ability.png": "ad667359907e220a45c9f83aed88634e",
"assets/assets/able.mp3": "280f77cf7e1c759ac70d2610f2aaa2e7",
"assets/assets/able.png": "fe93f79cceb7b0266212c59ca1c32681",
"assets/assets/aboard.mp3": "f54c9919329a6ebacded89fd2f42a8b6",
"assets/assets/aboard.png": "9e886216b44194aeeafc7ec71d79ad28",
"assets/assets/abounding.mp3": "6dd8c7d692b1a79a99b7c40af01c10a9",
"assets/assets/abounding.png": "6b735817cac78922ec0d579ff0cab566",
"assets/assets/about.mp3": "c777ed9fe653cae1b93a2df084fe14bd",
"assets/assets/about.png": "2e0e12fcd3ffd2dc1125f3d2deb4f591",
"assets/assets/above.jpg": "5a3b0540dcab2f92f4cf01db478944b9",
"assets/assets/above.mp3": "a41f37d67bc3d9a37e59af3edbd328d9",
"assets/assets/above.png": "dda58484ca583fa593154c49fab2f8ca",
"assets/assets/abroad.mp3": "74a1e1f1ebd65fee9c5d49ba01f4d5a6",
"assets/assets/abroad.png": "c3ced2a78b5d74df817ccb0f8c0f781d",
"assets/assets/absent.jpg": "0e3eba46f861c2bb92ed13f46d95e119",
"assets/assets/absent.mp3": "90b37c11b343f7fb46af646b9b029407",
"assets/assets/absent.png": "3e424e35c484f09728d2544f54baddd7",
"assets/assets/absorb.jpg": "15a5909ef0f600d486cc72864e4a6922",
"assets/assets/absorb.mp3": "ea822877c0efa62884d71cdd816edf0d",
"assets/assets/absorb.png": "f2d9d7d4b4fa98517285f6fc0a947fc3",
"assets/assets/accent.jpg": "a7c3536cc7cf044b0cb068be1f41b74f",
"assets/assets/accent.mp3": "c9f41bd776145a3f34e7079e4139328a",
"assets/assets/accent.png": "88385dde1d22dab6b77fc25cb8286f8f",
"assets/assets/accept.jpg": "0b8831ac3c32217f26136f9922db79fd",
"assets/assets/accept.mp3": "ba9a578b0dd968a47eda60adb323d6e0",
"assets/assets/accept.png": "c29fa81d79105d9bc0dd8283f651f61b",
"assets/assets/acceptant.mp3": "d72999c8fd2086beefe7e715370632a5",
"assets/assets/acceptant.png": "3374a4b9e1daa052703c155283185dc1",
"assets/assets/accident.mp3": "84bed3e66904b5fc1e824b3d6b491af6",
"assets/assets/accident.png": "f0006e1b9529c30265cd607cc35bc823",
"assets/assets/accord.mp3": "6b6a16dfb0949e4a0169368dac7c6367",
"assets/assets/accord.png": "c4c5e54b981be95d6a4a815055b08263",
"assets/assets/account.mp3": "b8a857b117e99341b6c34ef7ff1a59cc",
"assets/assets/account.png": "8c36c0e8c39078491a67e2c7507df9ae",
"assets/assets/accountant.mp3": "4cb760fa2f650c27b24439b04e131b8e",
"assets/assets/accountant.png": "50a5e934543b6991fb641a4b49c25ef1",
"assets/assets/accurate.png": "8fb779132d915ea15a5976545604c383",
"assets/assets/accuse.png": "e90db5cde9d3ec896aa5b3bcb0713ad9",
"assets/assets/ache.png": "b2e061a895d92ce73d6309120cb9dc04",
"assets/assets/achieve.png": "45d3a0e9c4ced470834a29beb1eb1cb4",
"assets/assets/achievement.png": "e81f1dbcc37e4e4d7e2e9a1fd5cdd124",
"assets/assets/across.png": "499b371d90565ebf647d6597a66aee88",
"assets/assets/act.png": "f3b315f2db7a3f78fb74abcf0eb976a7",
"assets/assets/action.png": "01ac4cad4ed69fbdea16715819063e7f",
"assets/assets/active.png": "35f7ee87ef588699d4f4280e6a511ca7",
"assets/assets/activity.png": "6c5ef81be83b6680a0bd944897693bb5",
"assets/assets/actor.png": "462611d97520b9f29de48d5fd8f4f315",
"assets/assets/actress.png": "52081518e55af3fff7946d47213de993",
"assets/assets/actual.jpg": "5786fa227cd6892ec226af793f723417",
"assets/assets/actual.png": "02663bdddab4347e0bd776e6ce0681a3",
"assets/assets/actually.png": "a9a8978bd9f4fa5bf22841598f414dca",
"assets/assets/adapt.png": "94364493d68b0035a8459dd3c6835837",
"assets/assets/add.png": "443c08859eede2746aded3a9058a1403",
"assets/assets/address.png": "c58a11dba4c7702415898eec1653b0cd",
"assets/assets/admire.png": "4110afa0b65212780076b2ee7d7f33a2",
"assets/assets/admit.png": "aacbdb98369bdb1b3a9d56ca89ef5bcd",
"assets/assets/adopt.png": "ce51703bb482ca357c047aebadc4db43",
"assets/assets/advance.png": "57acb30b28adfb3f855409d32442007d",
"assets/assets/advantage.png": "4a2a0389bffeb5a27019f92abe191172",
"assets/assets/advertise.png": "112252543535fa872408d8af6b3b3701",
"assets/assets/advertisement.png": "2d41d819237d39e4e673e23b4a1ffec6",
"assets/assets/advice.png": "ae6f53709eecf610ac825d89dabcad84",
"assets/assets/advise.png": "a03c4402ecab089075a770a9709727fe",
"assets/assets/affair.png": "1a3baee6e4bc04082eb0b15c09d6c631",
"assets/assets/affect.png": "b5aae97f6b9bd5a79db64face41fed1a",
"assets/assets/after.png": "8b84e1ae34b7b8be6a3feddd1c14a787",
"assets/assets/again.png": "122de7b587578da676379491490cd3e5",
"assets/assets/against.png": "7f8b83d0f74618c0db16f943fbec3696",
"assets/assets/age.png": "700ce1b30683ba87a743f9cc082cc44f",
"assets/assets/ago.mp3": "55ba13d087b4b98a2312f65c61412c91",
"assets/assets/ago.png": "64b7bb53b3ed828369e05cd804feeeb2",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "c5e8ee2615e7e277f96d329a9fd63ad9",
"assets/NOTICES": "3334cce99b8b639e763a1e16d85757ee",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "94702b3a591e6e2586a9f5265096a09f",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/shaders/stretch_effect.frag": "40d68efbbf360632f614c731219e95f0",
"canvaskit/canvaskit.js": "8331fe38e66b3a898c4f37648aaf7ee2",
"canvaskit/canvaskit.js.symbols": "a3c9f77715b642d0437d9c275caba91e",
"canvaskit/canvaskit.wasm": "9b6a7830bf26959b200594729d73538e",
"canvaskit/chromium/canvaskit.js": "a80c765aaa8af8645c9fb1aae53f9abf",
"canvaskit/chromium/canvaskit.js.symbols": "e2d09f0e434bc118bf67dae526737d07",
"canvaskit/chromium/canvaskit.wasm": "a726e3f75a84fcdf495a15817c63a35d",
"canvaskit/skwasm.js": "8060d46e9a4901ca9991edd3a26be4f0",
"canvaskit/skwasm.js.symbols": "3a4aadf4e8141f284bd524976b1d6bdc",
"canvaskit/skwasm.wasm": "7e5f3afdd3b0747a1fd4517cea239898",
"canvaskit/skwasm_heavy.js": "740d43a6b8240ef9e23eed8c48840da4",
"canvaskit/skwasm_heavy.js.symbols": "0755b4fb399918388d71b59ad390b055",
"canvaskit/skwasm_heavy.wasm": "b0be7910760d205ea4e011458df6ee01",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "24bc71911b75b5f8135c949e27a2984e",
"flutter_bootstrap.js": "b352c4b35d7f500d892224bfe64b9660",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "c2a9da4570e74ec7241464a550e848be",
"/": "c2a9da4570e74ec7241464a550e848be",
"main.dart.js": "6c2b76d81c364ef62f557dd63cf72ed5",
"manifest.json": "f81443f23157d0bc8cb251cbba341dd2",
"version.json": "a07adc18a04206628be18ccef5475683"};
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
