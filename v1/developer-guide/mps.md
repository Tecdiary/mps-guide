## MPS - Developer Guide

[[toc]]

### What's MPS module

MPS stands for Modern Point of Sale Solution (admin area) for the application.

```text
modules/MPS
        ├── Actions
        ├── Config
        ├── Console
        ├── Database
        │   └── factories  ── ── ── ── ── ── ── module model factories
        │   ├── Migrations ── ── ── ── ── ── ── module migrations
        │   └── seeds ─ ── ── ── ── ── ── ── ── module model seeders
        ├── Events
        ├── Exports
        ├── FiscalServices
        │   └── SendSaleToFiscalService   ── ── modify this to report sale to your fiscal service
        ├── Helpers  ── ── ── ── ── ── ── ── ── module helper functions are declared inside this
        ├── Http
        │   └── Controller ── ── ── ── ── ── ── module controllers
        │   ├── Middleware ── ── ── ── ── ── ── module middleware, register them in module service provider
        │   └── Request ── ── ── ── ── ── ── ── requests for validation of controller methods
        ├── Imports
        ├── Listeners
        ├── Models   ── ── ── ── ── ── ── ── ── module models
        │   └── Traits  ── ── ── ── ── ── ── ── module trails
        ├── Notifications  ── ── ── ── ── ── ── module notifications
        ├── Observers
        ├── Policies
        ├── Providers   ── ── ── ── ── ── ── ── module service providers
        ├── Resources   ── ── ── ── ── ── ── ── module resources
        │   └── js   ── ── ── ── ── ── ── ── ── Javascript & Vue application
        │   │   └── components   ── ── ── ── ── Vue components
        │   │   ├── core   ── ── ── ── ── ── ── Vue core helpers, filters & mixins
        │   │   ├── mixins ── ── ── ── ── ── ── Vue component mixins
        │   │   ├── routes ── ── ── ── ── ── ── Vue routes
        │   │   ├── store  ── ── ── ── ── ── ── Vuex store
        │   │   ├── app.js ── ── ── ── ── ── ── Vue application main file
        │   │   ├── bootstrap.js ── ── ── ── ── JS main file
        │   │   └── i18n.js   ── ── ── ── ── ── Vue internationalization file
        │   ├── lang ── ── ── ── ── ── ── ── ── module sass files (styles)
        │   ├── less ── ── ── ── ── ── ── ── ── iview style files
        │   ├── sass ── ── ── ── ── ── ── ── ── module sass files (styles)
        │   ├── sounds
        │   └── views ─ ── ── ── ── ── ── ── ── module blade views
        ├── Routes ─ ── ── ── ── ── ── ── ── ── module routes
        ├── Services ── ── ── ── ── ── ── ── ── module service (used to prepare order data)
        ├── Tests
        ├── .gitignore
        ├── module.json
        ├── package.json
        └── webpack.mix.js
```

### Fiscal Services

There is no service yet but will be added as we receive the requests. If you need to report to your local fiscal service. You can do that in the `modules/MPS/FiscalServices/SendSaleToFiscalService.php` file.

**_If you want to request us to add fiscal service, please ask question on item support with the documentation link (English version only) of your Fiscal Service._**

In case your fiscal service don't have documentation in English, then we won't be able to add it for you. You will need to hire any local developer to help you add the service.

### Miscellaneous

### Imports & Exports

There is no option to import/export any data yet. We will be added option in future updates.

#### I can't find answer in docs?

If you can't find answer here in docs, you are suggested to ask question at support portal [https://tecdiary.net/support/modern-point-of-sale-solution](https://tecdiary.net/support/modern-point-of-sale-solution). Please be patient while accepting our response as it could take 1 - 2 working days to respond.
