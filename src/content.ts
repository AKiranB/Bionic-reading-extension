import { boldWords } from "./utils/index";
const elements: NodeListOf<HTMLElement> = document.querySelectorAll("body *");

function isBold(element: HTMLElement): boolean {
  const fontWeight: string = window.getComputedStyle(element).fontWeight;
  return (
    fontWeight === "bold" ||
    fontWeight === "bolder" ||
    parseInt(fontWeight, 10) >= 700
  );
}

const tags = ["P", "SIDE", "SPAN", "H3", "H4", "H5", "H6"];

for (let element of elements) {
  if (element.innerText && tags.includes(element.tagName) && !isBold(element)) {
    const wordArray: string[] = element.innerText.split(" ");
    let resultArray: string[] = [];
    for (let i = 0; i < wordArray.length; i++) {
      if (wordArray[i].length > 3) {
        const word: string = wordArray[i];
        const result: string = boldWords(3, word);
        resultArray.push(result);
      } else if (wordArray[i].length <= 3) {
        const word: string = wordArray[i];
        const result: string = boldWords(2, word);
        resultArray.push(result);
      } else {
        resultArray.push(wordArray[i]);
      }
    }
    const result: string = resultArray.join(" ");
    element.innerHTML = result;
  }
}
