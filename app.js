// IFFE is used to scope/contain all variables
(function() {
  // The DOM queries are stored in vairables for readability reason
  // So that, we can name them
  const catImgEl = document.querySelector("#cat");
  const countEl = document.querySelector("#count");

  let iCount = 0;

  catImgEl.addEventListener("click", () => {
    countEl.textContent = iCount++;
  });
})();
