import puppeteer from "puppeteer";

test("Are Correct Elements Bold", async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto("https://www.theguardian.com");
  await page.addScriptTag({ path: "./dist/content.js" });

  const tags = await page.$$eval(
    "h2, side, span, h3, h4, h5, h6, p",
    (elements: any) =>
      elements.map((element) => {
        return element.innerHTML;
      })
  );
  console.log(tags);

  // console.log(headings);
  // describe("Test each tag being correctly bolded", () => {});

  browser.close();
});
