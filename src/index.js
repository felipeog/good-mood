window.addEventListener("load", () => {
  const turbulence = document.querySelector("#distortion-filter feTurbulence");

  setInterval(() => {
    turbulence.seed.baseVal = Math.floor(Math.random() * 10);
  }, 200);
});
