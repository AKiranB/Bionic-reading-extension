function boldWords(sliceLength: number, word: string): string {
  let slicedChars: string = word.slice(0, sliceLength);
  const restWord: string = word.slice(sliceLength);
  let boldChars: string = `<b>${slicedChars}</b>`;
  const result: string = boldChars + restWord;
  return result;
}

export { boldWords };
