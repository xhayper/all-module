# DO NOT INSTALL THIS PACKAGE
It will install all NPM package to your PC (Around 1.4Mil).

But if you manage to install this module, here's how to use it

```js
const all_modules = require("all_modules");
// Now all_modules.{MODULE NAME} to use that module
all_modules.fs;
all_modules.axios;
```

# How to update it
In the package source, there's a file named "update-modules.js", run that, and it will update the package list for you.

# Incase if something fucked up
There's a backup package.json in the source folder called "package-backup.json" that have no package dependencies list.
