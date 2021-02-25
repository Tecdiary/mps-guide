const fs = require("fs");
const path = require("path");
// const fse = require("fs-extra");

const mdDocs = [
  "./readme.md",
  "./credit/readme.md",
  "./install/readme.md",
  "./install/service.md",
  "./guide/readme.md",
  "./guide/point-of-sale.md",
  "./guide/sales-deliveries.md",
  "./guide/purchases-quotations.md",
  "./guide/payments.md",
  "./guide/customers-suppliers.md",
  "./guide/expenses-incomes.md",
  "./guide/items-modifiers.md",
  "./guide/stock-adjustments.md",
  "./guide/transfers.md",
  "./guide/users.md",
  "./guide/settings.md",
  "./guide/reports.md",
  "./faqs/readme.md",
  "./developer-guide/readme.md",
  "./developer-guide/mps.md",
];
// fse.copySync(path.resolve(__dirname, f), dest);
mdDocs.map((f, fi) => {
  const file = path.resolve(__dirname, f);
  const dest = path.resolve(
    __dirname,
    "../content/" + (fi < 10 ? "00" + fi : "0" + fi) + " " + path.basename(f)
  );
  // fse.copySync(path.resolve(__dirname, f), dest);
  fs.readFile(file, "utf8", function(err, data) {
    if (err) {
      return console.log(err);
    }
    var result = data
      .replace(/::: tip/gs, '<blockquote class="quote notice">')
      .replace(/::: warning/gs, '<blockquote class="quote warning">')
      .replace(/:::/gs, "</blockquote>")
      // .replace(
      //   /\:src\=\"\$withBase\(\'\/assets/gs,
      //   'src="../v1/.vuepress/public/assets'
      // )
      .replace(/\:src\=\"\$withBase\(\'\/assets/gs, 'src="content')
      .replace(/'\)" alt="/gs, '" alt="')
      // .replace(
      //   '<img :src="$withBase(\'/assets/img/app-design.png\')" alt="App Design" >',
      //   "\n![App Design](content/img/app-design.png)\n"
      // )
      // .replace(
      //   '<img :src="$withBase(\'/assets/img/pos-design.png\')" alt="POS Design" >',
      //   "\n![POS Design](content/img/pos-design.png)\n"
      // )
      // .replace(
      //   '<img :src="$withBase(\'/assets/img/laravel-logo.svg\')" alt="Laravel Logo" class="logo-image">',
      //   "\n![Laravel Logo](content/img/laravel-logo.svg)\n"
      // )
      // .replace(
      //   '<img :src="$withBase(\'/assets/img/vue-logo.svg\')" alt="Vuejs Logo" class="logo-image">',
      //   "\n![Vuejs Logo](content/img/vue-logo.svg)\n"
      // )
      // .replace(
      //   '<img :src="$withBase(\'/assets/img/iview-logo.svg\')" alt="View Design Logo" class="logo-image">',
      //   "\n![View Design Logo](content/img/iview-logo.svg)\n"
      // )
      // .replace(
      //   '<img :src="$withBase(\'/assets/img/nuxt-logo.svg\')" alt="Nuxt Logo" class="logo-image">',
      //   "\n![Nuxt Logo](content/img/nuxt-logo.svg)\n"
      // )
      // .replace(
      //   '<img :src="$withBase(\'/assets/img/tailwind-logo.svg\')" alt="Tailwind Logo" class="logo-image">',
      //   "\n![Tailwind Logo](content/img/tailwind-logo.svg)\n"
      // )
      // .replace(
      //   '<img :src="$withBase(\'/assets/img/webpack-logo.svg\')" alt="Webpack Logo" class="logo-image">',
      //   "\n![Webpack Logo](content/img/webpack-logo.svg)\n"
      // )
      .replace(/\[\[toc\]\]/, "");

    fs.writeFile(dest, result, "utf8", function(err) {
      if (err) return console.log(err);
    });
  });
});
