"use strict";
const elements = document.querySelectorAll("body *");
function boldWords(sliceLength, word) {
    let slicedChars = word.slice(0, sliceLength);
    const restWord = word.slice(sliceLength);
    let boldChars = `<b style="font-weight: 600;">${slicedChars}</b>`;
    const result = boldChars + restWord;
    return result;
}
function isBold(element) {
    const fontWeight = window.getComputedStyle(element).fontWeight;
    return (fontWeight === "bold" ||
        fontWeight === "bolder" ||
        parseInt(fontWeight, 10) >= 700);
}
const tags = ["P", "SIDE", "SPAN", "H3", "H4", "H5", "H6"];
for (let element of elements) {
    if (element.innerHTML && tags.includes(element.tagName) && !isBold(element)) {
        const wordArray = element.innerText.split(" ");
        let resultArray = [];
        for (let i = 0; i < wordArray.length; i++) {
            if (wordArray[i].length > 3) {
                const word = wordArray[i];
                const result = boldWords(3, word);
                resultArray.push(result);
            }
            else if (wordArray[i].length <= 3) {
                const word = wordArray[i];
                const result = boldWords(2, word);
                resultArray.push(result);
            }
            else {
                resultArray.push(wordArray[i]);
            }
        }
        const result = resultArray.join(" ");
        element.innerHTML = result;
    }
}
