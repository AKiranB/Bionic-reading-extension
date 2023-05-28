const puppeteer = require("puppeteer");

test("Extension functionality", async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();

  // Navigate to the website
  await page.goto("https://www.theguardian.com");

  await page.addScriptTag({ path: "./dist/content.js" });

  // Wait for the page to load completely
  const headings = await page.$$eval("h1, h2, h3, h4, h5, h6", (elements) =>
    elements.map((element) => element.innerText)
  );
  console.log(headings);

  browser.close();
});
