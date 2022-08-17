## microrole
通过vue指令，管理or更改权限元素属性（类名）

注:必须要有vue-router

## 使用
```js
//in main.js
app.use(vRole('key'))// localstorage key.you have to save RoleInfo before the step
```
在组件中控制样式信息
```html
  <div id="aboutBlock" v-role="'aboutBtn'"></div>
```
之后更改该组件类名，就可以直接在权限信息中更改，而无需更改代码or进入CI/CD流程。
<!-- 可以单独维护一份css，一份roleInfo，roleInfo中一元素添加类名，css中添加一条规则 -->

ps:个人建议使用tailwindcss的cdn配合chrome 插件，只需写一个小的popup或contenttype中加dom，然后对指定元素添加类名，tailwindcss会动态添加css规则，就可以可视化，看到更改的效果，然后用这个信息（元素类名信息和css新规则信息）更新一下roleinfo 和 css就好

## 可视化工具
输入路由配置，爬取项目中所有标识/权限元素，把每个元素截图并标识，并把元素信息记录至json，省下管理成本
```js
const helper = require("microrole/helper");
var menu = [
  { name: "About", path: "about" },
  { name: "Test", path: "about/test" },
];
helper.getRoleInfo(menu, "http://localhost:3000",'png');
```
