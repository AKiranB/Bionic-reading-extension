function boldWords(sliceLength, word) {
    let slicedChars = word.slice(0, sliceLength);
    const restWord = word.slice(sliceLength);
    let boldChars = `<b>${slicedChars}</b>`;
    const result = boldChars + restWord;
    return result;
}
export { boldWords };
