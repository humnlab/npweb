'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/COMMIT_EDITMSG": "a1b7bf3c0c4bb323c94c9c687e437fa7",
".git/config": "78b6ad3c4782f700676d25e9ccff03e4",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/FETCH_HEAD": "a5c1e48cb18de70f43aa4003533f4030",
".git/HEAD": "4cf2d64e44205fe628ddd534e1151b58",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "5029bfab85b1c39281aa9697379ea444",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/sendemail-validate.sample": "4d67df3a8d5c98cb8565c07e42be0b04",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "fabf6eb39112a68861bf034e4b18bb6d",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "f04a81e9624bea0cd84316028b9f19d1",
".git/logs/refs/heads/master": "f04a81e9624bea0cd84316028b9f19d1",
".git/logs/refs/remotes/origin/master": "2deb8cbebebb60e46fb84177eeb36ee1",
".git/objects/01/0b44805a12928b6eabec1717abf30c7209a7bc": "c71d33ce1c2ecb33bcb26a1c34951131",
".git/objects/01/c30d7001870055c58a698afd709141fa36ec39": "38c8cc6cec2f673bb72723a3d973561f",
".git/objects/03/2fe904174b32b7135766696dd37e9a95c1b4fd": "80ba3eb567ab1b2327a13096a62dd17e",
".git/objects/0b/a2229c7f242bd1e0dca037bbf7858ce3ea5c89": "ab2a72c58116659a9b3b28fd3d70f279",
".git/objects/0c/808f5cb7ba10637080a49fbd2b3fce8e653f87": "d0df2a5dd840826e4fab37eb5b3904e7",
".git/objects/0f/cc7b285a8bac8b35c4613e234e5c8acfebbec8": "c7b9e893468877e38f869831e076adb4",
".git/objects/11/b24a6cf8dbe8d9df1942e28d1ebee3429b832e": "bb625b5039585e50795f5142e8659e6e",
".git/objects/13/54b2a04b23178c44d0e028ee44ff0ea092fabd": "bd5213c7b52919e486b3eacf39cdc93b",
".git/objects/14/42ef0aaddf844ac4f7524a3ff1caaa59441cba": "7c97cef09fbea6b786edeb7451a03b46",
".git/objects/18/58d8688acdacab4b1ddf222bc405ce99ba0f50": "49c6c557aedb2a6221adc60c82e2a6f6",
".git/objects/18/bb35da21274fd8618459626a60d4e997f1a613": "b2faa3f1caef1329031347d9c4d41e10",
".git/objects/19/9759a852de9ff8f327da15b18c4de86a4d1852": "0ed41ca21976800bdc1861446e5a00b0",
".git/objects/1d/bef28894fed422f48a3948b131749cc195928a": "3fbbfa597ec22481f726673d5b4bf854",
".git/objects/20/2c04a3ad063810c620422770c1f64affce1d13": "b80c39970f9c594cd486a2d83de357d3",
".git/objects/24/1fdf403f9877736f7324fbdeb87b68dad823ca": "b292c1beb29a151008a9b97ebde6f081",
".git/objects/2a/90f2162fcb1b7e3849ea306a87cbbf0228b236": "b7025e08b3fd87bd4b715e62ebd4f8b7",
".git/objects/2a/ea05f6b7c2ae885ca9ba1732675e14c02bdc54": "031fbe63529167a2b1b8c1249eec53b9",
".git/objects/2b/9c178e191112c42dd8c70ea9bb5d7f2be325ff": "898280b565102aebb1b1ca0cc95cd979",
".git/objects/2d/ae0ebb56acad3e716fb94c1fe2fce85d185817": "77abeb701980ee943dff615fdd79d84f",
".git/objects/33/31d9290f04df89cea3fb794306a371fcca1cd9": "e54527b2478950463abbc6b22442144e",
".git/objects/35/96d08a5b8c249a9ff1eb36682aee2a23e61bac": "e931dda039902c600d4ba7d954ff090f",
".git/objects/36/635578261211ff87aa05fdf5f5b761d4686f18": "c04ed2a476b0afb24396ae61e4d57b77",
".git/objects/40/1184f2840fcfb39ffde5f2f82fe5957c37d6fa": "1ea653b99fd29cd15fcc068857a1dbb2",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/47/cd56bf5d65a8d005fe29507f83f302148c7794": "0d71b9be8193969efc11964b216975aa",
".git/objects/47/dc74b3d64f3e4e7f39bdf7a7e56d266d22de44": "9926254d6628c3f667a603816a31fcd8",
".git/objects/47/e79b34eef5fd85b4ab32895df3d343a8f99e53": "c151e533d20cfb3f4ff67a0c60705e9e",
".git/objects/4c/4330d63723131122a5c40c4cb6526216153c12": "d0bce70a0136f7772b160e2dd13e274f",
".git/objects/4f/02e9875cb698379e68a23ba5d25625e0e2e4bc": "254bc336602c9480c293f5f1c64bb4c7",
".git/objects/55/dda59a7dbd478565a9553de8b9c15bb56ab757": "fa519e625d3cf25794dc1c1235b5ca99",
".git/objects/57/478f7772fcc38e8e54fbd874e3deddaaa6235a": "0e66c94ff87c5cbd68f323a10226813f",
".git/objects/57/7946daf6467a3f0a883583abfb8f1e57c86b54": "846aff8094feabe0db132052fd10f62a",
".git/objects/5e/2821bfa48c34aeb03eb099c0597f06b5ce8a7b": "3ce9a93318a775e7e3da1000ffe7dd97",
".git/objects/5e/d2182b907bd45014670509b2594072b24aaaca": "6ff242e174453a7a2d31d3753c4586ed",
".git/objects/5e/ddd202fac1cedc18c373369d1b503059616d86": "dcf3b91f723a9182ebbbbbe1d7c46646",
".git/objects/5e/fbb40df36cafaf0b167d6513b171255bc42a31": "f008dcb52436b08efc91eddc48ac1184",
".git/objects/5f/bf1f5ee49ba64ffa8e24e19c0231e22add1631": "f19d414bb2afb15ab9eb762fd11311d6",
".git/objects/64/5116c20530a7bd227658a3c51e004a3f0aefab": "f10b5403684ce7848d8165b3d1d5bbbe",
".git/objects/65/4fb3d7efed1cac7bee7612a3fced955110e139": "00519fa92d628f8b2dde22f260570b08",
".git/objects/6b/9862a1351012dc0f337c9ee5067ed3dbfbb439": "85896cd5fba127825eb58df13dfac82b",
".git/objects/6c/e0de37d93ccc4f4adb0a64bcf03cf59e537ebc": "05155870eb37d608abfff378afa2ed38",
".git/objects/6e/2e2d309f82609c65ce5e01aa3459e4580193e2": "dd5430b0b8e09c69837bed5997419f4e",
".git/objects/74/57be762f164db87b04d821aad702264cfa4475": "cbbecc91cd022c04982f34e1f68a51e7",
".git/objects/75/daff951594ea4891a9d49f95d1c3d8704d5cd0": "517cc5cb0b76e14e08aff5173eb601e7",
".git/objects/7e/aca1262b294824a3195337b6931482aee12e67": "2a7d7e8c548cd4137d50e6361eddbd60",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/89/099b8947e222126005844cf0d70f2a13c60611": "849593d21d66d9164a2e9c40ba67ff92",
".git/objects/8a/51a9b155d31c44b148d7e287fc2872e0cafd42": "9f785032380d7569e69b3d17172f64e8",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/8c/e26a7d88dcce070ef8eb288eded3bfdb4a2b39": "93ee34fd0a0ea8b116549ea2c57262ac",
".git/objects/90/952fc8c23a4f86e9eea1f81e3be41607d12efc": "c3dafdeb02052aed56273c322debc4bf",
".git/objects/91/4a40ccb508c126fa995820d01ea15c69bb95f7": "8963a99a625c47f6cd41ba314ebd2488",
".git/objects/93/c9cf1a361c5111d63faffa7afc6bb08f4c4e70": "e6d97091704d407449914caae6c182b6",
".git/objects/96/cb2c5e5297a6e30bbe03307b727fdb052ef82f": "3de14f4b145079bb9787ef04a2fbf6bd",
".git/objects/99/d8eedad02bb762e57ce0a14dce75f44c179fba": "bc63e30b7372cff3de4b09f3bf91ab28",
".git/objects/9c/56960796d9b9467ba61d34e01b3a929de7d763": "254ff38e6c963a2a9748a3b4724a18c4",
".git/objects/9d/9f0c701558ef81d6014e397edc6e6742f7c21f": "6516ade64c53e2c2bb5096217fd12e01",
".git/objects/a0/14271efabfcd4cf43abbb9db40dda8a7fd438e": "69922bc82346c7bb6847dde389b5ddcc",
".git/objects/a5/de584f4d25ef8aace1c5a0c190c3b31639895b": "9fbbb0db1824af504c56e5d959e1cdff",
".git/objects/a6/4a5fb66943f8703530cd128445be1299815b74": "b3de5dca3cb526014ccd2805f14aa375",
".git/objects/a8/8c9340e408fca6e68e2d6cd8363dccc2bd8642": "11e9d76ebfeb0c92c8dff256819c0796",
".git/objects/b2/6988565512e5be6183b7665ac9b7bd0429c9a0": "bbf59ca4871a985b5393e54da24f92ee",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b7/fe1af0f1fedd4d4d7e735a273fd3804675aa06": "b8d55ee50d4e1d2d949f6c002a299aba",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/b9/fb45549beea47e91ba8af45c78f09eac6852bd": "f800290e96ffb6f64f9caeb817b6076d",
".git/objects/bf/4d6bb9e424ff738b4fe61d7498f6459a0283ea": "98a7aa2ae5954821b47f055b4fc8af57",
".git/objects/c4/e2ce229d0bdbf0a816920ec0abe5c40fab8601": "d971e20847aa5be4ec436aac58cbf510",
".git/objects/c4/f9ceb7195b1a1c123ace49431f1c6867b06ea5": "a8368980a4d4e184bfacf892e70c8b14",
".git/objects/c6/81db1f112c8ba819f8305a9a6ce3eb9add5a1d": "85af172969ceb7b42aa8e640e239db0b",
".git/objects/c6/e116cca2f5320946215f5c9e6c191a0f7e2b34": "b92280d0133050cb5005cfa3466ebc03",
".git/objects/cc/0db081a30df1291a72528cbef5bc623cbcb947": "345ec433269b56f7ae1ae6c50cbb7ba6",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
".git/objects/d4/3adf11bfdd655ada6191f7b00142f6c2319e32": "b5ad7cd4873b74a0e05ddc40bbd5ad42",
".git/objects/d6/242cbe26b6055b224b54145ec11bd223778759": "5cc4725d1631a98fbcde5b54e627ca7e",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/d9/3952e90f26e65356f31c60fc394efb26313167": "1401847c6f090e48e83740a00be1c303",
".git/objects/db/b3cc60226b8c1009f34dd6d0533e1e23f98651": "15af9524d664e39a6f548412b724c2e3",
".git/objects/df/63f697b7ba96c6a75f98616b21c025853589c4": "10567ad0b63600d4dde87619713a65b5",
".git/objects/df/90f4931d6942d56cdb7b3c5f075eb48bb22336": "72ff039b9f40c73522ddeb8e1de97ae3",
".git/objects/e9/94225c71c957162e2dcc06abe8295e482f93a2": "2eed33506ed70a5848a0b06f5b754f2c",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/ef/b875788e4094f6091d9caa43e35c77640aaf21": "27e32738aea45acd66b98d36fc9fc9e0",
".git/objects/f2/04823a42f2d890f945f70d88b8e2d921c6ae26": "6b47f314ffc35cf6a1ced3208ecc857d",
".git/objects/f3/709a83aedf1f03d6e04459831b12355a9b9ef1": "538d2edfa707ca92ed0b867d6c3903d1",
".git/objects/f5/72b90ef57ee79b82dd846c6871359a7cb10404": "e68f5265f0bb82d792ff536dcb99d803",
".git/objects/f5/a7407c57e1ba4134547b2affe764cf29c4833a": "dbbda00fb889e1e5c623213f3fe9bf5d",
".git/objects/fa/0291ba91d1c1b8114dfd1cb4e382d671b6cef1": "0c5d8cb0270cde3817033b4e31c80fd4",
".git/objects/fe/2629f9247c2f4cf94e4fe2d45fe67af90c5d95": "c809c40f61a81abb7fac84d05ba5d78f",
".git/ORIG_HEAD": "d196953a12a90b9cce0cc6d72bc0d1b8",
".git/refs/heads/master": "29c70e17c980026cbb1295212419ace7",
".git/refs/remotes/origin/master": "29c70e17c980026cbb1295212419ace7",
"assets/AssetManifest.bin": "e1de3e5568ab46e0e0f0f4812e7c1a54",
"assets/AssetManifest.bin.json": "3e001a27690228fe21c91cbe6dced12d",
"assets/AssetManifest.json": "3e5f498446a66071c32718992badb6da",
"assets/assets/accuracy.mp4": "a5f237b237a1523a26ff8e5f0489ebdd",
"assets/assets/bg.jpg": "b84c4590d1a92bf3d3663c33ef35041e",
"assets/assets/consistency.mp4": "4e515fa5a721c4a4eb4117727aebf6da",
"assets/assets/coughing1.mp4": "9d3a835ef7e73774497ffb5f643c26df",
"assets/assets/coughing2.mp4": "8ea7adf1272a3f72e2e3bc7d51f44bdf",
"assets/assets/discreet_pataka.mp4": "cc9b4beb4a35afde92ddd2ca1f4a430b",
"assets/assets/ka.mp4": "ad078e6316c58bcbcd06cfc351f78a34",
"assets/assets/np_logo.png": "b6d982a0344a84bcb2d805de1a93a775",
"assets/assets/pa.mp4": "ec0fc9be4fbdfaed15e753be7a3b24b4",
"assets/assets/pataka.mp4": "3fd03b93367fc426ad794e8bc78c7f17",
"assets/assets/reaction.mp4": "7aefbed398597e347df537b5e900c642",
"assets/assets/reading.mp4": "53bf28bc34f25249b521d6b4f6dc5eee",
"assets/assets/spontaneous.mp4": "060e4c4f65ed6e0022a4eac9b142eaed",
"assets/assets/steadiness.mp4": "d668c7e58d9e75b276cc96532509c898",
"assets/assets/ta.mp4": "bb34487ff57509a89d81d38450fee93b",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "82ce711c4b53744f176c89bf452430dc",
"assets/NOTICES": "645ddf7b3dcf3a90d367359297a8f2c9",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "33b7d9392238c04c131b6ce224e13711",
"assets/packages/record_web/assets/js/record.fixwebmduration.js": "1f0108ea80c8951ba702ced40cf8cdce",
"assets/packages/record_web/assets/js/record.worklet.js": "356bcfeddb8a625e3e2ba43ddf1cc13e",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "86e461cf471c1640fd2b461ece4589df",
"canvaskit/canvaskit.js.symbols": "68eb703b9a609baef8ee0e413b442f33",
"canvaskit/canvaskit.wasm": "efeeba7dcc952dae57870d4df3111fad",
"canvaskit/chromium/canvaskit.js": "34beda9f39eb7d992d46125ca868dc61",
"canvaskit/chromium/canvaskit.js.symbols": "5a23598a2a8efd18ec3b60de5d28af8f",
"canvaskit/chromium/canvaskit.wasm": "64a386c87532ae52ae041d18a32a3635",
"canvaskit/skwasm.js": "f2ad9363618c5f62e813740099a80e63",
"canvaskit/skwasm.js.symbols": "80806576fa1056b43dd6d0b445b4b6f7",
"canvaskit/skwasm.wasm": "f0dfd99007f989368db17c9abeed5a49",
"canvaskit/skwasm_st.js": "d1326ceef381ad382ab492ba5d96f04d",
"canvaskit/skwasm_st.js.symbols": "c7e7aac7cd8b612defd62b43e3050bdd",
"canvaskit/skwasm_st.wasm": "56c3973560dfcbf28ce47cebe40f3206",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "76f08d47ff9f5715220992f993002504",
"flutter_bootstrap.js": "d03ad8c4f7c22f3f474cd100ec4ad85d",
"icons/android-192.png": "ce825e2077d73736d7a0857b25e9ed52",
"icons/android-512.png": "f17fd1abb58ebffdf744d4503a3a137f",
"icons/apple-touch-icon.png": "82430267e119a2c2c4fc7588bff27eef",
"icons/favicon-16.png": "2a35e1a1af06dbcc14c4f1a4279bcc43",
"icons/favicon-32.png": "925e0509d864dc06d848405bd7852e25",
"icons/favicon.ico": "685a36a279e593ead366edb87b7c923a",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/manifest.json": "766dfab352d7d99b9ba62f3400b76ca7",
"index.html": "b6df533cf66d1ac0eb578fba6d2917b4",
"/": "b6df533cf66d1ac0eb578fba6d2917b4",
"main.dart.js": "eb48c6a00776f2d4c02ce96976c6cf56",
"manifest.json": "fe446aca6128a7983513c5ad0d58139e",
"version.json": "6a70ef712afd204a1ac84f6c05c84965"};
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
