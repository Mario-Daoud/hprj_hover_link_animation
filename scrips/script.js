const setup = () => {
  for (const link of  document.getElementsByClassName("link")) {
    link.onmousemove = (e) => {
      const decimal = e.clientX / link.offsetWidth;

      const basePercentage = 70,
        percentageRange = 20,
        adjustablePercent = percentageRange * decimal;

        const colorPercent = basePercentage + adjustablePercent;
        link.style.setProperty("--color-percent", `${colorPercent}%`);

    }
  }
}
window.addEventListener("load", setup);
