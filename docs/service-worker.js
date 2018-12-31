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

importScripts("https://storage.googleapis.com/workbox-cdn/releases/3.4.1/workbox-sw.js");

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "1.0/credit/index.html",
    "revision": "501bcff05a901f92313a25e0945896d1"
  },
  {
    "url": "1.0/developer-guide/index.html",
    "revision": "362e83c9f3840396c62a5ea1adcadf4d"
  },
  {
    "url": "1.0/faqs/index.html",
    "revision": "0329554f82e8c5f7b1a31f7955ea962d"
  },
  {
    "url": "1.0/guide/accounts-transfers.html",
    "revision": "4f5f4e1452f83a2ffe66c48b1df557e3"
  },
  {
    "url": "1.0/guide/expenses-incomes.html",
    "revision": "cecf7c52162c758bcd74f696066e4f60"
  },
  {
    "url": "1.0/guide/index.html",
    "revision": "003888462bc5405797abdbe601ab1283"
  },
  {
    "url": "1.0/guide/invoices-purchases.html",
    "revision": "a75ef9705bd701b2dc8cd56cced4138b"
  },
  {
    "url": "1.0/guide/products-customers-vendors.html",
    "revision": "5c861525991dd30347921e515e823a0b"
  },
  {
    "url": "1.0/guide/users-settings.html",
    "revision": "d9b95ee2548bbd5fabf419f1e866580d"
  },
  {
    "url": "1.0/install/index.html",
    "revision": "8d393659d04a6552029070ba3c9be92f"
  },
  {
    "url": "1.0/install/service.html",
    "revision": "806109e8908cf88aa5c596034eaa567e"
  },
  {
    "url": "404.html",
    "revision": "65ea5dd97964e244b30af26527c6e8e8"
  },
  {
    "url": "assets/css/0.styles.0e673be7.css",
    "revision": "78852b32a09449860e9fda31fb4d0047"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.eb063d57.js",
    "revision": "6c3319ffe85cc845cb61119621569c50"
  },
  {
    "url": "assets/js/11.4ccf70bb.js",
    "revision": "ef0e027cb55198fe2429f4089c169089"
  },
  {
    "url": "assets/js/12.b73656fe.js",
    "revision": "e7ee413dceb3fcff87a151a659001f9b"
  },
  {
    "url": "assets/js/13.f2cbbca8.js",
    "revision": "d8db6c75a32527a1fe160071f92673ad"
  },
  {
    "url": "assets/js/14.f11e5493.js",
    "revision": "f245082443cd39ce178790de8a3e0585"
  },
  {
    "url": "assets/js/15.99a613ba.js",
    "revision": "3db80aa34cd2d03cd6f8b679136e533b"
  },
  {
    "url": "assets/js/2.285762ea.js",
    "revision": "93afbd4e91ed17280e84a6930dc81b17"
  },
  {
    "url": "assets/js/3.1817f8b1.js",
    "revision": "00e732d58a5d06782bef3319d42f22ab"
  },
  {
    "url": "assets/js/4.d03ebd93.js",
    "revision": "ff91b86a6dddd54ddd513c4004ff9ac4"
  },
  {
    "url": "assets/js/5.c029dbf1.js",
    "revision": "ec14da1426b4bcf98a63e2af3da659c0"
  },
  {
    "url": "assets/js/6.e269542e.js",
    "revision": "af28bec05d268e779f526b27931f1735"
  },
  {
    "url": "assets/js/7.7f02535e.js",
    "revision": "05e232ae5f2a25b29bd73f461f0359c2"
  },
  {
    "url": "assets/js/8.060759bf.js",
    "revision": "ebf03f3ce68a8a45ad159345d97114f2"
  },
  {
    "url": "assets/js/9.bb0ae317.js",
    "revision": "5f8dea4b9f71eea1ee75d088570663f5"
  },
  {
    "url": "assets/js/app.71a1cfac.js",
    "revision": "b1ca11e04ec9e7fcd2ad952ddbb56527"
  },
  {
    "url": "index.html",
    "revision": "14d12a9408f936292c049b1c5bd45abf"
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
