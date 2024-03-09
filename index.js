// 检测网页加载时间
async function measurePageLoadTime(url) {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  const startTime = Date.now();
  await page.goto(url);
  const endTime = Date.now();
  await browser.close();
  return endTime - startTime;
}

// 检测网页的可用性
async function checkPageAvailability(url) {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  const response = await page.goto(url);
  await browser.close();
  return response.status() === 200;
}