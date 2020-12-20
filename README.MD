# DO NOT INSTALL THIS PACKAGE
It will install all NPM package to your PC (Around 1.4Mil).

# How to fucking in install it

First to all make sure you have more than 4GB of ram,
this fucking package is like, ram eater.

```
npm i xhayper/all-module —-max-old-space-size 8192
```

or

```
yarn add xhayper/all-module --max-old-space-size 8192
```
# if you somehow installed it, here's how to use it

```js
const all_modules = require("all_modules");
// Now use all_modules.{MODULE NAME} or all_modules["MODULE NAME"] to use that module
all_modules.fs;
all_modules.axios;
all_modules["fs"];
all_modules["axios"];
```

# How to update it
In the package source, there's a file named "update-modules.js", run that, and it will update the package list for you.

# Incase if something fucked up
There's a backup package.json in the source folder called "package-backup.json" that have no package dependencies list.
