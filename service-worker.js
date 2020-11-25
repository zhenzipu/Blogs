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
    "revision": "9cc1c87d5364afe76d6e4e3995b2c798"
  },
  {
    "url": "assets/css/0.styles.aece5303.css",
    "revision": "cf019038aa1c3f901ba20e04c646b630"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.746004bd.js",
    "revision": "4cbb90b4ee24bcb30217805f2c18eb94"
  },
  {
    "url": "assets/js/11.2de2b2ec.js",
    "revision": "bfb1d4597d39495ebad67791f7963bc5"
  },
  {
    "url": "assets/js/12.8c863a34.js",
    "revision": "4bc23be3166f56bf8af1bee3ae19a589"
  },
  {
    "url": "assets/js/13.bfdd1a19.js",
    "revision": "edc62ec5a704e9fc87405bad6eb5fa51"
  },
  {
    "url": "assets/js/14.72b50414.js",
    "revision": "733f209ba203371cfeaf86cc4ae3f0aa"
  },
  {
    "url": "assets/js/15.37117e1c.js",
    "revision": "1de56c68054b105420805d2ea4507e53"
  },
  {
    "url": "assets/js/16.96837c3c.js",
    "revision": "e05a2ff388abbb41429b18f48cf99baf"
  },
  {
    "url": "assets/js/2.f2ba88a7.js",
    "revision": "4b39e602695e53d7e71caf7ff8b1b97f"
  },
  {
    "url": "assets/js/3.888ac0e0.js",
    "revision": "9960d97f263ec4da8b47d682e5eb4bb3"
  },
  {
    "url": "assets/js/4.4b16706d.js",
    "revision": "4408f07bab9dda557ed674c2468db26e"
  },
  {
    "url": "assets/js/5.7e951b19.js",
    "revision": "de0ef2e797b278ff00138dd301e2c5b7"
  },
  {
    "url": "assets/js/6.1f22c52b.js",
    "revision": "ad479e4d6240c8fa9ab6978c243bac5b"
  },
  {
    "url": "assets/js/7.c19a1409.js",
    "revision": "7f0120e83cede51ab212cc37d6bc55ff"
  },
  {
    "url": "assets/js/8.3e9e465c.js",
    "revision": "eacd8fbe30aec783ee6bcf42dde1ad68"
  },
  {
    "url": "assets/js/9.57e69f77.js",
    "revision": "188000737ff0ab759aa149f1450bbfe2"
  },
  {
    "url": "assets/js/app.79c18fe8.js",
    "revision": "b9a9068b538298a45802300e3556c9af"
  },
  {
    "url": "guide/index.html",
    "revision": "2311c8eeaa992d890788ccc67bebce3a"
  },
  {
    "url": "index.html",
    "revision": "219697048fd80a3c12ec5e3db24e11f6"
  },
  {
    "url": "interview/index.html",
    "revision": "d88b403aeb3c4d574769e7aa7f22d92d"
  },
  {
    "url": "js/index.html",
    "revision": "0e1dc406429a7ddb2053eb052a358f35"
  },
  {
    "url": "js/one.html",
    "revision": "937c8862bdd7796d929d918743c6fd90"
  },
  {
    "url": "js/two.html",
    "revision": "9a5f9020e509099535547e42851688f1"
  },
  {
    "url": "react/index.html",
    "revision": "e9f2f5db50f54a2833dcc18dbbd30f19"
  },
  {
    "url": "react/one.html",
    "revision": "2eaad99c7815ab249d679887263ee278"
  },
  {
    "url": "react/two.html",
    "revision": "32b10ebe2543fb89111e82c46eeee430"
  },
  {
    "url": "tco-ui/index.html",
    "revision": "a676a04426c75e18a8eabc03b25903a6"
  },
  {
    "url": "vue/index.html",
    "revision": "51772cdadfdc0f36b92b40a8670299b5"
  },
  {
    "url": "vue/one.html",
    "revision": "5c1e4594f9e338a20d3858eb4b80f522"
  },
  {
    "url": "vue/two.html",
    "revision": "1104da51629a487fb7da92b53d6ae179"
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
