import {createRouter,createWebHistory} from "vue-router";
import Home from "./views/home.vue";
import About from "./views/about.vue";
import Test from "./views/test.vue";
const routes = [
  { path: "/", component: Home, name: "Home" },
  {
    path: "/about",
    component: About,
    name: "About",
    children: [
      {
        path: "test",
        component: Test,
        name: "Test",
      },
    ],
  },
];

// 3. 创建路由实例并传递 `routes` 配置
// 你可以在这里输入更多的配置，但我们在这里
// 暂时保持简单
const router = createRouter({
  // 4. 内部提供了 history 模式的实现。为了简单起见，我们在这里使用 hash 模式。
  history: createWebHistory(),
  routes, // `routes: routes` 的缩写
});
export { router };
