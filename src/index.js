function randomizeTurbulence() {
  const turbulence = document.querySelector("#distortion-filter feTurbulence");

  setInterval(() => {
    const seedBaseVal = Math.floor(Math.random() * 100) + 1;

    turbulence.seed.baseVal = seedBaseVal;
  }, 200);
}

window.addEventListener("load", randomizeTurbulence);
