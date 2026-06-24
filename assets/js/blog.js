// Blog category filter
(function () {
  var chips = document.querySelectorAll("[data-blog-filters] .filter-chip");
  var cards = document.querySelectorAll("[data-blog-grid] .blog-card");
  var featured = document.querySelector(".blog-featured");
  chips.forEach(function (chip) {
    chip.addEventListener("click", function () {
      chips.forEach(function (c) { c.classList.remove("active"); });
      chip.classList.add("active");
      var f = chip.getAttribute("data-filter");
      cards.forEach(function (card) {
        var show = f === "all" || card.getAttribute("data-category") === f;
        card.style.display = show ? "" : "none";
      });
      if (featured) {
        var fShow = f === "all" || featured.getAttribute("data-category") === f;
        featured.style.display = fShow ? "" : "none";
      }
    });
  });
})();
