import puppeteer from "puppeteer";

test("Are Correct Elements Bold", async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto("https://www.theguardian.com");
  await page.addScriptTag({ path: "./dist/content.js" });

  const tags = await page.$$eval("h2, h3, h4, h5, h6", (elements: any) =>
    elements.map((element) => {
      return element.innerHTML;
    })
  );

  console.log(tags);

  const boldTag = "<b>";
  const closingBoldTag = "</b>";

  tags.forEach((tag: any) => {
    const words = tag.split(" ");
    words.forEach((word: string) => {
      if (word.length > 3) {
        const firstTag = word.slice(0, 3);
        const secondTag = word.slice(6, word.length);
        expect(firstTag).toEqual(boldTag);
        expect(secondTag).toEqual(closingBoldTag);
      }
    });
  });

  browser.close();
});
