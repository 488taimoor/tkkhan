'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"flutter_bootstrap.js": "9edc0ba4f23eeca63631e81358bb562f",
"version.json": "cc132570d6d238130e38adc59e1f998d",
"index.html": "8185a4dd84c5ebdb4cecbf82a3821c78",
"/": "8185a4dd84c5ebdb4cecbf82a3821c78",
"main.dart.js": "0efcb94d107b4cfa6563df635754d71e",
"flutter.js": "76f08d47ff9f5715220992f993002504",
"favicon.png": "8f36f22720d1068b8ce11d43eb79bef3",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/image.png": "49e3124df6d02c438709ac860902d5ed",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "afbad595473125d9919e55440bb9d114",
"assets/AssetManifest.json": "dd02a8c3c0cdf4b8cef322d7319787d3",
"assets/NOTICES": "e5ff418ffbe439e4e98d193ab0914507",
"assets/FontManifest.json": "3d0c2dc2c3fc0d163ac3d47efd15c262",
"assets/AssetManifest.bin.json": "0e2cd86059ed7b606ef0ca0dd6ce1b2d",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "33b7d9392238c04c131b6ce224e13711",
"assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "a2eb084b706ab40c90610942d98886ec",
"assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.ttf": "3ca5dc7621921b901d513cc1ce23788c",
"assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "4769f3245a24c1fa9965f113ea85ec2a",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/AssetManifest.bin": "3b9690a6f16219070e516134f2d4b51b",
"assets/fonts/MaterialIcons-Regular.otf": "4f45c779d1489cb2b2b72683a802a870",
"assets/assets/images/work_showcase/web/web_4.jpg": "dff93cede4d127930a36523542f1de7b",
"assets/assets/images/work_showcase/web/web_5.jpg": "5cb2e629443e4622d252bb1df4cdb7d1",
"assets/assets/images/work_showcase/web/web_7.jpg": "b2cd1c1126be08750649c22e8be0adbc",
"assets/assets/images/work_showcase/web/web_6.jpg": "b8e6ff7558545cf1d746b96d4eb91240",
"assets/assets/images/work_showcase/web/web_2.jpg": "a62e07ed337f48550318a46b210a4d07",
"assets/assets/images/work_showcase/web/web_3.jpg": "3d292173dad88ddf6c8e85135e6303dc",
"assets/assets/images/work_showcase/web/web_1.png": "a7d2ecba38b850aac6e316028c857b77",
"assets/assets/images/work_showcase/web/web_8.jpg": "df1c3b5ba8dc1ecc9773ba139c61ade8",
"assets/assets/images/work_showcase/fresh_cut/freshcut_2.png": "377b67a4f3e564bb02417b6ad1b8d831",
"assets/assets/images/work_showcase/fresh_cut/freshcut_3.png": "4ce3a695cefa53ec700aa3d08ddc61e5",
"assets/assets/images/work_showcase/fresh_cut/freshcut_1.jpg": "d912ef839cb700df38fdbda76d3f7a2a",
"assets/assets/images/work_showcase/fresh_cut/freshcut_4.jpg": "cb97ae0c990afae8ec74ca8719a5f849",
"assets/assets/images/work_showcase/fresh_cut/freshcut_5.jpg": "24f68a17a44b0f03fb9d46134c0ed166",
"assets/assets/images/work_showcase/fresh_cut/freshcut_7.jpg": "fb8b1f180acec08bbc5abe111f35c01d",
"assets/assets/images/work_showcase/fresh_cut/freshcut_6.png": "5e29732281031969316546b89a8c687e",
"assets/assets/images/work_showcase/fresh_cut/freshcut_8.jpg": "c7886f078aafbbf43d3ea6261be4f7b7",
"assets/assets/images/work_showcase/idexx/idexx_2.png": "6cc303f7187b1797d69c6c131e37a45b",
"assets/assets/images/work_showcase/idexx/idexx_3.png": "a30d06150f398678d20d839ceec9590a",
"assets/assets/images/work_showcase/idexx/idexx_1.png": "2a42843f0715d14071f6c9ac654a57a8",
"assets/assets/images/work_showcase/idexx/idexx_4.png": "9e8e11db569834b9382dd04d6e0bdbc7",
"assets/assets/images/work_showcase/idexx/idexx_5.png": "5993a5f14adaeba24932e2322501d543",
"assets/assets/images/work_showcase/locals/locals_6.PNG": "78014a4fe084faf92968352d46490c18",
"assets/assets/images/work_showcase/locals/locals_7.PNG": "ac1f11b9d81988602333ad7296120d23",
"assets/assets/images/work_showcase/locals/locals_5.PNG": "b5db8971de2249144eae7fa225481021",
"assets/assets/images/work_showcase/locals/locals_4.PNG": "73acdffc94ed4e36d1ce4c9ed7ef5d6d",
"assets/assets/images/work_showcase/locals/locals_pre_1.png": "0d3277c096d6b89f4ea6d663d840277e",
"assets/assets/images/work_showcase/locals/locals_1.PNG": "189047babb940c52c055781595ffe50d",
"assets/assets/images/work_showcase/locals/locals_3.PNG": "9bdc41eaba78912f1c24d8d42a5b641b",
"assets/assets/images/work_showcase/locals/locals_pre_2.png": "dcb8cf5294368c4a1701c33bb9bcfd0a",
"assets/assets/images/work_showcase/locals/locals_2.PNG": "d48389124becd48399d3a49b06131c8e",
"assets/assets/images/work_showcase/locals/locals_9.PNG": "ff63125b13c9a38e04f6ece977055a4e",
"assets/assets/images/work_showcase/locals/locals_10.PNG": "dd472394fb0e53efd9a50efa253cf80b",
"assets/assets/images/work_showcase/locals/locals_8.PNG": "38a664b1c50ab3d9696f18ce0e427c7b",
"assets/assets/images/work_showcase/pluto_tv/pluto_6.png": "2ba6b465142116c07b3dae859ea2ee0d",
"assets/assets/images/work_showcase/pluto_tv/pluto_5.png": "8e4e31b32e1dc9b7b499855bce76b2cf",
"assets/assets/images/work_showcase/pluto_tv/pluto_4.png": "7060435d1475dca1053757cd68769fd1",
"assets/assets/images/work_showcase/pluto_tv/pluto_1.png": "c5cd79f247d041e2d5351408b6e1416b",
"assets/assets/images/work_showcase/pluto_tv/pluto_3.png": "638719f53414695f08f320a88a5ad793",
"assets/assets/images/work_showcase/pluto_tv/pluto_2.png": "6759f9f6897364ad5b24f44dd7558785",
"assets/assets/images/profile_photo_taimoor.jpeg": "86993b720456380d5753dfad026ead06",
"assets/assets/images/profile_photo.jpeg": "e99de5721eef3d335c457fd228ecc5d4",
"assets/assets/images/icons/github.svg": "1bb027109345a90a9eab1e929d8669c2",
"assets/assets/images/icons/X_icon.svg": "d2124694c288f2957bd276c46a010f94",
"assets/assets/images/icons/linkedIn.svg": "5b238434e2862c877f08572b96c0ef7b",
"assets/assets/cv/cv.pdf": "e29c33350750b9b76985bcf371f03593",
"assets/assets/fonts/Poppins-ExtraLight.ttf": "6f8391bbdaeaa540388796c858dfd8ca",
"assets/assets/fonts/Poppins-ThinItalic.ttf": "01555d25092b213d2ea3a982123722c9",
"assets/assets/fonts/Poppins-ExtraLightItalic.ttf": "a9bed017984a258097841902b696a7a6",
"assets/assets/fonts/Poppins-BoldItalic.ttf": "19406f767addf00d2ea82cdc9ab104ce",
"assets/assets/fonts/Poppins-Light.ttf": "fcc40ae9a542d001971e53eaed948410",
"assets/assets/fonts/Poppins-Medium.ttf": "bf59c687bc6d3a70204d3944082c5cc0",
"assets/assets/fonts/Poppins-SemiBoldItalic.ttf": "9841f3d906521f7479a5ba70612aa8c8",
"assets/assets/fonts/Poppins-ExtraBoldItalic.ttf": "8afe4dc13b83b66fec0ea671419954cc",
"assets/assets/fonts/Poppins-ExtraBold.ttf": "d45bdbc2d4a98c1ecb17821a1dbbd3a4",
"assets/assets/fonts/Poppins-BlackItalic.ttf": "e9c5c588e39d0765d30bcd6594734102",
"assets/assets/fonts/Poppins-Regular.ttf": "093ee89be9ede30383f39a899c485a82",
"assets/assets/fonts/Poppins-LightItalic.ttf": "0613c488cf7911af70db821bdd05dfc4",
"assets/assets/fonts/Poppins-Bold.ttf": "08c20a487911694291bd8c5de41315ad",
"assets/assets/fonts/Poppins-Black.ttf": "14d00dab1f6802e787183ecab5cce85e",
"assets/assets/fonts/Poppins-Thin.ttf": "9ec263601ee3fcd71763941207c9ad0d",
"assets/assets/fonts/Poppins-SemiBold.ttf": "6f1520d107205975713ba09df778f93f",
"assets/assets/fonts/Poppins-MediumItalic.ttf": "cf5ba39d9ac24652e25df8c291121506",
"canvaskit/skwasm_st.js": "d1326ceef381ad382ab492ba5d96f04d",
"canvaskit/skwasm.js": "f2ad9363618c5f62e813740099a80e63",
"canvaskit/skwasm.js.symbols": "80806576fa1056b43dd6d0b445b4b6f7",
"canvaskit/canvaskit.js.symbols": "68eb703b9a609baef8ee0e413b442f33",
"canvaskit/skwasm.wasm": "f0dfd99007f989368db17c9abeed5a49",
"canvaskit/chromium/canvaskit.js.symbols": "5a23598a2a8efd18ec3b60de5d28af8f",
"canvaskit/chromium/canvaskit.js": "34beda9f39eb7d992d46125ca868dc61",
"canvaskit/chromium/canvaskit.wasm": "64a386c87532ae52ae041d18a32a3635",
"canvaskit/skwasm_st.js.symbols": "c7e7aac7cd8b612defd62b43e3050bdd",
"canvaskit/canvaskit.js": "86e461cf471c1640fd2b461ece4589df",
"canvaskit/canvaskit.wasm": "efeeba7dcc952dae57870d4df3111fad",
"canvaskit/skwasm_st.wasm": "56c3973560dfcbf28ce47cebe40f3206",
"canvaskit/skwasm.worker.js": "89990e8c92bcb123999aa81f7e203b1c"};
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
