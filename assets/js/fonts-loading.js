// Removes the FOUC guard class once webfonts are ready (or after a timeout).
document.documentElement.classList.add("fonts-loading");
(document.fonts ? document.fonts.ready : Promise.resolve()).then(function () {
  document.documentElement.classList.remove("fonts-loading");
});
setTimeout(function () { document.documentElement.classList.remove("fonts-loading"); }, 1500);
