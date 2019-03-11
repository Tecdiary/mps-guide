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
    "revision": "e30567e7005a1816ab18987ef77f2c90"
  },
  {
    "url": "1.0/developer-guide/index.html",
    "revision": "d47a39620deda3ddc374906d85ab0689"
  },
  {
    "url": "1.0/faqs/index.html",
    "revision": "8b40002905b4cd700bb5c2f7dcaa62ea"
  },
  {
    "url": "1.0/guide/accounts-transfers.html",
    "revision": "04a327cf201664726e1a49f697e6b2f3"
  },
  {
    "url": "1.0/guide/expenses-incomes.html",
    "revision": "0ddca922264c9d14b5aba9e328726efc"
  },
  {
    "url": "1.0/guide/index.html",
    "revision": "5c5730f2ca811c9bfdbf42ee3459330b"
  },
  {
    "url": "1.0/guide/invoices-purchases.html",
    "revision": "8a777ab55323798e043c71cb8c1d71e6"
  },
  {
    "url": "1.0/guide/products-customers-vendors.html",
    "revision": "8b2651ed8c8e67aa4d678db9377fe216"
  },
  {
    "url": "1.0/guide/users-settings.html",
    "revision": "db1d0f715346b1ef856d4bf8f47da4ac"
  },
  {
    "url": "1.0/install/index.html",
    "revision": "1cf5f4914ad9d18f94a644892ecc283f"
  },
  {
    "url": "1.0/install/service.html",
    "revision": "861e13eff51160b701db03523c8a1bad"
  },
  {
    "url": "404.html",
    "revision": "e7f791ed73a20b8f16136904b73a0e48"
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
    "url": "assets/js/15.50296f77.js",
    "revision": "2d13ca999fadd7d9e2fedc1f26da303c"
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
    "url": "assets/js/app.4b06e293.js",
    "revision": "cf5a8f50993911aac4beaa62a81c1585"
  },
  {
    "url": "index.html",
    "revision": "b854a91e7805f6c6d42683def1c3bd6e"
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
