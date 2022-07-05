window.addEventListener("load", ()=> {
  const grid = new Isotope("section", {
    itemSelector: "article",
    columnWidth: "article",
    transitionDuration: "0.5s"
  });

  const btns = document.querySelectorAll("main ul li");

  for(let el of btns) {
    el.addEventListener("click", e=> {
      e.preventDefault();

      const sort = e.currentTarget.querySelector("a").getAttribute("href");

      grid.arrange({
        filter : sort
      });

      for(let el of btns) {
        el.classList.remove(on);
      }

      e.currentTarget.classList.add("on");
    })
  }
});