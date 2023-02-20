# Frequently Asked Questions

#### We have tried to list some frequently asked questions. This page will be updated time to time with new FAQs.



## General

### How many items can be managed with this Modern POS Solution?

You can have any number of items as you need.

### Can I modify the item?

Yes, as per license. Regular License doesn't come with source code. You will need standard or extended license those comes with source code.

### Can I manage multiple locations/stores?

Yes, you can manage multiple locations/stores with single installation.

### Can I bill from business/companies?

No. There is no option to sale from different companies.

### Can I white label it to have my company name and logo?

Please update the App Name & Short Name in application settings.

### How can I change the sale logo?

Please upload the new logo from application settings.

### How can I translate into other language?

Please duplicate the `modules/mps-guide/Resources/lang/en.json` & `modules/mps-guide/Resources/lang/en` and rename the `en` to your language code i.e, `es` for Spanish & `fr` for French. Now you can translate all the files to your language. Lastly build with `npm run mps:p`

### How can I enable Indian GST?

You don't have to enable it, just add taxes and then assign those to your items. System will automatically calculate the correct taxes for you depending on the customer/supplier states. This is useful for all other countries those uses state related taxes such as Canada.

### Can I install this item on localhost?

Yes, you can install this item on localhost with any web platform xampp, mamp, lamp, wamp or easyphp. Internet connectivity is required for installation to verify the purchase. Once installed, you can use it without Internet.

### Can I use it offline if I have installed it on live server?

MPS has option to cache the get requests only. You won't be able to post/add any data but if you have visited the page before and Internet is down, you will be able to view the page (it will be loaded from cache).

### Will I get the full source code?

No. For Regular license as the code will be minified for regular license.

Yes, for Standard and Extended Licenses.

### Can I can sell the items even if I don't have stock?

Yes, you can sell the item even if it's out of stock, system will set the quantity to -ve and adjust it on purchase.

### Why I need to set cron job?

Cron job need to be set to generate recurring sales and send payment requests for due payments.

### Can I change the customer view bill content?

No. There is no option to change the customer view contents. You can cover them with promo video or any other details. You can resize the windows as you need.

## Users

### How many user roles are available?

MPS has option to add User Roles and set Permissions as you need.

1.  Super (super admin)
    - Can perform all actions
2.  Customer (site customer)
    - Can update customer company details
    - Can view own sale, recurring sale and payments
3.  Supplier (site supplier)
    - Can update supplier company details
    - Can view own purchases and payments
4.  Add User Role
    - You can set Permissions for the role

### Which one is the default user role?

You can select the user roles while adding new user.

### Where can I set permissions for user role?

Please visit the list user roles and then from actions column click the first icon to set user role permissions.

### Can I add new user role?

Yes, you can add new user role from users menu.

## Payments

### What payment gateways are available in MPS?

PayPal for online payments while for credit/debit card you can choose any of the following

1. Stripe,
2. PayPal Pro,
3. PayPal Rest APIs
4. Authorize.net

### Can I have recurring sale or subscription?

Yes, you can add recurring sale and system will generate sale and payment request automatically once the cron job run. There is no option for user subscription.

## Errors

### Why am I getting CloudFlare Security or Blank error on verification while installation the item?

If you are not getting any error but blank red alert or CloudFlare Security error mean your request is no reaching to verification server. Please check that you server is not blocking the curl request and secondly there are chances that CloudFlare might be challenging your request due to various reasons. Please check with your host and request them to white list CloudFlare IPs https://www.cloudflare.com/ips Updating your Anti-Virus and Browser might help. You can check with your host too.

You can try different host and/or install it locally with any web platform `easyphp` / `lamp` / `mamp` / `wamp` / `xampp`.

### Why am I getting 500 Internal Server Error?

You shouldn't get such error if the server requirements were fine while installing the item.

500 are server internal errors and you can check your server error log to get more details of the error, if you are on live server and not sure, you can check with your host.

You can check the app logs in `storage/logs/` directory. Once you have the error details please ask question on [support portal](https://tecdiary.net/support) with details, we will check and suggest you the solution.

### Why I can't send emails?

Please double check your email configuration details in system settings.

### Why I am getting db error and can't login?

Please make sure that your database server is up and running, then check .env file in main directory for database details.

### Why some items are missing from order when I add 100+ items?

There is no restriction in MPS code on the number of order items. If you are having such issue, please check your PHP configuration file (php.ini) for `max_input_vars` and set it to higher number i.e, 10000. You might need to increase `max_input_time` and `max_execution_time` too.
