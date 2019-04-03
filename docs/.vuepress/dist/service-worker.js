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
    "revision": "a53912b6c1c4075311838cc6311611dd"
  },
  {
    "url": "assets/css/0.styles.75467a2d.css",
    "revision": "e9e40730b044f480f1a439581b503611"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.3867cae9.js",
    "revision": "408f07dbbaf58166d04acfd39268953c"
  },
  {
    "url": "assets/js/11.fd335459.js",
    "revision": "cc28f64df21b43676bb9d687af0efc33"
  },
  {
    "url": "assets/js/12.9dcc89eb.js",
    "revision": "1906c2f30316b6e58042ba424051e364"
  },
  {
    "url": "assets/js/13.9d48c865.js",
    "revision": "581108f979f8b7e663cff04ca54cb124"
  },
  {
    "url": "assets/js/14.c3b63a3e.js",
    "revision": "13fd93156c65514cc97de0f3684ba82f"
  },
  {
    "url": "assets/js/2.48d34612.js",
    "revision": "f18b338cf378a76b7ef3ceb3e7c79715"
  },
  {
    "url": "assets/js/3.215cc14f.js",
    "revision": "ab5feeb4266f84b5721f2124129b5ed2"
  },
  {
    "url": "assets/js/4.76166aa9.js",
    "revision": "b1d60498ba61e275c0db7b0a4c361dd0"
  },
  {
    "url": "assets/js/5.1f1d861e.js",
    "revision": "cae79da2da54f1f2fbc0c564681a706a"
  },
  {
    "url": "assets/js/6.a74dcc6b.js",
    "revision": "e3796db3a1bb3459a29f39e62956d498"
  },
  {
    "url": "assets/js/7.22c842a1.js",
    "revision": "409c8cb6855d5930287db766ce66c8ac"
  },
  {
    "url": "assets/js/8.b9a0fa30.js",
    "revision": "d5e8b35a86b0997f1818d369a98b1283"
  },
  {
    "url": "assets/js/9.4e28b653.js",
    "revision": "0a0480a15be73ddc42e2bc5202745e05"
  },
  {
    "url": "assets/js/app.5d59b167.js",
    "revision": "c80370100d4edb0cfc620bd0497e18d7"
  },
  {
    "url": "guide/index.html",
    "revision": "9626b1af0ab0a73874c6226e0ca6e82c"
  },
  {
    "url": "index.html",
    "revision": "3d9c3b438c62a09da83d03e0430ec537"
  },
  {
    "url": "js/index.html",
    "revision": "aa5c813ed07a770a1aa33a223fa26cc2"
  },
  {
    "url": "js/one.html",
    "revision": "b0168858096d45c5659d9cb66b5425ac"
  },
  {
    "url": "js/two.html",
    "revision": "af72bbc5c7cc4af063c8d6d0404cf3ce"
  },
  {
    "url": "react/index.html",
    "revision": "47c35833ae3f9aaa4b1d49c426c90c2c"
  },
  {
    "url": "react/one.html",
    "revision": "85b74ebbc06cbd7c570cb182ef52b952"
  },
  {
    "url": "react/two.html",
    "revision": "047d391208d53fc2680021624b1bcedd"
  },
  {
    "url": "vue/index.html",
    "revision": "82efcdad400ce3db69755e6fcc48dc00"
  },
  {
    "url": "vue/one.html",
    "revision": "52ca9bbc3e89ed397bccb1453cac7687"
  },
  {
    "url": "vue/two.html",
    "revision": "06e258b37826104710dca24da6548423"
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
