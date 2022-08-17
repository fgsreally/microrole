const helper = require("microrole/helper");
var menu = [
  { name: "About", path: "about" },
  { name: "Test", path: "about/test" },
];
helper.getRoleInfo(menu, "http://localhost:3000",'png');
