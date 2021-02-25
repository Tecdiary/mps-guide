## Developer Guide

[[toc]]

### What's included

Regular license doesn't come with front-end (vue), feature tests, database migrations & seed files. These all are included in standard/extended license but standard/extended license download file doesn't have vendor folder as you can run `composer install` and for front-end (vue) `yarn` or `npm i` I would recommend you to use npm.

### Modify Email Templates

You can modify the Laravel email/notification template. The view files are in `resources/views/vendor/mail` and `resources/views/vendor/notifications` folders.

### Standard/Extended License

If you have purchases standard/extended license then you will get the minimal download file. You can download, open the extracted folder and run the following commands to install dependencies:

```bash
# Install back-end (composer) dependencies with
composer install

# Install front-end (npm) dependencies with
npm i                   # with npm

yarn                    # if you prefer yarn

# modules script
npm run mps:i           # to install module packages
npm run mps:u           # to update module packages
npm run mps:h           # to hot reload module
npm run mps:w           # to compile & watch module
npm run mps:p           # to compile module for production

# to compile all module for production & generate service worker
npm run prod
```

As you know the front-end is Vuejs and back-end Laravel. If you need any help regarding them, you can visit documentation for at [Laravel Docs](https://laravel.com/docs) and [Vue Docs](https://vuejs.org/v2/guide).

### Where is the manifest file.

Manifest file path is `resources/sw/manifest.json`

### Where is the service worker file.

Service worker is being generated with workbox-cli and you can check the `workbox-config.js`

### Module Front-end

The front end is not api based but tradition web app and the source code can be found in `modules/moduleName/`

```text
MPS main app file           => modules/MPS/Resources/js/app.js
MPS main scss file          => modules/MPS/Resources/sass/app.scss
MPS vue components folder   => modules/MPS/Resources/js/components
MPS vuex store file         => modules/MPS/Resources/js/store/index.js
MPS vue-router file         => modules/MPS/Resources/js/routes/index.js
```

The above mention module MPS is used for admin area.

### Support for Modifications

#### Please be informed that we can't offer support/help for modifications, you need to manage it yourself. If you don't know then you can hire developer to help you modify the item as you need.

### Do you provide customization/modification service?

Yes, we do provide customization/modification. We charge `$50/hours` and availability depends on `schedule`. You can email to support@tecdiary.com with your requirements to get estimate.

#### I can't find answer in docs?

If you can't find answer here in docs, you are suggested to ask question at support portal [https://tecdiary.net/support/modern-point-of-sale-solution](https://tecdiary.net/support/modern-point-of-sale-solution). Please be patient while accepting our response as it could take 1 - 2 working days to respond.
