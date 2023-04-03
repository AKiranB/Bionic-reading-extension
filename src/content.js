const elements = document.querySelectorAll("body *");

// const nonBoldElements = Array.from(elements).filter((element) => {
//   const fontWeight = window.getComputedStyle(element).fontWeight;
//   return (
//     fontWeight !== "bold" &&
//     fontWeight !== "bolder" &&
//     parseInt(fontWeight, 10) < 700
//   );
// });

//Simple in process script to bold the first three characters of a word
//to help my ADHD mind to read articles on the web.
//Currently affects the layout of pages.
const tags = ["P", "A", "SIDE", "LI", "SPAN"];

for (let element of elements) {
  if (element.innerText && tags.includes(element.tagName)) {
    const wordArray = element.innerText.split(" ");
    let resultArray = [];

    for (let i = 0; i < wordArray.length; i++) {
      if (wordArray[i].length > 3) {
        let firstThreeChars = wordArray[i].slice(0, 3);
        const restWord = wordArray[i].slice(3);
        let boldChars = `<b>${firstThreeChars}</b>`;
        const result = boldChars + restWord;

        resultArray.push(boldChars + restWord);
      }
    }
    const result = resultArray.join(" ");

    element.innerHTML = result;
  }
}
