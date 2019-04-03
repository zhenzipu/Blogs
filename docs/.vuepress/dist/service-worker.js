/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/3.6.3/workbox-sw.js");

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "317710f6631bcc4e38646a3d611a0c07"
  },
  {
    "url": "assets/css/0.styles.72d0f0a4.css",
    "revision": "9256de7d88e98e417f29423dd4737283"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.aee0ea57.js",
    "revision": "408f07dbbaf58166d04acfd39268953c"
  },
  {
    "url": "assets/js/11.47fecdd0.js",
    "revision": "90e76766bb7376ba10614725a5a7dfec"
  },
  {
    "url": "assets/js/12.538587d2.js",
    "revision": "efc8101e77d3567188783429d09ea653"
  },
  {
    "url": "assets/js/13.88f2fa0d.js",
    "revision": "1637e066626b4cdc0ef46c99b2c8c99d"
  },
  {
    "url": "assets/js/14.e5a4dc03.js",
    "revision": "52a78259dbf8a4388b95e53e7a8206e6"
  },
  {
    "url": "assets/js/15.7b6000bf.js",
    "revision": "6fca2397745118812f3a75c326895e97"
  },
  {
    "url": "assets/js/16.477b3f54.js",
    "revision": "e05a2ff388abbb41429b18f48cf99baf"
  },
  {
    "url": "assets/js/2.0ae32c5f.js",
    "revision": "be6f725563b85176c3297ea79dd7e3bc"
  },
  {
    "url": "assets/js/3.0fbe60c4.js",
    "revision": "98995bbdb724e85cca0cd1cc1f7c72c7"
  },
  {
    "url": "assets/js/4.32a19085.js",
    "revision": "85722711fac58649153956b20d23b96b"
  },
  {
    "url": "assets/js/5.feb79a39.js",
    "revision": "f12b6b32845ceccbcf51d413dd85421c"
  },
  {
    "url": "assets/js/6.646d3971.js",
    "revision": "d2efc7e420790af3edc0852a664ad552"
  },
  {
    "url": "assets/js/7.87838415.js",
    "revision": "7fd1d2413fd63eb7c401681ee4d9dcc8"
  },
  {
    "url": "assets/js/8.7b071136.js",
    "revision": "9b2c90c3feb85d6d19e5cf47d82022ff"
  },
  {
    "url": "assets/js/9.106ce790.js",
    "revision": "98b7254d682082f572265b813513f9f1"
  },
  {
    "url": "assets/js/app.6400887b.js",
    "revision": "30c546f6dda217d7497062d80f73e610"
  },
  {
    "url": "guide/index.html",
    "revision": "de1e7ca21c0b8011b5834bfe60e1c29a"
  },
  {
    "url": "index.html",
    "revision": "8636babfafaa3f8333402dde9f874f82"
  },
  {
    "url": "interview/index.html",
    "revision": "b4ef31d7aa871b309034fd5b9d5fc4ef"
  },
  {
    "url": "js/index.html",
    "revision": "75cba25e3dcbea9e0f103586c8c67ad0"
  },
  {
    "url": "js/one.html",
    "revision": "d441477cc80366b1241ab2cbb0c73d80"
  },
  {
    "url": "js/two.html",
    "revision": "779fc509747c7adf2ba4065640a2beb0"
  },
  {
    "url": "react/index.html",
    "revision": "2f5e4f1650eb268b6066da8e41b3a79b"
  },
  {
    "url": "react/one.html",
    "revision": "1d0e20f9f4aca861b32e94b2661ac9fa"
  },
  {
    "url": "react/two.html",
    "revision": "5ce76360ed51a984329f47a1f7dc94b6"
  },
  {
    "url": "tco-ui/index.html",
    "revision": "87d6b5cd62782a93e51d8dffc489928a"
  },
  {
    "url": "vue/index.html",
    "revision": "3199496a85f548ef2df2d123065d1f24"
  },
  {
    "url": "vue/one.html",
    "revision": "d9c2fd8743057111cdd7a0a66a8dc48e"
  },
  {
    "url": "vue/two.html",
    "revision": "a8587b6b44331a97ef29d0adc48de73d"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.suppressWarnings();
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
