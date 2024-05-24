const puppeteer = require('puppeteer-core');

async function run() {
  const browser = await puppeteer.launch({
    executablePath: '/Applications/Microsoft Edge.app/Contents/MacOS/Microsoft Edge',
    headless: true, // 是否打开浏览器，false 为打开, true 为不打开
    defaultViewport: null, // 设为 null 全屏打开，否则默认 800 * 600
  });
  const page = await browser.newPage();
  const startTime = performance.now();
  await page.goto('https://www.baidu.com');
  console.log('消耗时间:', `${(performance.now() - startTime) / 1000}s`);
}

run();
