# eCommerce Module

[[toc]]

## Tech Stack & Directory Structure

eCommerce module is add-on for Modern Point of Sale Solution that enable online shop for your business so that you can accept online orders and payments.

eCommerce module is developed using **TALL stack (Tailwindcss, Alpinejs, Laravel & Livewire)**. The folder structure is as following

```text
modules/MPS
        ├── Actions
        ├── Config
        ├── Console
        ├── Database
        │   └── factories  ── ── ── ── ── ── ── module model factories
        │   ├── Migrations ── ── ── ── ── ── ── module migrations
        │   └── seeds ─ ── ── ── ── ── ── ── ── module model seeders
        ├── Helpers  ── ── ── ── ── ── ── ── ── module helper functions are declared inside this
        ├── Http
        │   └── Controller ── ── ── ── ── ── ── module controllers
        │   ├── Livewire ── ── ── ── ── ── ── ─ module livewire components
        │   ├── Middleware ── ── ── ── ── ── ── module middleware, register them in module service provider
        │   └── Request ── ── ── ── ── ── ── ── requests for validation of controller methods
        ├── Models   ── ── ── ── ── ── ── ── ── module models
        │   └── Traits  ── ── ── ── ── ── ── ── module trails
        ├── Notifications  ── ── ── ── ── ── ── module notifications
        ├── Policies
        ├── Providers   ── ── ── ── ── ── ── ── module service providers
        ├── Resources   ── ── ── ── ── ── ── ── module resources
        │   └── css  ── ── ── ── ── ── ── ── ── module styles files
        │   ├──  js  ── ── ── ── ── ── ── ── ── module javascript files
        │   ├── lang ── ── ── ── ── ── ── ── ── module sass files (styles)
        │   └── views ─ ── ── ── ── ── ── ── ── module blade views
        │       └── auth ── ── ── ── ── ── ── ─ auth view files
        │       ├── components ── ── ── ── ── ─ components view files
        │       ├── layouts ── ── ── ── ── ── ─ layout view files
        │       ├── livewire ── ── ── ── ── ──  livewire components view files
        │       ├── profile ── ── ── ── ── ── ── profile view file
        ├── Rules ─ ── ── ── ── ── ── ── ── ──  validation rules
        ├── Routes ─ ── ── ── ── ── ── ── ── ── module routes
        ├── Traits ─ ── ── ── ── ── ── ── ── ── module traits
        ├── View ── ── ── ── ── ── ── ── ── ──  components
        ├── Tests
        ├── .gitignore
        ├── module.json
        ├── package.json
        └── webpack.mix.js
```

## Standard/Extended License

If you have purchases standard/extended license then you have all the files to modify or develop the item as you need.

```bash
# modules script
npm run shop:i           # to install module packages
npm run shop:u           # to update module packages
npm run shop:h           # to hot reload module for development
npm run shop:w           # to compile & watch module for development
npm run shop:p           # to compile module for production
```

### I can't find answer in docs?

If you can't find answer here in docs, you are suggested to ask question at support portal [https://tecdiary.net/support/modern-point-of-sale-solution/ask_question](https://tecdiary.net/support/modern-point-of-sale-solution/ask_question). Please be patient while accepting our response as it could take 1 - 2 working days to respond.
