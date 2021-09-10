const fs = require("fs");
const path = require("path");
// const fse = require("fs-extra");

const mdDocs = [
  "../v1/readme.md",
  "../v1/credit/readme.md",
  "../v1/install/readme.md",
  "../v1/install/service.md",
  "../v1/install/update.md",
  "../v1/install/modules.md",
  "../v1/guide/readme.md",
  "../v1/guide/point-of-sale.md",
  "../v1/guide/sales-deliveries.md",
  "../v1/guide/purchases-quotations.md",
  "../v1/guide/payments.md",
  "../v1/guide/customers-suppliers.md",
  "../v1/guide/expenses-incomes.md",
  "../v1/guide/items-modifiers.md",
  "../v1/guide/stock-adjustments.md",
  "../v1/guide/transfers.md",
  "../v1/guide/users.md",
  "../v1/guide/settings.md",
  "../v1/guide/reports.md",
  "../v1/faqs/readme.md",
  "../v1/developer-guide/readme.md",
  "../v1/developer-guide/mps.md",
  "../v1/developer-guide/shop.md",
];
// fse.copySync(path.resolve(__dirname, f), dest);
mdDocs.map((f, fi) => {
  const file = path.resolve(__dirname, f);
  const dest = path.resolve(
    __dirname,
    "./content/" + (fi < 10 ? "00" + fi : "0" + fi) + " " + path.basename(f)
  );
  // fse.copySync(path.resolve(__dirname, f), dest);
  fs.readFile(file, "utf8", function(err, data) {
    if (err) {
      return console.log(err);
    }
    var result = data
      // .replace(/## Step /gs, "### Step")
      .replace(/::: tip/gs, "> {quote}")
      .replace(/::: warning/gs, "> {notice}")
      .replace(/:::/gs, "")
      .replace(/\:src\=\"\$withBase\(\'\/assets/gs, 'src="content')
      .replace(/'\)" alt="/gs, '" alt="')
      .replace(/## Manage Modules/, "")
      .replace(/## Update Guide/, "")
      .replace(/\[\[toc\]\]/, "");

    fs.writeFile(dest, result, "utf8", function(err) {
      if (err) return console.log(err);
    });
  });
});
