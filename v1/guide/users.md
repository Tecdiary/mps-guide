# Users, Roles & Salaries

[[toc]]

## Users/Employees

Users page has Name, Username, Email, Active, Roles, Default location, allowed locations, Date of Birth, Date of Hire, Salary, Hourly Rate, Commission Rate, Commission Method, Address, Clock in option, User Permissions, If Required to change password and Actions columns. You can view time clock logs, view salaries, edit and delete any user. The users table can be sorted for name, username, email and active and searched/filtered for name, username, email and others.

The user form has following fields

1.  **Name**
2.  **Phone**
3.  **Email**
4.  **Username**
5.  **Default Location** - will be auto selected on login
6.  **Locations** - all allowed locations
7.  **Auto clock in** - with login or open pos register
8.  **Date of Birth**
9.  **Employee Number**
10. **Date of Hire**
11. **Salary**
12. **Hourly Rate**
13. **Commission Rate**
14. **Address**
15. **Documents** - file name and select the file
16. **Password with confirmation**
17. **Roles** - can have multiple roles
18. **Active** - if the user is active and can login
19. **view all records** - can view all records included added by others
20. **Edit others records**- can edit all records included added by others
21. **Allow bulk actions** - can perform bulk actions, mean can select multiple records and delete (if has permission) etc
22. **force password change** - force user to change password on next login
23. **can be impersonated on POS** - this user can login with QRCode on POS

## User Roles

MPS has option to add user roles and set permissions for the roles as you like. Super admin role is not change-able. Please be very careful while setting permissions for customer and suppliers group as they are not part of the organization. You only need name to add a user role. The list user roles page has Created at, Role name and Actions menu. You can set permissions, edit and delete any role.

The permissions page is quite simple with all permissions as checkboxes. You check all the required permissions for the role and save.

## User Salaries

Salaries page has Date, Created at, Amount, Advance, Type, Status, User, Account, Details and Actions columns. You can view, edit and delete any salary. The salaries table can be sorted for date, created at, amount, advance, type and status and searched/filtered for user, account and details.

You should setup cron job to automatically calculate user salary on start of month. If your don't have salary, it will be calculated for the hourly rate, otherwise the salary amount will be added after deducting any advance salary (if any). You can add advance salary for any user and it will be settled in the next salary.

The salaries form has following fields

1.  **Date**
2.  **Reference**
3.  **User** - salary will be added for this user
4.  **Account** - salary will be deducted from this account
5.  **Amount**
6.  **Type** - salary or commission payment
7.  **Status** - paid or due
8.  **Attachments** - add attachments if needed
9.  **Details** - further details for the salary
10. **If this is Advance Salary** - this is advance payment and shall be deducted from next salary

**_List salaries page has button to generate salaries for all the users._**

####

**Support**

Just remember, we’re always a [question](https://tecdiary.net/support/modern-point-of-sale-solution/ask_question) away if you need help.
