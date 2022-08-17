import type { App } from "vue";
let dataSet: null | object = null;

export function update() {
  dataSet = null;
}
export default function vRole(
  key: string = "__ROLE__",
  property: string = "_role",
  mode: string = "hot",
  error?: Function,
  instance?: any //just for vue2
) {
  return {
    install(app: App) {
      if (app.version.startsWith("3")) {
        app.directive("data", {
          //in test
          mounted(el: HTMLElement, binding: any) {
            let routeName = (app as any).config.globalProperties.$route.name;
            binding.instance;
            let data = (dataSet as any).role?.data?.[routeName]?.[
              binding.value
            ];
            binding.instance[binding.value] = data;
          },
        });
        app.directive("role", {
          mounted(el: HTMLElement, binding: any) {
            el.setAttribute(property, binding.value);
            try {
              if (!dataSet) {
                let data = localStorage.getItem(key) as string;
                if (!data) {
                  console.error(`missing key ${key}`);
                  return;
                }
                dataSet = JSON.parse(data);
              }
              let routeName = (app as any).config.globalProperties.$route.name;
              let cssInfo = (dataSet as any).role?.class?.[routeName]?.[
                binding.value
              ];

              if (cssInfo) {
                el.classList.add(cssInfo);
                el.dataset.lastClass = cssInfo;
              }
            } catch (e) {
              error && error(e);
            }
          },
          updated(el: HTMLElement, binding: any) {
            if (mode === "freeze") {
              return;
            }
            try {
              if (!dataSet) {
                let data = localStorage.getItem(key) as string;
                if (!data) {
                  console.error(`localstorage missing key ${key}`);
                  return;
                }
                dataSet = JSON.parse(data);
              }
              let lastCss = el.dataset.lastClass;
              lastCss && el.classList.remove(lastCss);
              let routeName = (app as any).config.globalProperties.$route.name;
              let cssInfo = (dataSet as any).role?.class?.[routeName]?.[
                binding.value
              ];
              if (cssInfo) {
                el.classList.add(cssInfo);
                el.dataset.lastClass = cssInfo;
              }
            } catch (e) {
              error && error(e);
            }
          },
        });
      } else {
        (app as any).directive("role", {
          bind(el: HTMLElement, binding: any) {
            el.setAttribute(property, binding.value);
            try {
              if (!dataSet) {
                let data = localStorage.getItem(key) as string;
                if (!data) {
                  console.error(`missing key ${key}`);
                  return;
                }
                dataSet = JSON.parse(data);
              }
              let routeName = instance.$route.name;
              let cssInfo = (dataSet as any).role?.class?.[routeName]?.[
                binding.value
              ];

              if (cssInfo) {
                el.classList.add(cssInfo);
                el.dataset.lastClass = cssInfo;
              }
            } catch (e) {
              error && error(e);
            }
          },
          update(el: HTMLElement, binding: any) {
            if (mode === "freeze") {
              return;
            }
            try {
              if (!dataSet) {
                let data = localStorage.getItem(key) as string;
                if (!data) {
                  console.error(`localstorage missing key ${key}`);
                  return;
                }
                dataSet = JSON.parse(data);
              }
              let lastCss = el.dataset.lastClass;
              lastCss && el.classList.remove(lastCss);
              let routeName = instance.$route.name;
              let cssInfo = (dataSet as any).role?.class?.[routeName]?.[
                binding.value
              ];
              if (cssInfo) {
                el.classList.add(cssInfo);
                el.dataset.lastClass = cssInfo;
              }
            } catch (e) {
              error && error(e);
            }
          },
        });
      }
    },
  };
}
