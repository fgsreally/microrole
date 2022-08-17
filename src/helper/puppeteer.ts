import { routeInfo, projectInfo } from "./types";
import puppeteer from "puppeteer";
import fs from "fs";
import path from "path";
import colors from "colors";

async function getPageBlock(
  page: any,
  name: string,
  url: string,
  property: string,
  p: string,
  outTime: number = 1000
) {
  await page.goto(url);
  await page.waitForTimeout(outTime);

  var data: any = await page.$$eval(
    `[${property}]`,
    (elements: HTMLElement[], property: string) =>
      elements.map((element) => element.getAttribute(property)),
    property
  );
  await page.screenshot({
    path: path.resolve(process.cwd(), p, `${name}.png`), //图片保存路径
    type: "png",
    fullPage: true,
  });
  console.log(
    colors.green(`已成功截图至--- ${path.resolve(process.cwd(), p, `${name}.png`)}`)
  );

  return data;
}

function getCss() {
  return `
[_role] {
  z-index: 100;
  border: 5px solid;
  border-image: linear-gradient(to right, #8f41e9, #578aef) 1;
}

[_role]::before {
  content: attr(_role);
  color: blue;
}
`;
}
export async function getRoleInfo(
  menu: routeInfo[],
  baseUrl: string,
  p: string,
  property: string = "_role",
  cssInfo?: string,
  outTime?: number
) {
  let ret: projectInfo = {};
  let css = "";
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  if (cssInfo) {
    css = cssInfo;
  } else {
    css = getCss();
  }
  await page.addStyleTag({
    content: css,
  });
  console.log(colors.yellow(`已更新样式`));

  for (let i of menu) {
    ret[i.name] = await getPageBlock(
      page,
      i.name,
      `${baseUrl}/${i.path}`,
      property,
      p,
      outTime
    );
    console.log(
      colors.green(
        `已成功收集${i.path}的权限组件信息--- from ${baseUrl}/${i.path}`
      )
    );
  }

  await browser.close();

  fs.writeFileSync(
    path.resolve(process.cwd(), p, "roleInfo.json"),
    JSON.stringify(ret)
  );
  console.log(colors.blue(`已成功收集所有信息`));
}
