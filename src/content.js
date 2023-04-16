const elements = document.querySelectorAll("body *");

function isBold(element) {
  const fontWeight = window.getComputedStyle(element).fontWeight;
  return (
    fontWeight === "bold" ||
    fontWeight === "bolder" ||
    parseInt(fontWeight, 10) >= 700
  );
}

const tags = ["P", "SIDE", "SPAN", "H3", "H4", "H5", "H6"];

for (let element of elements) {
  if (element.innerText && tags.includes(element.tagName) && !isBold(element)) {
    const wordArray = element.innerText.split(" ");
    let resultArray = [];

    for (let i = 0; i < wordArray.length; i++) {
      if (wordArray[i].length > 3) {
        let firstThreeChars = wordArray[i].slice(0, 3);
        const restWord = wordArray[i].slice(3);
        let boldChars = `<b style="font-weight: 600;">${firstThreeChars}</b>`;
        const result = boldChars + restWord;
        resultArray.push(result);
      } else if (wordArray[i].length <= 3) {
        let firstTwoChars = wordArray[i].slice(0, 2);
        const restWord = wordArray[i].slice(2);
        let boldChars = `<b style="font-weight: 600;">${firstTwoChars}</b>`;
        const result = boldChars + restWord;
        resultArray.push(result);
      } else {
        resultArray.push(wordArray[i]);
      }
    }

    const result = resultArray.join(" ");
    element.innerHTML = result;
  }
}
