# Sales & Deliveries

[[toc]]

## Sales

Invoices pages has Date, Reference, Customer, Status, Grand total and Actions columns. You can view, email, edit and delete any invoice. The invoices table can be sorted for date and reference and searched/filtered for date, reference, customer and status. There is date range input in the table footer to get the periodic invoices.

The add invoice page has the following fields

1.  Type
2.  Date
3.  Reference
4.  Customer
5.  Order Taxes
6.  Shipping Fee
7.  discount
8.  Order products - you can search products or scan barcode
9.  Custom Fields
10. Attachments
11. Details
12. Draft - if sale is still a draft
13. Auto create payment for the sale

Once you unchecked the draft, the sale will be finalized and the grand total amount will be added to the customer balance and sync stock (if enable in settings). If the add payment was checked, the payment will be added and customer will be notified about the invoice and payment request.

## Deliveries

You can add delivery for any sale from sale's actions menu and those will be listed on list deliveries page. You can view & print the delivery and edit it to update the status.

## Recurring Sales

Recurring sales can be added for daily, weekly, monthly, quarterly, semiannually, annually, biennially and triennially. System will automatically add sale for the recurring sale once start date reached (first time) or date (if create before set) for all active recurring sales along with payment. The list recurring sales table can be sorted for date and reference and searched/filtered for date, reference, and customer.

::: warning Require Cron Job
Recurring sales require you to setup cron job to run at least once daily. You can add cron job for <br />`* * * * * cd /path/to/mps && php artisan schedule:run >> /dev/null 2>&1`
:::