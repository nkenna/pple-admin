'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "main.dart.js": "3516ad8ee480c6fba188cbd2abc52993",
"index.php": "5c4fe72da4f7bd8312e412303578c2c6",
"version.json": "9a067a9846d8348d48ff1e5573410084",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"fonts/VisueltPro-Regular.ttf": "0f8cd2494eb8c5e3a33352b2dd38fd61",
"fonts/VisueltPro-Bold.ttf": "18acd33c965a455418d4204f0f334ea8",
"fonts/VisueltPro-Thin.ttf": "82d7b5b67c24f00acb08f2dccf1fd03b",
"assets/fonts/MaterialIcons-Regular.otf": "4e6447691c9509f7acdbf8a931a85ca1",
"assets/assets/fonts/VisueltPro-Regular.ttf": "0f8cd2494eb8c5e3a33352b2dd38fd61",
"assets/assets/fonts/VisueltPro-Bold.ttf": "18acd33c965a455418d4204f0f334ea8",
"assets/assets/fonts/VisueltPro-Thin.ttf": "82d7b5b67c24f00acb08f2dccf1fd03b",
"assets/assets/images/mainlogo.png": "b7dd1b054ee4517d502b15e70bc6253d",
"assets/assets/images/1.png": "de25bdad6277f1042f203ffe622d1514",
"assets/assets/images/2.png": "42898bdecef3629f60440ab3ed838eec",
"assets/assets/images/loginlogo.png": "1f21c3a086c5a5483da2b5f218bb9004",
"assets/assets/images/3.png": "61fafc89e18e98190ab2dd921c8421b4",
"assets/FontManifest.json": "e3c8ba3eac20a0c9189c93124cf20e34",
"assets/NOTICES": "0fcf33cb61dc6aa6094960beebbf717b",
"assets/AssetManifest.json": "b2789e0fc1d10a1e89eec58b9348d60d",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"manifest.json": "41a7da7530dbb2654f931155c3dd732d",
".git/COMMIT_EDITMSG": "488465167df66141ef252a86eac9cd63",
".git/refs/remotes/origin/master": "1e949ec6571e67de2e122bc42396bfa5",
".git/refs/heads/master": "1e949ec6571e67de2e122bc42396bfa5",
".git/index": "36301cd7578850c1fd189ad2f4d52d26",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/update.sample": "517f14b9239689dff8bda3022ebd9004",
".git/hooks/fsmonitor-watchman.sample": "db4d62db2039e4bec38baa7567788284",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/pre-push.sample": "3c5989301dd4b949dfa1f43738a22819",
".git/hooks/pre-commit.sample": "e4db8c12ee125a8a085907b757359ef0",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/logs/refs/remotes/origin/master": "d7543dd02d8d008d0ecb213ab954cc87",
".git/logs/refs/heads/master": "0aaee0e9c0e6d78f7e80de5f672f6e2e",
".git/logs/HEAD": "0aaee0e9c0e6d78f7e80de5f672f6e2e",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/HEAD": "4cf2d64e44205fe628ddd534e1151b58",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/objects/d0/f733de32ec113a26287fbcf25a450f77e530ab": "84cfc914ec588a225bf70d66dd475bdb",
".git/objects/2f/85fc9f0f81277bb403f36b43efd7c19d948388": "cbf0fdd4be1b813bf5a537edb0f3244b",
".git/objects/79/ba7ea0836b93b3f178067bcd0a0945dbc26b3f": "f3e31aec622d6cf63f619aa3a6023103",
".git/objects/d1/c3e914184dfd1f855d1457a8429cd136fdb729": "616854ded5af708d8725242c37303dbd",
".git/objects/f6/7ed9aeb1a1c79f2f981457410f3f003d2becaf": "d09fdc387e32e62d805fa6fcc43d08c8",
".git/objects/06/42726c57aad793bd16398659dc8439f5a0302d": "c8235a85d5301b8d8298f4a3ff24e6e3",
".git/objects/e3/3be89c4e3f1eb7098f34a854b79ff7c1ae5ddc": "538571fbd19756b72806a3f773a7a6cb",
".git/objects/64/759833b4438a81c5f29eb043c9232169bef1a8": "c5e5008069376d7d1dd24a194feab6ec",
".git/objects/d5/0d06552fdc1426697220a26cc1092573f462a2": "c3c435a24f6a44f12cdd79b239ccd4ae",
".git/objects/aa/a75d6b3841132fb690a629a08dcd2f41ade202": "5073e8a511aaed038b088c1487caa55a",
".git/objects/21/ab97202c3b3801910c63d3f1eed80d46294725": "c598791c94359fc8c0fc8f59655512f3",
".git/objects/ed/c21a88604cfc057f574bad0242f3bdc2558698": "a66db13d3924202dc26e6713ff0e29bc",
".git/objects/b2/af2e7c720ba7cb25087d5aa5f9dee7b20ba72d": "264200250ee2c2c5f81765d5e61f6970",
".git/objects/62/93286c5650c7f68a796636e8439b86b22b7fa9": "92ccb1689f0853c8b037a3cc5a400bfd",
".git/objects/55/c3fea1feac7df1c4aeaf5972f3ad1e0a4cca17": "46f138ff5ba15fc7922c379ac407cfdb",
".git/objects/4e/8f7acb1682dcb6ce1b84723d97694b6a77caa6": "4c9d5c90280d81656297ad017adfc239",
".git/objects/20/5bb5db271c6d8de8399864c7bb9b917f638893": "c993b22f115d7f3ae6d5b7b212806539",
".git/objects/fa/568f2f8e49c82d95880514e75088466f4495cb": "e6a0b55dacb3788d3828637cb3ac2f1a",
".git/objects/fa/7ac3f9664aabd7591e6ef7f05d9327c6f77449": "60536020bf0946e8ac1384130e7414eb",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/e5/951dfb943474a56e611d9923405cd06c2dd28d": "c6fa51103d8db5478e1a43a661f6c68d",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/eb/f4c84ba490c6be20fa43aee4b4eff229ad2157": "a0e92a5b2f2b8b5dcbed093973ca6530",
".git/objects/9e/2622f8d55425a32a7cce3c977c9ed66a1b625f": "0a5d30d4f74d6d6241eae6b437e4dc50",
".git/objects/ab/0e98497a51ead7821d1da35a24968ff314e50f": "557c35fe3928eb2af403d1b3926bb9ba",
".git/objects/68/75537b5b66b91f91c4b88db6bf05426edad228": "d93ff351308ce386804881e9b23693a0",
".git/objects/99/c96b113ec7de8d9f7bc9f27a25ecaa049b1ecc": "cca18649a23d377c881e1424ea27e68b",
".git/objects/c0/f7f8dbeda7be76298c2cbc41e758dd003d0d61": "480579db9151e2e6d2bcd1c0b8603fc8",
".git/objects/5b/a242aea6f972d966315421223becbe57f34289": "a5152a727db05e098d1f04cbf97cbfc0",
".git/objects/09/730c602fca01491289822ae61996ea9302d514": "dda78bf9788a6d1866c93b964c9653f5",
".git/objects/75/4d0cb595670de41d491d98f96b13786b031f1a": "4cfd17b1d804b864bf152dd33b9aff55",
".git/objects/75/af9c281586196fc331e68e6f9381185da748cb": "46e879f840775357f1e674c4a4ef1fda",
".git/objects/a1/3837a12450aceaa5c8e807c32e781831d67a8f": "bfe4910ea01eb3d69e9520c3b42a0adf",
".git/objects/e4/62f3e5a8142b5dec0057ef9fae292f2d06dbf5": "7ff11c4571971215f071ea73355380d3",
".git/objects/11/3098835f2cd5270146b17f7ff999304ce4dcbe": "8eb87bf80af0073a70391a9385cb9389",
".git/objects/32/46ad559eeae0370195978eaed83f1053ee13fd": "a043dbc0a0bda96ce2127799ccc27506",
".git/objects/71/d8970efc9f5665b6b6ecfa4298855cbfe002ab": "f5de0e861ca467a3941633ed118343ca",
".git/objects/7d/385a9158d9b8c53bf2d23b37988a5d6de3eab9": "61e856db38f75f3f8f2423b4cea4dbb6",
".git/objects/67/d7a067bed5ad38533961c212280be175dde3e4": "ffe0f6d7f2babf5811d370076c8b3962",
".git/objects/a8/beffd3ad4fe54d6cabccf83a05477d6a986cd0": "6677888e4a051c7838b5b240c09f0981",
".git/objects/a8/5e9dadc142205a5848b0def77bdd15adc7a545": "d2afc3219f89ad51883a536cb7e89c3a",
".git/config": "d0954ed269e63f880a3ef0af800fe54b",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"index.html": "5f17c99b8662a448d49253d9794ec099",
"/": "5f17c99b8662a448d49253d9794ec099"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "/",
"main.dart.js",
"index.html",
"assets/NOTICES",
"assets/AssetManifest.json",
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
        // lazily populate the cache.
        return response || fetch(event.request).then((response) => {
          cache.put(event.request, response.clone());
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
