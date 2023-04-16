

define(function () {
  return function isBold() {
    const fontWeight = window.getComputedStyle(element).fontWeight;
    return (
      fontWeight === "bold" ||
      fontWeight === "bolder" ||
      parseInt(fontWeight, 10) >= 700
    );
  };
});
