// IFFE is used to scope/contain all variables
(function() {
  // The DOM queries are stored in vairables for readability reason
  // So that, we can name them
  const cat1ImgEl = document.querySelector("#cat1");
  const count1El = document.querySelector("#count1");
  const cat2ImgEl = document.querySelector("#cat2");
  const count2El = document.querySelector("#count2");

  const handlerClick = countEl => {
    // A local variable that is only accessible within this scope
    let iCount = 0;

    return () => {
      countEl.textContent = ++iCount;
    };
  };

  cat1ImgEl.addEventListener("click", handlerClick(count1El));
  cat2ImgEl.addEventListener("click", handlerClick(count2El));
})();
