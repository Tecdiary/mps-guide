module.exports = {
  base: process.env.NODE_ENV === "production" ? "/MPS/" : "/",
  title: "MPS Guide",
  dest: "docs",
  description: "User Guide of Modern POS Solution",
  // locales: {
  //   "/": {
  //     lang: "en-US",
  //     title: "MPS Guide",
  //     description: "User Guide of Modern POS Solution",
  //   },
  //   "/zh/": {
  //     lang: "zh-CN",
  //     title: "MPS Guide",
  //     description: "User Guide of Modern POS Solution",
  //   },
  // },
  head: [
    ["link", { rel: "icon", href: `/assets/img/icon.png` }],
    [
      "link",
      {
        href: "https://fonts.googleapis.com/css?family=Montserrat:300,400,400i",
        rel: "stylesheet",
        type: "text/css",
      },
    ],
    ["link", { rel: "manifest", href: "/manifest.json" }],
    ["meta", { name: "theme-color", content: "#3273dc" }],
    ["meta", { name: "apple-mobile-web-app-capable", content: "yes" }],
    [
      "meta",
      { name: "apple-mobile-web-app-status-bar-style", content: "black" },
    ],
    ["link", { rel: "apple-touch-icon", href: `/assets/img/icon-152.png` }],
    [
      "meta",
      { name: "msapplication-TileImage", content: "/assets/img/icon-144.png" },
    ],
    ["meta", { name: "msapplication-TileColor", content: "#3273dc" }],
  ],
  docsDir: "v1",
  serviceWorker: true,
  extraWatchFiles: [".vuepress/nav/en.js", ".vuepress/nav/zh.js"],
  theme: "reco",
  plugins: [["@vuepress/back-to-top", true], "@vuepress/nprogress"],
  themeConfig: {
    repo: "Tecdiary/MPS",
    docsBranch: "master",
    editLinks: false,
    smoothScroll: true,
    displayAllHeaders: true,
    noFoundPageByTencent: false,
    searchPlaceholder: "Search...",
    serviceWorker: {
      updatePopup: true,
      updatePopup: {
        message: "A new version is available for documentation.",
        buttonText: "Refresh",
      },
    },
    locales: {
      "/": {
        label: "English",
        selectText: "Languages",
        ariaLabel: "Select language",
        editLinkText: "Edit this page on GitHub",
        lastUpdated: "Last Updated",
        nav: require("./nav/en"),
        sidebar: {
          "/": getSidebar(),
        },
      },
      "/zh/": {
        label: "简体中文",
        selectText: "选择语言",
        ariaLabel: "选择语言",
        editLinkText: "在 GitHub 上编辑此页",
        lastUpdated: "上次更新",
        nav: require("./nav/zh"),
        sidebar: {
          "/zh/": getSidebar(),
        },
      },
    },
  },
};

function getSidebar() {
  return [
    {
      title: "General",
      collapsable: true,
      children: ["/", "credit/"],
    },
    {
      collapsable: true,
      title: "Installation",
      children: ["install/", "install/service"],
    },
    {
      title: "Manual",
      collapsable: true,
      children: [
        "guide/",
        "guide/products-customers-vendors",
        "guide/invoices-purchases",
        "guide/expenses-incomes",
        "guide/accounts-transfers",
        "guide/users-settings",
      ],
    },
    {
      title: "FAQs",
      collapsable: true,
      children: ["faqs/"],
    },
    {
      collapsable: true,
      title: "Developer Guide",
      children: ["developer-guide/", "developer-guide/mps"],
    },
  ];
}
