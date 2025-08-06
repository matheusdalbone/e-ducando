import { COLORS } from "./globalVariables";

(function setupColors() {
  const root = document.documentElement;
  Object.entries(COLORS).forEach(([key, value]) => {
    root.style.setProperty(`--${key}`, value);
  });
})();